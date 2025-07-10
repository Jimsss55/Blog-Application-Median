import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsOptional,
  IsBoolean,
} from 'class-validator';
export class CreateArticleDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty()
  title: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @MaxLength(255)
  @ApiProperty()
  description: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  body: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({ required: false, default: true })
  published?: boolean = false;
}
