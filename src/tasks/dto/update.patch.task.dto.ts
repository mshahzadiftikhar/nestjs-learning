import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class PatchTaskDto {
  @IsOptional()
  name?: string;

  @IsOptional()
  description?: string;
}
