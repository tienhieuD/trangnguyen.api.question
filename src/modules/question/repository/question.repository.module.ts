import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DATABASE_CONNECTION_NAME } from 'src/common/database/constants/database.constant';
import {
    QuestionEntity,
    QuestionSchema,
} from 'src/modules/question/repository/entities/question.entity';
import { QuestionRepository } from 'src/modules/question/repository/repositories/question.repository';

@Module({
    providers: [QuestionRepository],
    exports: [QuestionRepository],
    controllers: [],
    imports: [
        MongooseModule.forFeature(
            [
                {
                    name: QuestionEntity.name,
                    schema: QuestionSchema,
                },
            ],
            DATABASE_CONNECTION_NAME
        ),
    ],
})
export class QuestionRepositoryModule {}
