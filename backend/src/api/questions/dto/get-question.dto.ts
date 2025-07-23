import { ApiProperty } from '@nestjs/swagger';

export class GetQuestionDto {
  @ApiProperty({
    type: String,
  })
  id: string;

  @ApiProperty({
    type: String,
  })
  title: string;

  @ApiProperty({
    type: String,
  })
  type: string;
}
