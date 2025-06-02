import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class PutTaskDto {
  @IsString()
  @IsNotEmpty()
  name?: string;

  @IsString()
  @IsNotEmpty()
  description?: string;
}
