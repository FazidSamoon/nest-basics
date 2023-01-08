import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { StudentController } from 'src/controllers/studentControllers/student.controller';
import { ValidStudentMiddleware } from '../../middleware/validStudent.middleware';
import { StudentService } from 'src/providers/student-service/student-service.service';

@Module({
    controllers: [StudentController],
    providers: [StudentService]
})
export class StudentModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(ValidStudentMiddleware).forRoutes({
            path: 'students/:id',
            method: RequestMethod.GET
        })
        consumer.apply(ValidStudentMiddleware).forRoutes({
            path: 'students/:studentId',
            method: RequestMethod.PATCH
        })
    }
}
