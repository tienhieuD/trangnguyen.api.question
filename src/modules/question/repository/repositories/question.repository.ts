import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { DatabaseMongoUUIDRepositoryAbstract } from 'src/common/database/abstracts/mongo/repositories/database.mongo.uuid.repository.abstract';
import { DatabaseModel } from 'src/common/database/decorators/database.decorator';
import {
    QuestionDoc,
    QuestionEntity,
} from 'src/modules/question/repository/entities/question.entity';

@Injectable()
export class QuestionRepository extends DatabaseMongoUUIDRepositoryAbstract<
    QuestionEntity,
    QuestionDoc
> {
    constructor(
        @DatabaseModel(QuestionEntity.name)
        private readonly questionModel: Model<QuestionEntity>
    ) {
        super(questionModel);
    }
}
