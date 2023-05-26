# SIPI1-20231C-mayorista

Desarrollado por:

Carla Blanco (carblanco@uade.edu.ar)
Legajo 1131968

Sebastian Medina (semedina@uade.edu.ar)
Legajo 1081481

Sergio Garroni (sgarroni@uade.edu.ar)
Legajo 1122639

Nicole Blanco (nicoblanco@uade.edu.ar)
Legajo 1112631

Federico Sena (fsena@uade.edu.ar)
Legajo 1112998

Año 2023, 1er Cuatrimestre

# Dependencias

Antes de ejecutar el programa, correr el comando `npm install` para instalar las dependencias necesarias.

# Ejecución

- Backend: Ejecutar `node index.js`.
- Frontend: Desde la carpeta front-end, ejecutar `npm run dev`.


## Backend

El backend utiliza base de datos SQlite por lo cual no hace falta configurar o instalar nada.
En el archivo .env se deben setear los parametros de envío de e-mail y otros (para e-mail recomiendo mailtrap.io).
Para acceder a la base de datos se puede utilizar DBeaver y abrir el archivo database.sqlite que se crea en el proyecto automáticamente.
Se debe correr el comando `npm install` para instalar las dependencias.
Para correr las migraciones, debemos tener instalado la CLI de Sequelize: `npm install --save-dev sequelize-cli`.
Luego, correr el comando `npx sequelize-cli db:migrate` para ejecutar las migraciones.
Podemos correr el proyecto con `nodemon` (recomendado) o `node index.js`.
Para instalar nodemon: `npm install nodemon --save-dev`.
