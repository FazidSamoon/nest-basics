import { Controller, Get, Patch, Post, Req, Res } from "@nestjs/common";


@Controller("students")
export class StudentController {

    @Get()
    getStudents() {
        return "get all students"
    }

    @Get("/:id")
    getStudentById(@Req() Req, @Res() Res) {
        Res.status(201).send(Req.params.id)
    }

    @Post()
    createStudent(@Req() Req, @Res() Res) : any {
        Res.status(201).send(Req.body)
    }

    @Patch("/:id")
    updateStudent() {
        return "update student"
    }
}