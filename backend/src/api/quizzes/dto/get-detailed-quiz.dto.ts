import { ApiProperty } from '@nestjs/swagger';
import { GetQuestionDto } from '@/api/questions';

export class GetDetailedQuizDto {
  @ApiProperty({
    type: String,
  })
  id: string;

  @ApiProperty({
    type: String,
  })
  title: string;

  @ApiProperty({
    type: GetQuestionDto,
    isArray: true,
  })
  questions: GetQuestionDto[];
}
