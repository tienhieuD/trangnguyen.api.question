import {
    IDatabaseFindAllOptions
} from 'src/common/database/interfaces/database.interface';
import {
    QuestionEntity
} from 'src/modules/question/repository/entities/question.entity';

export interface IQuestionService {
    findAll(
        find?: Record<string, any>,
        options?: IDatabaseFindAllOptions
    ): Promise<QuestionEntity[]>;
}
