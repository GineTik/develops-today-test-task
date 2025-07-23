import { Injectable } from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { QuizzesRepository } from './quizzes.repository';
import { GetShortQuizDto } from './dto/get-short-quiz.dto';
import { GetDetailedQuizDto } from './dto/get-detailed-quiz.dto';
import {
  mapQuizToGetDetailedQuizDto,
  mapQuizToGetShortQuizDto,
} from './quizzes.mapper';

@Injectable()
export class QuizzesService {
  constructor(private readonly quizzesRepository: QuizzesRepository) {}

  async create(createQuizDto: CreateQuizDto): Promise<GetShortQuizDto> {
    const quiz = await this.quizzesRepository.create({
      title: createQuizDto.title,
    });

    console.log(quiz);

    return mapQuizToGetShortQuizDto(quiz);
  }

  async findAll(): Promise<GetShortQuizDto[]> {
    const quizzes = await this.quizzesRepository.findAll();
    return quizzes.map(mapQuizToGetShortQuizDto);
  }

  async findOne(id: string): Promise<GetDetailedQuizDto> {
    const quiz = await this.quizzesRepository.findById(id);
    return mapQuizToGetDetailedQuizDto(quiz);
  }

  async update(
    id: string,
    updateQuizDto: UpdateQuizDto,
  ): Promise<GetShortQuizDto> {
    const quiz = await this.quizzesRepository.update(id, updateQuizDto);
    return mapQuizToGetShortQuizDto(quiz);
  }

  async remove(id: string): Promise<void> {
    await this.quizzesRepository.delete(id);
  }
}
