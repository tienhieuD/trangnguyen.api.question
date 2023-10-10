import { ENUM_PAGINATION_ORDER_DIRECTION_TYPE } from 'src/common/pagination/constants/pagination.enum.constant';

export const QUESTION_DEFAULT_ORDER_BY = 'createdAt';
export const QUESTION_DEFAULT_ORDER_DIRECTION =
    ENUM_PAGINATION_ORDER_DIRECTION_TYPE.ASC;
export const QUESTION_DEFAULT_PER_PAGE = 20;
export const QUESTION_DEFAULT_AVAILABLE_ORDER_BY = ['name', 'createdAt'];
export const QUESTION_DEFAULT_AVAILABLE_SEARCH = ['name'];
export const QUESTION_DEFAULT_IS_ACTIVE = [true, false];
