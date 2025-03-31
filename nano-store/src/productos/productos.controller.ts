// src/productos/productos.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  NotFoundException,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './interfaces/producto.interface';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED) // Set HTTP status code to 201
  async create(
    @Body() createProductoDto: CreateProductoDto,
  ): Promise<Producto> {
    return this.productosService.create(createProductoDto);
  }

  @Get()
  async findAll(): Promise<Producto[]> {
    return this.productosService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Producto> {
    const producto = await this.productosService.findOne(id);
    if (!producto) {
      throw new NotFoundException(`Producto with ID ${id} not found`); // Use built-in exception
    }
    return producto;
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProductoDto: UpdateProductoDto,
  ): Promise<Producto> {
    const updatedProducto = await this.productosService.update(
      id,
      updateProductoDto,
    );
    if (!updatedProducto) {
      throw new NotFoundException(`Producto with ID ${id} not found`); //Consistent error handling
    }
    return updatedProducto;
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT) // Return 204 No Content on successful deletion.  Important for RESTful APIs.
  async remove(@Param('id') id: string): Promise<void> {
    const result = await this.productosService.remove(id);
    if (!result) {
      //check result for not found
      throw new NotFoundException(`Producto with ID ${id} not found`);
    }
  }
}
