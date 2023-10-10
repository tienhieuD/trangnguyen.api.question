import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { CallbackWithoutResultAndOptionalError, Document } from 'mongoose';
import { DatabaseMongoUUIDEntityAbstract } from 'src/common/database/abstracts/mongo/entities/database.mongo.uuid.entity.abstract';
import { DatabaseEntity } from 'src/common/database/decorators/database.decorator';

export const QuestionDatabaseName = 'questions';

@DatabaseEntity({ collection: QuestionDatabaseName })
export class QuestionEntity extends DatabaseMongoUUIDEntityAbstract {
    @Prop({
        required: true,
        index: true,
        unique: true,
        lowercase: true,
        trim: true,
        maxlength: 30,
        type: String,
    })
    name: string;

    @Prop({
        required: false,
        trim: true,
        type: String,
    })
    description?: string;
}

export const QuestionSchema = SchemaFactory.createForClass(QuestionEntity);

export type QuestionDoc = QuestionEntity & Document;

QuestionSchema.pre('save', function (next: CallbackWithoutResultAndOptionalError) {
    this.name = this.name.toLowerCase();

    next();
});
