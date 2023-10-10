import { applyDecorators } from '@nestjs/common';
import { ENUM_DOC_REQUEST_BODY_TYPE } from 'src/common/doc/constants/doc.enum.constant';
import {
    Doc,
    DocRequest,
    DocResponsePaging
} from 'src/common/doc/decorators/doc.decorator';
import { QuestionListSerialization } from 'src/modules/question/serializations/question.list.serialization';

export function QuestionAdminListDoc(): MethodDecorator {
    return applyDecorators(
        Doc({
            operation: 'modules.public.question',
        }),
        DocRequest({ bodyType: ENUM_DOC_REQUEST_BODY_TYPE.JSON }),
        DocResponsePaging<QuestionListSerialization>('question.list', {
            serialization: QuestionListSerialization,
        })
    );
}
