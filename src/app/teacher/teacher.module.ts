import { Module } from '@nestjs/common';
import { TeacherController } from 'src/controllers/teacherControllers/teacher/teacher.controller';

@Module({
    controllers: [TeacherController],
    providers: []
})
export class TeacherModule {}
