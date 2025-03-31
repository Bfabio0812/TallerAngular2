// src/productos/productos.seeder.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductoDocument } from '../schemas/producto.schema';
import { CreateProductoDto } from '../dto/create-producto.dto';

@Injectable()
export class ProductosSeeder {
  constructor(
    @InjectModel('Producto')
    private readonly productoModel: Model<ProductoDocument>,
  ) {}

  async seed(): Promise<void> {
    // 1. (Opcional) Borrar datos existentes:
    //    ¡CUIDADO! Esto eliminará TODOS los datos de la colección.
    //    Úsalo solo en entornos de desarrollo/pruebas, NO en producción.
    await this.productoModel.deleteMany({});

    // 2. Datos de prueba (usa tu DTO para la estructura):
    const productos: CreateProductoDto[] = [
      {
        title: 'Smartphone Galaxy S23 Ultra',
        description:
          'El último smartphone de Samsung con cámara de 200MP y pantalla AMOLED.',
        price: 1299.99,
        discountPercentage: 10.5,
        rating: 4.8,
        stock: 150,
        brand: 'Samsung',
        category: 'Smartphones',
        thumbnail: 'https://example.com/images/s23ultra.jpg', // URL de ejemplo
      },
      {
        title: 'iPhone 14 Pro Max',
        description:
          'Pantalla Super Retina XDR, chip A16 Bionic, sistema de cámaras Pro.',
        price: 1399.0,
        discountPercentage: 5.0,
        rating: 4.9,
        stock: 120,
        brand: 'Apple',
        category: 'Smartphones',
        thumbnail: 'https://example.com/images/iphone14promax.jpg',
      },
      {
        title: 'Xiaomi 13 Pro',
        description: 'Cámara Leica, Snapdragon 8 Gen 2, carga rápida de 120W.',
        price: 999.99,
        discountPercentage: 12.0,
        rating: 4.7,
        stock: 200,
        brand: 'Xiaomi',
        category: 'Smartphones',
        thumbnail: 'https://example.com/images/xiaomi13pro.jpg',
      },
      {
        title: 'Google Pixel 7 Pro',
        description:
          'Chip Google Tensor G2, cámara mejorada con IA, Android puro.',
        price: 899.0,
        discountPercentage: 8.5,
        rating: 4.6,
        stock: 180,
        brand: 'Google',
        category: 'Smartphones',
        thumbnail: 'https://example.com/images/pixel7pro.jpg',
      },
      {
        title: 'OnePlus 11',
        description:
          'Pantalla Fluid AMOLED, Snapdragon 8 Gen 2, cámara Hasselblad.',
        price: 799.99,
        discountPercentage: 7.0,
        rating: 4.5,
        stock: 250,
        brand: 'OnePlus',
        category: 'Smartphones',
        thumbnail: 'https://example.com/images/oneplus11.jpg',
      },
      {
        title: 'Auriculares inalámbricos Sony WH-1000XM5',
        description:
          'Cancelación de ruido líder en la industria, audio de alta resolución.',
        price: 349.99,
        discountPercentage: 15.2,
        rating: 4.9,
        stock: 300,
        brand: 'Sony',
        category: 'Auriculares',
        thumbnail: 'https://example.com/images/sonywh1000xm5.jpg',
      },
      {
        title: 'Apple AirPods Pro (2ª generación)',
        description:
          'Audio espacial personalizado, cancelación activa de ruido mejorada.',
        price: 249.0,
        discountPercentage: 0,
        rating: 4.8,
        stock: 400,
        brand: 'Apple',
        category: 'Auriculares',
        thumbnail: 'https://example.com/images/airpodspro2.jpg',
      },
      {
        title: 'Auriculares Bose QuietComfort 45',
        description:
          'Comodidad excepcional, cancelación de ruido de primera clase.',
        price: 329.0,
        discountPercentage: 10.0,
        rating: 4.7,
        stock: 280,
        brand: 'Bose',
        category: 'Auriculares',
        thumbnail: 'https://example.com/images/boseqc45.jpg',
      },
      {
        title: 'Samsung Galaxy Buds 2 Pro',
        description: 'Audio de 24 bits, cancelación de ruido inteligente.',
        price: 229.99,
        discountPercentage: 8.7,
        rating: 4.6,
        stock: 350,
        brand: 'Samsung',
        category: 'Auriculares',
        thumbnail: 'https://example.com/images/galaxybuds2pro.jpg',
      },
      {
        title: 'Auriculares Jabra Elite 7 Pro',
        description:
          'Diseño compacto, ajuste seguro, excelente calidad de llamada.',
        price: 199.99,
        discountPercentage: 5.0,
        rating: 4.5,
        stock: 450,
        brand: 'Jabra',
        category: 'Auriculares',
        thumbnail: 'https://example.com/images/jabraelite7pro.jpg',
      },
      {
        title: 'Smart TV Samsung QN90B Neo QLED 4K',
        description: 'Tecnología Quantum Matrix, Mini LED, sonido envolvente.',
        price: 1799.99,
        discountPercentage: 18.0,
        rating: 4.8,
        stock: 100,
        brand: 'Samsung',
        category: 'Televisores',
        thumbnail: 'https://example.com/images/samsungqn90b.jpg',
      },
      {
        title: 'Smart TV LG OLED C2 4K',
        description: 'Procesador α9 Gen 5 AI, Dolby Vision IQ, Dolby Atmos.',
        price: 1999.0,
        discountPercentage: 15.5,
        rating: 4.9,
        stock: 80,
        brand: 'LG',
        category: 'Televisores',
        thumbnail: 'https://example.com/images/lgc2oled.jpg',
      },
      {
        title: 'Smart TV Sony Bravia XR A80K OLED 4K',
        description:
          'Cognitive Processor XR, Acoustic Surface Audio+, Google TV.',
        price: 2199.99,
        discountPercentage: 12.8,
        rating: 4.7,
        stock: 90,
        brand: 'Sony',
        category: 'Televisores',
        thumbnail: 'https://example.com/images/sonya80k.jpg',
      },
      {
        title: 'Smart TV TCL 6-Series Mini-LED QLED 4K',
        description: 'Tecnología Mini-LED, Roku TV, contraste mejorado.',
        price: 999.99,
        discountPercentage: 10.0,
        rating: 4.6,
        stock: 120,
        brand: 'TCL',
        category: 'Televisores',
        thumbnail: 'https://example.com/images/tcl6series.jpg',
      },
      {
        title: 'Smart TV Hisense U8H QLED 4K',
        description: 'Quantum Dot, Dolby Vision IQ, 120Hz nativo.',
        price: 899.0,
        discountPercentage: 8.9,
        rating: 4.5,
        stock: 150,
        brand: 'Hisense',
        category: 'Televisores',
        thumbnail: 'https://example.com/images/hisenseu8h.jpg',
      },
      {
        title: 'Portátil MacBook Pro 16 pulgadas (M2 Pro)',
        description:
          'Chip M2 Pro, pantalla Liquid Retina XDR, hasta 96 GB de memoria unificada.',
        price: 2499.0,
        discountPercentage: 5.0,
        rating: 4.9,
        stock: 50,
        brand: 'Apple',
        category: 'Portátiles',
        thumbnail: 'https://example.com/images/macbookpro16m2.jpg',
      },
      {
        title: 'Portátil Dell XPS 15',
        description:
          'Pantalla InfinityEdge, procesador Intel Core i9, gráficos NVIDIA GeForce RTX.',
        price: 2299.99,
        discountPercentage: 8.5,
        rating: 4.8,
        stock: 60,
        brand: 'Dell',
        category: 'Portátiles',
        thumbnail: 'https://example.com/images/dellxps15.jpg',
      },
      {
        title: 'Portátil HP Spectre x360 14',
        description:
          'Diseño 2 en 1, pantalla OLED, procesador Intel Core i7, lápiz incluido.',
        price: 1699.99,
        discountPercentage: 10.2,
        rating: 4.7,
        stock: 70,
        brand: 'HP',
        category: 'Portátiles',
        thumbnail: 'https://example.com/images/hpspectrex360.jpg',
      },
      {
        title: 'Portátil Lenovo ThinkPad X1 Carbon Gen 10',
        description:
          'Ultraportátil, duradero, procesador Intel Core i7, pantalla 16:10.',
        price: 1899.0,
        discountPercentage: 7.8,
        rating: 4.6,
        stock: 80,
        brand: 'Lenovo',
        category: 'Portátiles',
        thumbnail: 'https://example.com/images/thinkpadx1carbon.jpg',
      },
      {
        title: 'Portátil Razer Blade 15 Advanced Model',
        description:
          'Gaming, procesador Intel Core i9, gráficos NVIDIA GeForce RTX 3080, pantalla QHD 240Hz.',
        price: 2799.99,
        discountPercentage: 6.4,
        rating: 4.5,
        stock: 40,
        brand: 'Razer',
        category: 'Portátiles',
        thumbnail: 'https://example.com/images/razerblade15.jpg',
      },

      // ------------------------------------------------------------------
      // Hogar y Cocina
      // ------------------------------------------------------------------
      {
        title: 'Robot Aspirador iRobot Roomba s9+',
        description: 'Autovaciado, mapeo inteligente, ideal para mascotas.',
        price: 999.99,
        discountPercentage: 20.0,
        rating: 4.8,
        stock: 100,
        brand: 'iRobot',
        category: 'Electrodomésticos', // Subcategoría: Aspiradoras
        thumbnail: 'https://example.com/images/roombas9plus.jpg',
      },
      {
        title: 'Aspiradora Dyson V15 Detect Absolute',
        description:
          'Láser detecta polvo invisible, pantalla LCD, potente succión.',
        price: 799.0,
        discountPercentage: 15.5,
        rating: 4.9,
        stock: 80,
        brand: 'Dyson',
        category: 'Electrodomésticos', // Subcategoría: Aspiradoras
        thumbnail: 'https://example.com/images/dysonv15.jpg',
      },
      {
        title: 'Cafetera Espresso Breville Barista Express',
        description:
          'Molinillo integrado, control de temperatura preciso, vaporizador de leche.',
        price: 699.95,
        discountPercentage: 12.0,
        rating: 4.7,
        stock: 120,
        brand: 'Breville',
        category: 'Electrodomésticos', // Subcategoría: Cafeteras
        thumbnail: 'https://example.com/images/brevillebaristaexpress.jpg',
      },
      {
        title: 'Cafetera Nespresso Vertuo Next',
        description:
          'Tecnología Centrifusion, variedad de tamaños de taza, diseño compacto.',
        price: 159.0,
        discountPercentage: 10.0,
        rating: 4.6,
        stock: 200,
        brand: 'Nespresso',
        category: 'Electrodomésticos', // Subcategoría: Cafeteras
        thumbnail: 'https://example.com/images/nespressovertuonext.jpg',
      },
      {
        title: 'Batidora de Pie KitchenAid Artisan',
        description: '10 velocidades, cabezal inclinable, incluye accesorios.',
        price: 449.99,
        discountPercentage: 18.9,
        rating: 4.9,
        stock: 90,
        brand: 'KitchenAid',
        category: 'Electrodomésticos', // Subcategoría: Batidoras
        thumbnail: 'https://example.com/images/kitchenaidartisan.jpg',
      },
      {
        title: 'Licuadora Vitamix A3500 Ascent Series',
        description:
          'Programas preestablecidos, temporizador digital, alta potencia.',
        price: 599.95,
        discountPercentage: 15.0,
        rating: 4.8,
        stock: 110,
        brand: 'Vitamix',
        category: 'Electrodomésticos', // Subcategoría: Licuadoras
        thumbnail: 'https://example.com/images/vitamixa3500.jpg',
      },
      {
        title: 'Olla a Presión Instant Pot Duo Evo Plus',
        description: '9 en 1, cocción rápida y lenta, pantalla LCD.',
        price: 119.99,
        discountPercentage: 8.3,
        rating: 4.7,
        stock: 150,
        brand: 'Instant Pot',
        category: 'Electrodomésticos', // Subcategoría: Ollas a Presión
        thumbnail: 'https://example.com/images/instantpotduoevoplus.jpg',
      },
      {
        title: 'Juego de Cuchillos de Cocina Wüsthof Classic',
        description: 'Acero inoxidable alemán, incluye 7 piezas esenciales.',
        price: 399.95,
        discountPercentage: 10.0,
        rating: 4.9,
        stock: 50,
        brand: 'Wüsthof',
        category: 'Utensilios de Cocina', // Subcategoría: Cuchillos
        thumbnail: 'https://example.com/images/wusthofclassicset.jpg',
      },
      {
        title: 'Batería de Cocina Cuisinart Multiclad Pro',
        description:
          'Acero inoxidable triple capa, 12 piezas, apta para inducción.',
        price: 299.0,
        discountPercentage: 13.4,
        rating: 4.8,
        stock: 60,
        brand: 'Cuisinart',
        category: 'Utensilios de Cocina', // Subcategoría: Baterías de Cocina
        thumbnail: 'https://example.com/images/cuisinartmulticladpro.jpg',
      },
      {
        title: 'Set de Vajilla Corelle Livingware',
        description:
          'Resistente a golpes y rayaduras, 16 piezas, diseño clásico.',
        price: 79.99,
        discountPercentage: 5.0,
        rating: 4.6,
        stock: 200,
        brand: 'Corelle',
        category: 'Utensilios de Cocina', // Subcategoría: Vajillas
        thumbnail: 'https://example.com/images/corellelivingwareset.jpg',
      },
      // ... (continuación de productos anteriores)
      {
        title: 'Colchón de Espuma Viscoelástica Tempur-Pedic TEMPUR-Cloud',
        description: 'Alivio de presión, soporte adaptable, funda lavable.',
        price: 1999.0,
        discountPercentage: 10.0,
        rating: 4.7,
        stock: 80,
        brand: 'Tempur-Pedic',
        category: 'Muebles', // Subcategoría: Colchones
        thumbnail: 'https://example.com/images/tempurcloud.jpg',
      },
      {
        title: 'Colchón Híbrido (Resortes y Espuma) Casper Original Hybrid',
        description:
          'Soporte zonificado, capa de espuma transpirable, resortes duraderos.',
        price: 1295.0,
        discountPercentage: 15.5,
        rating: 4.6,
        stock: 100,
        brand: 'Casper',
        category: 'Muebles', // Subcategoría: Colchones
        thumbnail: 'https://example.com/images/casperoriginalhybrid.jpg',
      },
      {
        title: 'Sofá Modular de Cuero West Elm Haven',
        description:
          'Configurable, cojines de plumas, cuero de grano superior.',
        price: 2499.0,
        discountPercentage: 12.8,
        rating: 4.8,
        stock: 40,
        brand: 'West Elm',
        category: 'Muebles', // Subcategoría: Sofás
        thumbnail: 'https://example.com/images/westelmhavensofa.jpg',
      },
      {
        title: 'Mesa de Comedor de Madera Maciza con Extensión',
        description:
          'Madera de roble, capacidad para 8-10 personas, estilo rústico.',
        price: 899.99,
        discountPercentage: 8.9,
        rating: 4.9,
        stock: 60,
        brand: 'Ethan Allen', // Ejemplo de marca
        category: 'Muebles', // Subcategoría: Mesas de Comedor
        thumbnail: 'https://example.com/images/woodendiningtable.jpg',
      },
      {
        title: 'Silla de Oficina Ergonómica Herman Miller Aeron',
        description:
          'Soporte lumbar ajustable, malla transpirable, diseño icónico.',
        price: 1395.0,
        discountPercentage: 5.0,
        rating: 4.7,
        stock: 70,
        brand: 'Herman Miller',
        category: 'Muebles', // Subcategoría: Sillas de Oficina
        thumbnail: 'https://example.com/images/hermanmilleraeron.jpg',
      },
      {
        title: 'Lámpara de Pie con Arco y Pantalla de Tela',
        description: 'Base de mármol, altura ajustable, estilo moderno.',
        price: 199.99,
        discountPercentage: 10.0,
        rating: 4.6,
        stock: 90,
        brand: 'CB2', // Ejemplo de marca
        category: 'Iluminación', // Subcategoría: Lámparas de Pie
        thumbnail: 'https://example.com/images/arcfloorlamp.jpg',
      },
      {
        title: 'Bombilla Inteligente Philips Hue White and Color Ambiance',
        description:
          'Control por voz, millones de colores, compatible con asistentes.',
        price: 49.99,
        discountPercentage: 0,
        rating: 4.8,
        stock: 200,
        brand: 'Philips Hue',
        category: 'Iluminación', // Subcategoría: Bombillas Inteligentes
        thumbnail: 'https://example.com/images/philipshuebulb.jpg',
      },
      {
        title: 'Juego de Toallas de Algodón Egipcio',
        description: 'Suaves, absorbentes, 6 piezas (baño, mano, cara).',
        price: 79.99,
        discountPercentage: 15.0,
        rating: 4.9,
        stock: 150,
        brand: 'Brooklinen', // Ejemplo de marca
        category: 'Textiles para el Hogar', // Subcategoría: Toallas
        thumbnail: 'https://example.com/images/egyptiancottontowels.jpg',
      },
      {
        title: 'Juego de Sábanas de Satén de Algodón',
        description:
          'Suaves, frescas, 300 hilos, incluye sábana bajera, encimera y fundas.',
        price: 129.0,
        discountPercentage: 10.0,
        rating: 4.7,
        stock: 120,
        brand: 'Parachute Home', // Ejemplo de marca
        category: 'Textiles para el Hogar', //Subcategoría: Ropa de Cama
        thumbnail: 'https://example.com/images/sateencottonsheetset.jpg',
      },
      {
        title: 'Cortinas Opacas con Aislamiento Térmico',
        description: 'Bloquean la luz, reducen el ruido, ahorran energía.',
        price: 59.99,
        discountPercentage: 8.3,
        rating: 4.6,
        stock: 180,
        brand: 'Amazon Basics', // Ejemplo
        category: 'Textiles para el Hogar', // Subcategoría: Cortinas
        thumbnail: 'https://example.com/images/blackoutcurtains.jpg',
      },
      // ------------------------------------------------------------------
      // Ropa y Accesorios
      // ------------------------------------------------------------------
      {
        title: 'Chaqueta de Cuero para Hombre',
        description: 'Estilo motero, cuero genuino, forro interior.',
        price: 299.99,
        discountPercentage: 12.5,
        rating: 4.8,
        stock: 50,
        brand: 'Schott NYC',
        category: 'Ropa Hombre', //Sub: Chaquetas
        thumbnail: 'https://example.com/images/leatherjacketmen.jpg',
      },
      {
        title: 'Vestido Largo Floral para Mujer',
        description:
          'Estampado floral, manga larga, ideal para ocasiones especiales.',
        price: 89.99,
        discountPercentage: 10.0,
        rating: 4.7,
        stock: 80,
        brand: 'Reformation',
        category: 'Ropa Mujer', //Sub: Vestidos
        thumbnail: 'https://example.com/images/floraldresswomen.jpg',
      },
      {
        title: 'Pantalones Vaqueros Ajustados para Hombre',
        description: 'Corte slim, tejido elástico, lavado oscuro.',
        price: 79.95,
        discountPercentage: 8.7,
        rating: 4.6,
        stock: 100,
        brand: "Levi's",
        category: 'Ropa Hombre', //Sub: Pantalones
        thumbnail: 'https://example.com/images/jeansmen.jpg',
      },
      {
        title: 'Camiseta de Algodón Orgánico para Mujer',
        description: 'Cuello redondo, manga corta, varios colores disponibles.',
        price: 24.99,
        discountPercentage: 0,
        rating: 4.9,
        stock: 150,
        brand: 'Everlane',
        category: 'Ropa Mujer', //Sub: Camisetas
        thumbnail: 'https://example.com/images/cottonshirtwomen.jpg',
      },
      {
        title: 'Zapatillas Deportivas para Correr Nike Revolution 6',
        description: 'Amortiguación ligera, transpirables, suela duradera.',
        price: 65.0,
        discountPercentage: 5.0,
        rating: 4.5,
        stock: 200,
        brand: 'Nike',
        category: 'Zapatos', //Sub: Zapatillas Deportivas
        thumbnail: 'https://example.com/images/nikerevolution6.jpg',
      },
      {
        title: 'Botas de Senderismo Impermeables Salomon X Ultra 4 GTX',
        description: 'Agarre en todo terreno, protección impermeable Gore-Tex.',
        price: 160.0,
        discountPercentage: 10.0,
        rating: 4.8,
        stock: 80,
        brand: 'Salomon',
        category: 'Zapatos', // Sub: Botas
        thumbnail: 'https://example.com/images/salomonxultra4gtx.jpg',
      },
      {
        title: 'Bolso de Mano de Cuero para Mujer',
        description:
          'Correa ajustable, múltiples compartimentos, diseño elegante.',
        price: 149.99,
        discountPercentage: 7.3,
        rating: 4.7,
        stock: 60,
        brand: 'Coach',
        category: 'Accesorios', // Sub: Bolsos
        thumbnail: 'https://example.com/images/leatherhandbagwomen.jpg',
      },
      {
        title: 'Reloj Inteligente Apple Watch Series 8',
        description: 'Pantalla siempre activa, ECG, detección de caídas, GPS.',
        price: 399.0,
        discountPercentage: 0,
        rating: 4.9,
        stock: 120,
        brand: 'Apple',
        category: 'Accesorios', // Sub: Relojes
        thumbnail: 'https://example.com/images/applewatchseries8.jpg',
      },
      {
        title: 'Gafas de Sol Ray-Ban Aviator Classic',
        description: 'Lentes polarizadas, montura metálica, protección UV.',
        price: 163.0,
        discountPercentage: 8.0,
        rating: 4.8,
        stock: 100,
        brand: 'Ray-Ban',
        category: 'Accesorios', // Sub: Gafas de Sol
        thumbnail: 'https://example.com/images/raybanaviator.jpg',
      },
      {
        title: 'Cinturón de Cuero Reversible para Hombre',
        description: 'Hebilla giratoria, negro/marrón, talla ajustable.',
        price: 49.95,
        discountPercentage: 5.0,
        rating: 4.6,
        stock: 90,
        brand: 'Calvin Klein',
        category: 'Accesorios', // Sub: Cinturones
        thumbnail: 'https://example.com/images/reversibleleatherbeltmen.jpg',
      },
      {
        title: 'Anillo de compromiso de diamante',
        description:
          'Oro blanco de 18k, diamante de 0.5 quilates, certificado GIA.',
        price: 1999.0,
        discountPercentage: 12,
        rating: 4.7,
        stock: 10,
        brand: 'Tiffany & Co.',
        category: 'Joyería',
        thumbnail: 'https://example.com/images/diamondring.jpg',
      },
      {
        title: 'Collar de plata esterlina',
        description:
          'Colgante de corazón, cadena de 45 cm, cierre de mosquetón.',
        price: 79.99,
        discountPercentage: 8,
        rating: 4.5,
        stock: 55,
        brand: 'Pandora',
        category: 'Joyería',
        thumbnail: 'https://example.com/images/silvernecklace.jpg',
      },
      {
        title: 'Pendientes de oro con perlas',
        description:
          'Oro amarillo de 14k, perlas cultivadas, cierre de presión.',
        price: 249.5,
        discountPercentage: 15,
        rating: 4.8,
        stock: 30,
        brand: 'Mejuri',
        category: 'Joyería',
        thumbnail: 'https://example.com/images/goldearrings.jpg',
      },
      {
        title: 'Pulsera de acero inoxidable',
        description:
          'Diseño de eslabones, cierre desplegable, resistente al agua.',
        price: 129.0,
        discountPercentage: 10,
        rating: 4.6,
        stock: 45,
        brand: 'Fossil',
        category: 'Joyería',
        thumbnail: 'https://example.com/images/steelbracelet.jpg',
      },

      // ------------------------------------------------------------------
      // Belleza y Cuidado Personal
      // ------------------------------------------------------------------
      {
        title: 'Sérum Facial con Vitamina C',
        description: 'Antioxidante, ilumina la piel, reduce manchas.',
        price: 39.99,
        discountPercentage: 10.0,
        rating: 4.7,
        stock: 120,
        brand: 'The Ordinary',
        category: 'Cuidado de la Piel', // Sub: Sérums
        thumbnail: 'https://example.com/images/vitamincserum.jpg',
      },
      {
        title: 'Crema Hidratante Facial CeraVe',
        description: 'Con ceramidas, ácido hialurónico, no comedogénica.',
        price: 15.99,
        discountPercentage: 0,
        rating: 4.8,
        stock: 200,
        brand: 'CeraVe',
        category: 'Cuidado de la Piel', // Sub: Hidratantes
        thumbnail: 'https://example.com/images/ceravemoisturizer.jpg',
      },
      {
        title: 'Protector Solar Facial EltaMD UV Clear SPF 46',
        description: 'Amplio espectro, para pieles sensibles y con acné.',
        price: 36.0,
        discountPercentage: 5.5,
        rating: 4.9,
        stock: 150,
        brand: 'EltaMD',
        category: 'Cuidado de la Piel', // Sub: Protectores Solares
        thumbnail: 'https://example.com/images/eltamdsunscreen.jpg',
      },
      {
        title: 'Limpiador facial en Aceite',
        description:
          'Desmaquillante a base de aceite, ideal para doble limpieza.',
        price: 25.0,
        discountPercentage: 6.0,
        rating: 4.7,
        stock: 100,
        brand: 'DHC',
        category: 'Cuidado de la piel',
        thumbnail: 'https://example.com/limpiadorfacial.jpg',
      },
      {
        title: 'Mascarilla de Arcilla Purificante',
        description:
          'Controla el exceso de grasa, minimiza poros, con carbón activo.',
        price: 19.99,
        discountPercentage: 8.0,
        rating: 4.6,
        stock: 80,
        brand: 'Origins',
        category: 'Cuidado de la Piel', // Sub: Mascarillas
        thumbnail: 'https://example.com/images/claymask.jpg',
      },
      {
        title: 'Base de Maquillaje Estée Lauder Double Wear',
        description: 'Larga duración, cobertura total, acabado mate.',
        price: 43.0,
        discountPercentage: 0,
        rating: 4.8,
        stock: 90,
        brand: 'Estée Lauder',
        category: 'Maquillaje', // Sub: Bases
        thumbnail: 'https://example.com/images/esteelauderdoublewear.jpg',
      },
      {
        title: 'Paleta de Sombras de Ojos Urban Decay Naked3',
        description:
          '12 tonos rosados neutros, acabado mate, satinado y brillante.',
        price: 54.0,
        discountPercentage: 10.2,
        rating: 4.7,
        stock: 70,
        brand: 'Urban Decay',
        category: 'Maquillaje', // Sub: Sombras de Ojos
        thumbnail: 'https://example.com/images/urbandecaynaked3.jpg',
      },
      {
        title: 'Máscara de Pestañas Too Faced Better Than Sex',
        description: 'Volumen intenso, longitud extrema, fórmula con colágeno.',
        price: 26.0,
        discountPercentage: 0,
        rating: 4.6,
        stock: 100,
        brand: 'Too Faced',
        category: 'Maquillaje', // Sub: Máscaras de Pestañas
        thumbnail: 'https://example.com/images/toofacedbetterthansex.jpg',
      },
      {
        title: 'Labial Líquido Mate Kylie Cosmetics Lip Kit',
        description:
          'Incluye labial y delineador, larga duración, acabado mate.',
        price: 29.0,
        discountPercentage: 8.6,
        rating: 4.5,
        stock: 120,
        brand: 'Kylie Cosmetics',
        category: 'Maquillaje', // Sub: Labiales
        thumbnail: 'https://example.com/images/kylielipkit.jpg',
      },
      {
        title: 'Corrector NARS Radiant Creamy Concealer',
        description:
          'Cobertura media a alta, ilumina, hidrata, larga duración.',
        price: 30.0,
        discountPercentage: 5.0,
        rating: 4.9,
        stock: 150,
        brand: 'NARS',
        category: 'Maquillaje', // Sub: Correctores
        thumbnail: 'https://example.com/images/narsconcealer.jpg',
      },
      {
        title: 'Rubor en polvo compacto',
        description: 'Colores altamente pigmentados con gran duracion',
        price: 29.99,
        discountPercentage: 7.5,
        rating: 4.5,
        stock: 65,
        brand: 'MAC',
        category: 'Maquillaje',
        thumbnail: 'https://example.com/blush.jpg',
      },
      {
        title: 'Champú Seco Batiste',
        description: 'Absorbe la grasa, da volumen, refresca el cabello.',
        price: 8.99,
        discountPercentage: 0,
        rating: 4.7,
        stock: 200,
        brand: 'Batiste',
        category: 'Cuidado del Cabello', // Sub: Champús Secos
        thumbnail: 'https://example.com/images/batistedryshampoo.jpg',
      },
      {
        title: 'Acondicionador Hidratante Moroccanoil',
        description:
          'Con aceite de argán, desenreda, suaviza, para cabello seco.',
        price: 24.0,
        discountPercentage: 10.0,
        rating: 4.8,
        stock: 180,
        brand: 'Moroccanoil',
        category: 'Cuidado del Cabello', // Sub: Acondicionadores
        thumbnail: 'https://example.com/images/moroccanoilconditioner.jpg',
      },
      {
        title: 'Aceite Capilar Olaplex No. 7 Bonding Oil',
        description:
          'Repara el cabello dañado, reduce el frizz, protege del calor.',
        price: 28.0,
        discountPercentage: 8.9,
        rating: 4.9,
        stock: 160,
        brand: 'Olaplex',
        category: 'Cuidado del Cabello', // Sub: Aceites y Sérums Capilares
        thumbnail: 'https://example.com/images/olaplexoil.jpg',
      },
      {
        title: 'Cepillo Desenredante Tangle Teezer',
        description:
          'Desenreda sin tirones, para cabello húmedo o seco, diseño ergonómico',
        price: 16.5,
        rating: 4.5,
        stock: 85,
        discountPercentage: 5,
        brand: 'Tangle Teezer',
        category: 'Cuidado del cabello',
        thumbnail: 'https://example.com/cepillopelo.jpg',
      },
      {
        title: 'Plancha de Pelo GHD Platinum+',
        description:
          'Tecnología predictiva, temperatura óptima, placas flotantes.',
        price: 249.0,
        discountPercentage: 12.0,
        rating: 4.7,
        stock: 70,
        brand: 'GHD',
        category: 'Cuidado del Cabello', //Sub: Herramientas de Peinado
        thumbnail: 'https://example.com/images/ghdplatinumplus.jpg',
      },

      // ------------------------------------------------------------------
      // Alimentos y Bebidas
      // ------------------------------------------------------------------

      {
        title: 'Café en Grano Lavazza Qualità Oro',
        description: '100% Arábica, tueste medio, aroma intenso.',
        price: 19.99,
        discountPercentage: 8.0,
        rating: 4.8,
        stock: 200,
        brand: 'Lavazza',
        category: 'Alimentos', // Sub: Café
        thumbnail: 'https://example.com/images/lavazzacoffeebeans.jpg',
      },
      {
        title: 'Aceite de Oliva Virgen Extra Orgánico',
        description:
          'Primera prensada en frío, sabor afrutado, ideal para ensaladas.',
        price: 12.95,
        discountPercentage: 5.0,
        rating: 4.9,
        stock: 150,
        brand: 'California Olive Ranch',
        category: 'Alimentos', // Sub: Aceites y Vinagres
        thumbnail: 'https://example.com/images/oliveoil.jpg',
      },
      {
        title: 'Miel de Manuka UMF 15+',
        description:
          'Propiedades antibacterianas, sabor único, de Nueva Zelanda.',
        price: 34.99,
        discountPercentage: 10.0,
        rating: 4.7,
        stock: 100,
        brand: 'Comvita',
        category: 'Alimentos', // Sub: Miel y Endulzantes
        thumbnail: 'https://example.com/images/manukahoney.jpg',
      },
      {
        title: 'Chocolate negro',
        description: 'Tableta de chocolate al 70% de cacao',
        price: 24.99,
        discountPercentage: 5.5,
        rating: 4.6,
        stock: 85,
        brand: 'Lindt',
        category: 'Alimentos',
        thumbnail: 'https://example.com/chocolate.jpg',
      },
      {
        title: 'Cereal de Desayuno Cheerios',
        description:
          'Avena integral, bajo en azúcar, sin gluten (variedad específica).',
        price: 4.49,
        discountPercentage: 0,
        rating: 4.6,
        stock: 250,
        brand: 'General Mills',
        category: 'Alimentos', // Sub: Cereales
        thumbnail: 'https://example.com/images/cheerios.jpg',
      },
      {
        title: 'Agua con gas',
        description: 'Pack de 12 latas sabor limón.',
        price: 15.5,
        discountPercentage: 6.5,
        rating: 4.7,
        stock: 40,
        brand: 'Perrier',
        category: 'Bebidas',
        thumbnail: 'https://example.com/aguagas.jpg',
      },
      {
        title: 'Té Verde Orgánico Matcha',
        description: 'En polvo, para batidos o té, antioxidante.',
        price: 17.99,
        discountPercentage: 7.8,
        rating: 4.8,
        stock: 120,
        brand: 'Jade Leaf Matcha',
        category: 'Bebidas', // Sub: Té e Infusiones
        thumbnail: 'https://example.com/images/matchatea.jpg',
      },
      {
        title: 'Jugo de Naranja Natural Tropicana',
        description: '100% jugo, sin azúcares añadidos, pulpa alta.',
        price: 3.99,
        discountPercentage: 0,
        rating: 4.5,
        stock: 180,
        brand: 'Tropicana',
        category: 'Bebidas', // Sub: Jugos
        thumbnail: 'https://example.com/images/orangejuice.jpg',
      },
      {
        title: 'Vino blanco',
        description: 'Sauvignon Blanc, cosecha 2021.',
        price: 75.0,
        discountPercentage: 12.5,
        rating: 4.3,
        stock: 20,
        brand: 'Cloudy Bay',
        category: 'Bebidas',
        thumbnail: 'https://example.com/vino.jpg',
      },
      {
        title: 'Cerveza Artesanal IPA',
        description: 'Estilo India Pale Ale, amargor cítrico, pack de 6.',
        price: 11.99,
        discountPercentage: 5.0,
        rating: 4.7,
        stock: 90,
        brand: 'Sierra Nevada', // Ejemplo
        category: 'Bebidas', // Sub: Cerveza
        thumbnail: 'https://example.com/images/ipabeer.jpg',
      },
      //---------------------
      //Libros (ejemplo breve, se podria expandir muchisimo)
      //---------------------
      {
        title: 'Cien años de soledad',
        description:
          'Novela del escritor colombiano Gabriel García Márquez, ganador del Premio Nobel de Literatura en 1982.',
        price: 25.5,
        discountPercentage: 10,
        rating: 5,
        stock: 15,
        brand: 'Gabriel Garcia Marquez',
        category: 'Libros',
        thumbnail: 'https://example.com/cienaños.jpg',
      },
      {
        title: 'El Hobbit',
        description:
          'Novela fantástica del filólogo y escritor británico J. R. R. Tolkien.',
        price: 30.0,
        discountPercentage: 15,
        rating: 4.9,
        stock: 35,
        brand: 'J. R. R. Tolkien',
        category: 'Libros',
        thumbnail: 'https://example.com/elhobbit.jpg',
      },
      {
        title: 'Cocina vegana',
        description: 'Libro con multiples recetas de comida vegana.',
        price: 15.5,
        discountPercentage: 5,
        rating: 3.5,
        stock: 60,
        brand: 'Lucía Martinez',
        category: 'Libros',
        thumbnail: 'https://example.com/cocinaVegana.jpg',
      },
      // ------------------------------------------------------------------
      // Deportes y Aire Libre
      // ------------------------------------------------------------------
      {
        title: 'Bicicleta de Montaña Trek Marlin 7',
        description:
          'Cuadro de aluminio, suspensión delantera, 21 velocidades, frenos de disco hidráulicos.',
        price: 799.99,
        discountPercentage: 10.0,
        rating: 4.7,
        stock: 50,
        brand: 'Trek',
        category: 'Deportes y Aire Libre', // Sub: Ciclismo
        thumbnail: 'https://example.com/images/trekmarlin7.jpg',
      },
      {
        title: 'Tienda de Campaña Coleman Sundome 4 Personas',
        description: 'Fácil montaje, impermeable, ventilación ajustable.',
        price: 99.99,
        discountPercentage: 15.0,
        rating: 4.6,
        stock: 80,
        brand: 'Coleman',
        category: 'Deportes y Aire Libre', // Sub: Camping y Senderismo
        thumbnail: 'https://example.com/images/colemansundome.jpg',
      },
      {
        title: 'Kayak Inflable Intex Explorer K2',
        description:
          'Para 2 personas, incluye remos y bomba, resistente a pinchazos.',
        price: 149.99,
        discountPercentage: 12.7,
        rating: 4.5,
        stock: 60,
        brand: 'Intex',
        category: 'Deportes y Aire Libre', // Sub: Deportes Acuáticos
        thumbnail: 'https://example.com/images/intexexplorer.jpg',
      },
      {
        title: 'Balón de Fútbol Adidas UCL Finale',
        description:
          'Tamaño oficial, diseño de la Champions League, cosido a máquina.',
        price: 34.99,
        discountPercentage: 0,
        rating: 4.8,
        stock: 100,
        brand: 'Adidas',
        category: 'Deportes y Aire Libre', // Sub: Fútbol
        thumbnail: 'https://example.com/images/adidasuclball.jpg',
      },
      {
        title: 'Raqueta de Tenis Wilson Blade 98',
        description:
          'Control y sensación, para jugadores intermedios y avanzados.',
        price: 219.0,
        discountPercentage: 8.7,
        rating: 4.7,
        stock: 40,
        brand: 'Wilson',
        category: 'Deportes y Aire Libre', // Sub: Tenis
        thumbnail: 'https://example.com/images/wilsonblade98.jpg',
      },
      {
        title: 'Tabla de Surf Espuma (Softboard)',
        description:
          'Ideal para principiantes, 8 pies, incluye quillas y leash.',
        price: 199.0,
        discountPercentage: 5.0,
        rating: 4.6,
        stock: 70,
        brand: 'Wavestorm', // Ejemplo
        category: 'Deportes y Aire Libre', // Sub: Surf
        thumbnail: 'https://example.com/images/softboard.jpg',
      },
      {
        title: 'Set de palos de golf',
        description:
          'Palos de grafito, ideal para nivel principiante-intermedio.',
        price: 450.0,
        discountPercentage: 17.6,
        rating: 4.4,
        stock: 15,
        brand: 'Callaway',
        category: 'Deportes y Aire Libre',
        thumbnail: 'https://example.com/golf.jpg',
      },

      // ------------------------------------------------------------------
      // Productos para Mascotas
      // ------------------------------------------------------------------

      {
        title: 'Comida Seca para Perros Adultos',
        description:
          'Sabor a pollo y arroz, ingredientes naturales, para razas medianas.',
        price: 49.99,
        discountPercentage: 10.0,
        rating: 4.8,
        stock: 120,
        brand: 'Purina Pro Plan',
        category: 'Mascotas', // Sub: Comida para Perros
        thumbnail: 'https://example.com/images/dogfood.jpg',
      },
      {
        title: 'Arena para Gatos Aglomerante',
        description: 'Control de olores, fácil de limpiar, sin polvo.',
        price: 18.99,
        discountPercentage: 0,
        rating: 4.7,
        stock: 150,
        brand: 'Tidy Cats',
        category: 'Mascotas', // Sub: Arena para Gatos
        thumbnail: 'https://example.com/images/catlitter.jpg',
      },
      {
        title: 'Cama para Perros Ortopédica',
        description:
          'Espuma viscoelástica, soporte para articulaciones, funda lavable.',
        price: 79.99,
        discountPercentage: 15.0,
        rating: 4.9,
        stock: 80,
        brand: 'Furhaven', // Ejemplo
        category: 'Mascotas', // Sub: Camas y Muebles
        thumbnail: 'https://example.com/images/dogbed.jpg',
      },
      {
        title: 'Rascador para Gatos con Poste y Juguetes',
        description: 'Sisal natural, múltiples niveles, con pelota colgante.',
        price: 59.99,
        discountPercentage: 12.5,
        rating: 4.6,
        stock: 90,
        brand: 'Amazon Basics', // Ejemplo
        category: 'Mascotas', // Sub: Juguetes y Rascadores
        thumbnail: 'https://example.com/images/catscratcher.jpg',
      },
      {
        title: 'Transportín para Perros y Gatos',
        description: 'Ventilación adecuada, puerta segura, asa de transporte.',
        price: 39.99,
        discountPercentage: 8.0,
        rating: 4.5,
        stock: 100,
        brand: 'Petmate', // Ejemplo
        category: 'Mascotas', // Sub: Transportines y Viaje
        thumbnail: 'https://example.com/images/petcarrier.jpg',
      },

      // --------------------------------
      //  Juguetes y Juegos
      // --------------------------------

      {
        title: 'LEGO Star Wars Halcón Milenario',
        description: 'Set de construcción, 7541 piezas, incluye minifiguras.',
        price: 799.99,
        discountPercentage: 5.0,
        rating: 4.9,
        stock: 30,
        brand: 'LEGO',
        category: 'Juguetes y Juegos', // Sub: Construcción
        thumbnail: 'https://example.com/images/legomillenniumfalcon.jpg',
      },
      {
        title: 'Juego de Mesa Catan',
        description: 'Estrategia, comercio, construcción, para 3-4 jugadores.',
        price: 49.99,
        discountPercentage: 10.0,
        rating: 4.8,
        stock: 60,
        brand: 'Kosmos',
        category: 'Juguetes y Juegos', // Sub: Juegos de Mesa
        thumbnail: 'https://example.com/images/catangame.jpg',
      },
      {
        title: 'Consola Nintendo Switch OLED',
        description:
          'Pantalla OLED de 7 pulgadas, mejor calidad de sonido, base ajustable.',
        price: 349.99,
        discountPercentage: 0.0,
        rating: 4.7,
        stock: 55,
        brand: 'Nintendo',
        category: 'Juguetes y Juegos',
        thumbnail: 'https://example.com/nintendo.jpg',
      },
      {
        title: 'Puzzle de 1000 piezas',
        description: 'Rompecabezas con tematica de paisajes.',
        price: 30.0,
        discountPercentage: 7.5,
        rating: 4.2,
        stock: 25,
        brand: 'Ravensburger',
        category: 'Juguetes y Juegos',
        thumbnail: 'https://example.com/puzzle.jpg',
      },
      {
        title: 'Muñeca Barbie Fashionista',
        description: 'Incluye accesorios de moda, articulada.',
        price: 19.99,
        discountPercentage: 0,
        rating: 4.6,
        stock: 80,
        brand: 'Mattel',
        category: 'Juguetes y Juegos', // Sub: Muñecas y Accesorios
        thumbnail: 'https://example.com/images/barbie.jpg',
      },
      {
        title: 'Coche teledirigido',
        description: 'Coche a radio control de alta velocidad.',
        price: 65.0,
        discountPercentage: 20,
        rating: 4.8,
        stock: 16,
        brand: 'Traxxas',
        category: 'Juguetes y Juegos',
        thumbnail: 'https://example.com/cocheRC.jpg',
      },
    ];

    // 3. Insertar los datos en la base de datos:
    await this.productoModel.insertMany(productos);

    console.log('Datos de prueba insertados en la colección "productos".');
  }
}
