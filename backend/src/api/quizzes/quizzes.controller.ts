import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  forwardRef,
  Inject,
} from '@nestjs/common';
import { QuizzesService } from '@/api/quizzes';
import { CreateQuizDto } from '@/api/quizzes/dto/create-quiz.dto';
import { UpdateQuizDto } from '@/api/quizzes/dto/update-quiz.dto';
import { ApiResponse } from '@nestjs/swagger';
import { GetShortQuizDto } from './dto/get-short-quiz.dto';
import { GetDetailedQuizDto } from './dto/get-detailed-quiz.dto';

@Controller('quizzes')
export class QuizzesController {
  constructor(
    @Inject(forwardRef(() => QuizzesService))
    private readonly quizzesService: QuizzesService,
  ) {}

  @Post()
  @ApiResponse({
    status: 201,
    type: GetShortQuizDto,
  })
  create(@Body() createQuizDto: CreateQuizDto) {
    return this.quizzesService.create(createQuizDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    type: GetShortQuizDto,
    isArray: true,
  })
  findAll() {
    return this.quizzesService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    type: GetDetailedQuizDto,
  })
  findOne(@Param('id') id: string) {
    return this.quizzesService.findOne(id);
  }

  @Patch(':id')
  @ApiResponse({
    status: 200,
    type: GetShortQuizDto,
  })
  update(@Param('id') id: string, @Body() updateQuizDto: UpdateQuizDto) {
    return this.quizzesService.update(id, updateQuizDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.quizzesService.remove(id);
  }
}
