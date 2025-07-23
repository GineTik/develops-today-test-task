import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { QuestionType } from 'prisma';

export class CreateQuestionDto {
  @IsString()
  @ApiProperty({
    type: String,
  })
  title: string;

  @IsString()
  @ApiProperty({
    enum: QuestionType,
  })
  type: QuestionType;

  @IsString()
  @ApiProperty({
    type: String,
  })
  quizId: string;
}
