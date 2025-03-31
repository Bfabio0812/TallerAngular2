// src/productos/dto/update-producto.dto.ts
//  PartialType makes all fields optional
import { PartialType } from '@nestjs/mapped-types';
import { CreateProductoDto } from './create-producto.dto';
import {
  IsString,
  IsNumber,
  IsOptional,
  Min,
  Max,
  IsUrl,
} from 'class-validator';

export class UpdateProductoDto extends PartialType(CreateProductoDto) {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsOptional()
  @Min(0)
  price?: number;

  @IsNumber()
  @IsOptional()
  @Min(0)
  @Max(100)
  discountPercentage?: number;

  @IsNumber()
  @IsOptional()
  @Min(0)
  @Max(5) // Assuming a rating scale of 1-5
  rating?: number;

  @IsNumber()
  @IsOptional()
  @Min(0)
  stock?: number;

  @IsString()
  @IsOptional()
  brand?: string;

  @IsString()
  @IsOptional()
  category?: string;

  @IsUrl()
  @IsOptional()
  thumbnail?: string;
}
