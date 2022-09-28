import {Prisma, PrismaClient} from '@prisma/client'
import express from 'express'
const port = 5000

const prisma = new PrismaClient()
const app = express()

// middlewares

app.use(express.json())


// Routes

app.get(`/`, async (req, res) => {   
  res.status(200).send('estamos en la ruta get /')
})







// Server Configuration

const server = app.listen(port, () =>
  console.log(`
🚀 Server ready at: http://localhost:${port}
⭐️ Server de Prueba para Proyecto Final Travelopers`),
)