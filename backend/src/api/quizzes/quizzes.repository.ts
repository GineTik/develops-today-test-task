import { Injectable } from '@nestjs/common';
import { Prisma, PrismaService } from 'prisma';

@Injectable()
export class QuizzesRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(input: Prisma.QuizCreateInput) {
    return this.prisma.quiz.create({
      data: input,
    });
  }

  findAll() {
    return this.prisma.quiz.findMany();
  }

  findById(id: string) {
    return this.prisma.quiz.findUniqueOrThrow({
      where: { id },
      include: { questions: true },
    });
  }

  update(id: string, input: Prisma.QuizUpdateInput) {
    return this.prisma.quiz.update({ where: { id }, data: input });
  }

  delete(id: string) {
    return this.prisma.quiz.delete({ where: { id } });
  }
}
