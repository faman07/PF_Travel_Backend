
- Pasos para dar de alta la base de datos y cargar datos 

requisitos:
tener una cuaanta de base de datos en postgres (La base se genera automaticamente, lo que se necesita es que hata un usuario y conexion a postgres, el usuario debe tener privilegios para crear bases de datos)
- generar el archivo .env (este se los enviare por sepaarado)

1 - npm install (En la raiz del proyecto /BackEnd)
2 - npx prisma migrate dev --name init  (Esto para generar la base de datos y la estructura)
3 - npx prisma migrate reset (Para garantizar que la base quede limpia antes de cargar datos)
4 - cargar datos en los modelos Base, para que no genere problemas
   -- npx ts-node prisma/data/service.ts
   -- npx ts-node prisma/data/customers.ts
   -- npx ts-node prisma/data/company.ts
   -- npx ts-node prisma/data/activityType.ts

5 - cargar datos en los modelos Compuestos (Estos modelos requieren que hayan datos en algunas de las anteriores tablas)
   -- npx ts-node prisma/data/activity.ts
   -- npx ts-node prisma/data/hotel.ts
   -- npx ts-node prisma/data/ticket.ts



