# SIPI1-20231C-mayorista

Desarrollado por:

* Blanco, Carla L.U. 1131968
* Blanco, Nicole L.U. 1112631
* Dall Acqua, Emiliano L.U. 1114434
* Garroni, Sergio L.U. 1122639
* Jramoy, Tomás L.U. 1145194
* Medina, Sebastián L.U. 1081481
* Moura, Pedro L.U. 1123499
* Sena, Federico L.U. 1112998

Año 2023, 1er Cuatrimestre

# Dependencias

Antes de ejecutar el programa, correr el comando `npm install` para instalar las dependencias necesarias.

# Ejecución

- Backend: Ejecutar `node index.js`.
- Frontend: Desde la carpeta front-end, ejecutar `npm run dev`.


## Backend

* El backend utiliza base de datos SQlite por lo cual no hace falta configurar o instalar nada.
* En el archivo .env se deben setear los parametros de envío de e-mail y otros (para e-mail recomiendo mailtrap.io).
* Para acceder a la base de datos se puede utilizar DBeaver y abrir el archivo database.sqlite que se crea en el proyecto automáticamente.
* Se debe correr el comando `npm install` para instalar las dependencias.
* Para correr las migraciones, debemos tener instalado la CLI de Sequelize: `npm install --save-dev sequelize-cli`.
* Luego, correr el comando `npx sequelize-cli db:migrate` para ejecutar las migraciones.
* Para correr las seeds: `npx sequelize-cli db:seed:all`.
* Podemos correr el proyecto con `nodemon` (recomendado) o `node index.js`.
* Para instalar nodemon: `npm install nodemon --save-dev`.
