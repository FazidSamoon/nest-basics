import { Body, Controller, Get, Param, Patch, Post, Req, Res } from "@nestjs/common";
import { StudentService } from "src/providers/student-service/student-service.service";
import { StudentDto } from "./dto/student.dto";


@Controller("students")
export class StudentController {

    constructor(
        private readonly studentService: StudentService
    ) {}

    @Get()
    getStudents() : StudentDto[] {
        return this.studentService.getStudents()
    }

    @Get("/:id")
    getStudentById(
        @Param("id") id: string,
    ) : StudentDto {
        return this.studentService.getStudentById(id)
    }

    @Post()
    createStudent(
        @Body() student: StudentDto,
    ) : StudentDto {
        return this.studentService.createStudent(student)
    }

    @Patch("/:id")
    updateStudent(
        @Param("id") id: string,
        @Body() student: StudentDto,
    ) : StudentDto {
        return this.studentService.updateStudent(id, student)
    }
}