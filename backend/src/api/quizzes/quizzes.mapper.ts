import { Question, Quiz } from 'prisma';
import { GetShortQuizDto } from './dto/get-short-quiz.dto';
import { GetDetailedQuizDto } from './dto/get-detailed-quiz.dto';
import { mapQuestionToGetQuestionDto } from '@/api/questions';

export function mapQuizToGetShortQuizDto(quiz: Quiz): GetShortQuizDto {
  return {
    id: quiz.id,
    title: quiz.title,
  };
}

export function mapQuizToGetDetailedQuizDto(
  quiz: Quiz & { questions: Question[] },
): GetDetailedQuizDto {
  return {
    id: quiz.id,
    title: quiz.title,
    questions: quiz.questions.map(mapQuestionToGetQuestionDto),
  };
}
