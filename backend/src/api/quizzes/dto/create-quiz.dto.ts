import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateQuizDto {
  @IsString()
  @ApiProperty({
    type: String,
  })
  title: string;
}
