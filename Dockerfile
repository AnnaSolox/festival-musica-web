# Imagen base oficial de Node
FROM node:18

# Crear directorio de trabajo
WORKDIR /usr/src/app

# Copiar el resto del código
COPY . .

# Exponer puerto de la app
EXPOSE 3000

# Comando por defecto
CMD ["node"]
