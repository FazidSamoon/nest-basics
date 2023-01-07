import { Controller, Get, Patch, Post } from '@nestjs/common';

@Controller('teacher')
export class TeacherController {

    @Get()
    getTeachers() {
        return "get all teachers"
    }

    @Get("/:id")
    getTeacherById() {
        return "get teacher by id"
    }

    @Post() 
    createTeacher() {
        return "create teacher"
    }

    @Patch("/:id")
    updateTeacher() {
        return "update teacher"
    }
}
