FROM node:20-alpine

WORKDIR /app

# Limpiar instalación previa y caché
RUN rm -rf node_modules package-lock.json
RUN npm cache clean --force

# Instalar dependencias
COPY package.json ./
RUN npm install --no-cache

# Copiar el resto del código
COPY . .

# Exponer el puerto para desarrollo
EXPOSE 3000

# Comando por defecto (desarrollo) con configuración para Docker
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "3000"] 