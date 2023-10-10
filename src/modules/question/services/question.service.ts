import { Injectable } from '@nestjs/common';
import {
    IDatabaseFindAllOptions
} from 'src/common/database/interfaces/database.interface';
import {
    QuestionEntity,
} from 'src/modules/question/repository/entities/question.entity';
import { QuestionRepository } from 'src/modules/question/repository/repositories/question.repository';
import { IQuestionService } from '../interfaces/question.service.interface';

@Injectable()
export class QuestionService implements IQuestionService {
    constructor(private readonly questionRepository: QuestionRepository) {}

    async findAll(
        find?: Record<string, any>,
        options?: IDatabaseFindAllOptions
    ): Promise<QuestionEntity[]> {
        return this.questionRepository.findAll<QuestionEntity>(find, options);
    }
}
