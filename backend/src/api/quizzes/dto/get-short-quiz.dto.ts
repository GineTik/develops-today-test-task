import { ApiProperty } from '@nestjs/swagger';

export class GetShortQuizDto {
  @ApiProperty({
    type: String,
  })
  id: string;

  @ApiProperty({
    type: String,
  })
  title: string;
}
