// src/productos/productos.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Producto } from './interfaces/producto.interface';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { ProductoDocument } from './schemas/producto.schema';

@Injectable()
export class ProductosService {
  constructor(
    @InjectModel('Producto')
    private readonly productoModel: Model<ProductoDocument>,
  ) {}

  async create(createProductoDto: CreateProductoDto): Promise<Producto> {
    const createdProducto = new this.productoModel(createProductoDto);
    return createdProducto.save();
  }

  async findAll(): Promise<Producto[]> {
    return this.productoModel.find().exec();
  }

  async findOne(id: string): Promise<Producto> {
    return this.productoModel.findById(id).exec(); //findById is efficient
  }

  async update(
    id: string,
    updateProductoDto: UpdateProductoDto,
  ): Promise<Producto> {
    const updatedProducto = await this.productoModel
      .findByIdAndUpdate(id, updateProductoDto, { new: true })
      .exec(); //new:true returns updated doc
    return updatedProducto;
  }

  async remove(id: string): Promise<Producto> {
    return this.productoModel.findByIdAndDelete(id).exec();
  }
}
