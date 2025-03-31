import {
  IsString,
  IsNumber,
  IsNotEmpty,
  Min,
  Max,
  IsUrl,
} from 'class-validator';

export class CreateProductoDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  price: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Max(100)
  discountPercentage: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Max(5)
  rating: number;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  stock: number;

  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsUrl()
  @IsNotEmpty()
  thumbnail: string;
}
