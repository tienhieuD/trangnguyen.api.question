import { Module } from '@nestjs/common';
import { QuestionService } from './services/question.service';
import { QuestionRepositoryModule } from 'src/modules/question/repository/question.repository.module';

@Module({
    controllers: [],
    providers: [QuestionService],
    exports: [QuestionService],
    imports: [QuestionRepositoryModule],
})
export class QuestionModule {}
