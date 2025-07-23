import { Injectable } from '@nestjs/common';
import { Prisma, PrismaService } from 'prisma';

@Injectable()
export class QuestionsRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(input: Prisma.QuestionCreateInput) {
    return this.prisma.question.create({
      data: input,
    });
  }

  findAllByQuizId(quizId: string) {
    return this.prisma.question.findMany({ where: { quizId } });
  }

  update(id: string, input: Prisma.QuestionUpdateInput) {
    return this.prisma.question.update({
      where: { id },
      data: input,
    });
  }

  delete(id: string) {
    return this.prisma.question.delete({ where: { id } });
  }
}
