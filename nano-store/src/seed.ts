import { NestFactory } from '@nestjs/core';

import { ProductosSeeder } from './productos/productos-seeder/productos.seeder';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule); // Usa createApplicationContext
  const productosSeeder = app.get(ProductosSeeder);
  await productosSeeder.seed();
  await app.close(); // Cierra la aplicación después de seedear
}
bootstrap();
