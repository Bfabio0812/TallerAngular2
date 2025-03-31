# --- Base Image ---
    FROM node:18-alpine AS base

    # Establecer directorio de trabajo
    WORKDIR /usr/src/app
    
    # --- Dependencies Stage ---
    FROM base AS dependencies
    
    # Copiar package.json y package-lock.json (si existe)
    COPY package*.json ./
    
    # Instalar dependencias de producción y desarrollo.  Esto permite usar el caché de Docker eficientemente.
    RUN npm ci --also=dev
    
    # --- Builder Stage ---
    FROM dependencies AS builder
    
    # Copiar el resto del código fuente
    COPY . .
    
    # Construir la aplicación NestJS
    RUN npm run build
    
    # --- Production Stage ---
    FROM node:18-alpine AS production
    
    # Argumento para el puerto (opcional, pero buena práctica)
    ARG PORT=3000
    ENV PORT=$PORT
    
    # Establecer variables de entorno
    # NODE_ENV a 'production' es crucial para optimizaciones.
    ENV NODE_ENV=production
    
    # Establecer directorio de trabajo
    WORKDIR /usr/src/app
    
    # Copiar solo los archivos necesarios para producción desde el builder stage.
    # Esto reduce el tamaño de la imagen final significativamente.
    COPY --from=builder /usr/src/app/dist ./dist
    COPY --from=builder /usr/src/app/node_modules ./node_modules
    COPY --from=builder /usr/src/app/package*.json ./
    COPY --from=builder /usr/src/app/.env ./.env
    
    # Exponer el puerto
    EXPOSE $PORT
    
    # Comando para iniciar la aplicación
    CMD ["npm", "run", "start:prod"]