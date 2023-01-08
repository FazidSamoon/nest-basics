import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { StudentService } from 'src/providers/student-service/student-service.service';
import { makeResponse } from 'src/utilities/makeresponse';
import { StudentDto } from './dto/student.dto';
import { Request, Response } from 'express';
import { responseHeader } from 'src/utilities/makeresponse';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudents(
    @Res() res: Response
  ) {
    const response = this.studentService.getStudents();
    return makeResponse({ res, statusCode: 200, message: "successfully reterived data", data: response })
  }

  @Get('/:id')
  getStudentById(
    @Param('id') id: string,
    @Res() res: Response
    ) {
    const response = this.studentService.getStudentById(id)
    return makeResponse({ res, statusCode: 200, message: "successfully reterived data", data: response })
  }

  @Post()
  createStudent(@Body() student: StudentDto): StudentDto {
    return this.studentService.createStudent(student);
  }

  @Patch('/:id')
  updateStudent(
    @Param('id') id: string,
    @Body() student: StudentDto,
  ): StudentDto {
    return this.studentService.updateStudent(id, student);
  }
}
