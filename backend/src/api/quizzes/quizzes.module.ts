import { Module } from '@nestjs/common';
import { QuizzesService } from './quizzes.service';
import { QuizzesController } from './quizzes.controller';
import { QuizzesRepository } from './quizzes.repository';
import { PrismaModule } from 'prisma';

@Module({
  controllers: [QuizzesController],
  providers: [QuizzesService, QuizzesRepository],
  imports: [PrismaModule],
})
export class QuizzesModule {}
