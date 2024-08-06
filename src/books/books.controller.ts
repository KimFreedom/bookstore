import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, Query } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { ApiResponse } from '@nestjs/swagger';
import { Book } from './schemas/book.schema';

@Controller('api/books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {}

    @Get()
    @ApiResponse({ status: 200, description: 'List of Book has been successfully return.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async findAll(
        @Query('page') page: number = 1,
        @Query('limit') limit: number = 10,
        @Query('search') search: string = ''
    ): Promise<{ books: Book[], totalPages: number }> {
        const { books, total } = await this.booksService.findAll(page, limit, search);
        const totalPages = Math.ceil(total / limit);
        return { books, totalPages };
    }

    @Get(':id')
    @ApiResponse({ status: 200, description: 'The Book has been successfully return.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async findOne(@Param('id') id: string): Promise<Book> {
        const book = this.booksService.findOne(id);
        if (!book) {
            throw new NotFoundException(`Book with ID ${id} not found`);
        }
        return book;
    }

    @Post()
    @ApiResponse({ status: 201, description: 'The book has been successfully created.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async create(@Body() createBookDto: CreateBookDto): Promise<Book> {
        return this.booksService.create(createBookDto);
    }

    @Put(':id')
    @ApiResponse({ status: 200, description: 'The book has been successfully modified.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto): Promise<Book> {
        const updatedBook = this.booksService.update(id, updateBookDto);
        if (!updatedBook) {
            throw new NotFoundException(`Book with ID ${id} not found`);
        }

        return updatedBook;
    }

    @Delete(':id')
    @ApiResponse({ status: 200, description: 'The book has been successfully deleted.'})
    @ApiResponse({ status: 403, description: 'Forbidden.'})
    async remove(@Param('id') id: string): Promise<Book> {
        const deletedBook = this.booksService.remove(id);
        if (!deletedBook) {
            throw new NotFoundException(`Book with ID ${id} not found`);
        }

        return deletedBook;
    }
}