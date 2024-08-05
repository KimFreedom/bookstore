import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book, BookDocument } from './schemas/book.schema';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
    constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}
    
    async findAll(page: number, limit: number, search: string): Promise<{ books:Book[], total: number }> {
        const skip = (page - 1) * limit;
        const query = search ? { $or: [{ title: new RegExp(search, 'i') }, { author: new RegExp(search, 'i') }] } : {};

        const [ books, total ] = await Promise.all([
            this.bookModel.find(query).skip(skip).limit(limit).exec(),
            this.bookModel.countDocuments(query)
        ]);

        return { books, total };
    }

    async findOne(id: string): Promise<Book> {
        return this.bookModel.findById(id).exec();
    }

    async create(createBookDto: CreateBookDto): Promise<Book> {
        const createdBook = new this.bookModel(createBookDto);
        return createdBook.save();
    }

    async update(id: string, updateBookDto: UpdateBookDto): Promise<Book> {
        return this.bookModel.findByIdAndUpdate(id, updateBookDto, { new: true }).exec();
    }

    async remove(id: string): Promise<Book> {
        return this.bookModel.findByIdAndDelete(id).exec();
    }
}