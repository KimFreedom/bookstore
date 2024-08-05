import { Prop, Schema, SchemaFactory, SchemaOptions } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type BookDocument = Book & Document;

const options: SchemaOptions = {
    timestamps: true,
};

@Schema(options)
export class Book {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true})
    author: string;

    @Prop({ required: true})
    description: string;

    @Prop({ required: true})
    price: number;

    @Prop({ required: true})
    salesCount: number;

    @Prop({ required: true})
    stockQuantity: number;
}

export const BookSchema = SchemaFactory.createForClass(Book);