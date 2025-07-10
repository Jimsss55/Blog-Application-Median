import { ApiProperty } from '@nestjs/swagger';

export class CreateArticleDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  body: string;

  @ApiProperty({ required: false, default: true })
  published?: boolean = false;
}
