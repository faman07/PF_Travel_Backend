Para levantar servidor seguir los siguientes pasos:

1. npm install

Para instalar las dependencias

2. npx primas migrate dev --name init

Crea la base de datos nueva. Si arroja un error de conexion es porque falla la url de la base de datos

3. npm run dev

Para iniciar el servidor y empezar a hacer requests en el puerto default 5000

Otros comandos utiles:

- npx prisma migrate reset

Borra la base de datos y carga la info nuevamente dejando la bd en un estado conocido