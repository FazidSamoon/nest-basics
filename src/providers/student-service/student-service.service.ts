import { Injectable } from '@nestjs/common';
import { StudentDto } from 'src/controllers/studentControllers/dto/student.dto';
import { students } from '../../db'; 

@Injectable()
export class StudentService {
    private student = students

    getStudents() : StudentDto[] {
        return this.student
    }

    getStudentById(studentId: string) : StudentDto {
        return this.student.find(student => student.id === studentId)
    }

    createStudent(student: StudentDto) : StudentDto {
        this.student.push(student)
        return student
    }

    updateStudent(studentId: string, student:StudentDto) : StudentDto {
        const index = this.student.findIndex(student => student.id === studentId)
        this.student[index] = student
        return student
    }
}
