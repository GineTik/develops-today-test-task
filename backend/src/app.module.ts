import { Module } from '@nestjs/common';
import { QuizzesModule } from '@/api/quizzes';
import { QuestionsModule } from '@/api/questions';

@Module({
  imports: [QuizzesModule, QuestionsModule],
})
export class AppModule {}
