import {
    Controller,
    Get
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
    PaginationQuery,
    PaginationQueryFilterInBoolean
} from 'src/common/pagination/decorators/pagination.decorator';
import { PaginationListDto } from 'src/common/pagination/dtos/pagination.list.dto';
import { PaginationService } from 'src/common/pagination/services/pagination.service';
import {
    ResponsePaging
} from 'src/common/response/decorators/response.decorator';
import {
    IResponsePaging
} from 'src/common/response/interfaces/response.interface';
import {
    QUESTION_DEFAULT_AVAILABLE_ORDER_BY,
    QUESTION_DEFAULT_AVAILABLE_SEARCH,
    QUESTION_DEFAULT_IS_ACTIVE,
    QUESTION_DEFAULT_ORDER_BY,
    QUESTION_DEFAULT_ORDER_DIRECTION,
    QUESTION_DEFAULT_PER_PAGE,
} from 'src/modules/question/constants/question.list.constant';
import {
    QuestionAdminListDoc
} from 'src/modules/question/docs/question.admin.doc';
import {
    QuestionEntity
} from 'src/modules/question/repository/entities/question.entity';
import { QuestionListSerialization } from 'src/modules/question/serializations/question.list.serialization';
import { QuestionService } from 'src/modules/question/services/question.service';

@ApiTags('modules.admin.question')
@Controller({
    version: '1',
    path: '/question',
})
export class QuestionAdminController {
    constructor(
        private readonly paginationService: PaginationService,
        private readonly questionService: QuestionService,
    ) {}

    @QuestionAdminListDoc()
    @ResponsePaging('question.list', {
        serialization: QuestionListSerialization,
    })
    // @AuthJwtAdminAccessProtected()
    @Get('/list')
    async list(
        @PaginationQuery(
            QUESTION_DEFAULT_PER_PAGE,
            QUESTION_DEFAULT_ORDER_BY,
            QUESTION_DEFAULT_ORDER_DIRECTION,
            QUESTION_DEFAULT_AVAILABLE_SEARCH,
            QUESTION_DEFAULT_AVAILABLE_ORDER_BY
        )
        { _search, _limit, _offset, _order }: PaginationListDto,
        @PaginationQueryFilterInBoolean('isActive', QUESTION_DEFAULT_IS_ACTIVE)
        isActive: Record<string, any>,
    ): Promise<IResponsePaging> {
        const find: Record<string, any> = {
            ..._search,
            ...isActive,
        };

        const questions: QuestionEntity[] = await this.questionService.findAll(find, {
            paging: {
                limit: _limit,
                offset: _offset,
            },
            order: _order,
        });

        const total: number = 12;
        const totalPage: number = this.paginationService.totalPage(
            total,
            _limit
        );

        return {
            _pagination: { total, totalPage },
            data: questions,
        };
    }
}
