import { faker } from "@faker-js/faker";
import { ApiProperty } from "@nestjs/swagger";

export class QuestionListSerialization {
    @ApiProperty({
        required: true,
        nullable: false,
        example: faker.person.firstName(),
    })
    readonly name: string;

    @ApiProperty({
        required: true,
        nullable: false,
        example: faker.person.lastName(),
    })
    readonly description: string;

    @ApiProperty({
        description: 'Date created at',
        example: faker.date.recent(),
        required: true,
        nullable: false,
    })
    readonly createdAt: Date;

    @ApiProperty({
        description: 'Date updated at',
        example: faker.date.recent(),
        required: true,
        nullable: false,
    })
    readonly updatedAt: Date;
}