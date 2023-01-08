import { Module } from '@nestjs/common';
import { StudentService } from 'src/providers/student-service/student-service.service';
import { StudentController } from '../controllers/studentControllers/student.controller';

@Module({
  imports: [],
  controllers: [StudentController],
  providers: [StudentService],
})
export class AppModule {}
