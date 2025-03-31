// src/productos/schemas/producto.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ProductoDocument = Producto & Document;

@Schema()
export class Producto {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  discountPercentage: number;

  @Prop({ required: true })
  rating: number;

  @Prop({ required: true })
  stock: number;

  @Prop({ required: true })
  brand: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  thumbnail: string;
}

export const ProductoSchema = SchemaFactory.createForClass(Producto);

// Add a virtual 'id' property that maps to '_id'
ProductoSchema.virtual('id').get(function (this: ProductoDocument) {
  return (this._id as Types.ObjectId).toHexString();
});

// Ensure virtual fields are included when converting to JSON or Object
ProductoSchema.set('toJSON', { virtuals: true });
ProductoSchema.set('toObject', { virtuals: true });
