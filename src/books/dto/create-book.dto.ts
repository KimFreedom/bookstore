import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
    @ApiProperty({
        description: 'The title of a Book',
        type: String
    })
    title: string;

    @ApiProperty({
        description: 'The Author of a Book',
        type: String
    })
    author: string;

    @ApiProperty({
        description: 'The description of a Book',
        type: String
    })
    description: string;

    @ApiProperty({
        description: 'The price of a Book',
        type: Number,
        minimum: 0,
        default: 0
    })
    price: number;

    @ApiProperty({
        description: 'The sales count of a Book',
        type: Number,
        minimum: 0,
        default: 0
    })
    salesCount: number;

    @ApiProperty({
        description: 'The stock quantity of a Book',
        type: Number,
        minimum: 0,
        default: 0
    })
    stockQuantity: number;
}