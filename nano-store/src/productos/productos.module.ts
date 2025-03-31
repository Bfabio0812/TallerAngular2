import { Module } from '@nestjs/common';
import { ProductosController } from './productos.controller';
import { ProductosService } from './productos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductoSchema } from './schemas/producto.schema';
import { ProductosSeederModule } from './productos-seeder/productos-seeder.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Producto', schema: ProductoSchema }]),
    ProductosSeederModule,
  ],
  controllers: [ProductosController],
  providers: [ProductosService],
})
export class ProductosModule {}
