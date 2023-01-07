import { Module } from '@nestjs/common';
import { StudentController } from '../controllers/studentControllers/student.controller';

@Module({
  imports: [],
  controllers: [StudentController],
})
export class AppModule {}
