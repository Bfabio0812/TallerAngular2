// src/productos/productos.seeder.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductosSeeder } from './productos.seeder';
import { Producto, ProductoSchema } from '../schemas/producto.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Producto.name, schema: ProductoSchema },
    ]),
  ],
  providers: [ProductosSeeder],
  exports: [ProductosSeeder], // ¡Importante exportar el seeder!
})
export class ProductosSeederModule {}
