import { Question } from 'prisma';
import { GetQuestionDto } from './dto/get-question.dto';

export const mapQuestionToGetQuestionDto = (
  question: Question,
): GetQuestionDto => {
  return {
    id: question.id,
    title: question.title,
    type: question.type,
  };
};
