import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { QuestionsRepository } from './questions.repository';
import { QuestionType } from 'prisma';
import { GetQuestionDto } from './dto/get-question.dto';
import { mapQuestionToGetQuestionDto } from './questions.mapper';

@Injectable()
export class QuestionsService {
  constructor(private readonly questionsRepository: QuestionsRepository) {}

  async create(dto: CreateQuestionDto): Promise<GetQuestionDto> {
    const question = await this.questionsRepository.create({
      type: dto.type,
      title: dto.title,
      quiz: {
        connect: {
          id: dto.quizId,
        },
      },
    });

    return mapQuestionToGetQuestionDto(question);
  }

  async findAllByQuizId(quizId: string): Promise<GetQuestionDto[]> {
    const questions = await this.questionsRepository.findAllByQuizId(quizId);
    return questions.map(mapQuestionToGetQuestionDto);
  }

  async update(id: string, dto: UpdateQuestionDto): Promise<GetQuestionDto> {
    const question = await this.questionsRepository.update(id, {
      type: dto.type as QuestionType,
      title: dto.title,
      quiz: {
        connect: {
          id: dto.quizId,
        },
      },
    });

    return mapQuestionToGetQuestionDto(question);
  }

  remove(id: string) {
    return this.questionsRepository.delete(id);
  }
}
