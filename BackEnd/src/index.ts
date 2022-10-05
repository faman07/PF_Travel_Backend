import express from 'express'
import { PrismaClient } from '@prisma/client'
import {indexRouter} from './routes/index';
import passport from 'passport'
//import { loginRouter } from "./routes/login"
import './middlewares/google'
import { relative } from 'path';
import { rmSync } from 'fs';
const port = 5000

const prisma: PrismaClient = new PrismaClient()
const app = express()

// middlewares
app.use(express.json())
app.use(passport.initialize())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*' ); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use(indexRouter)


//app.use('/', router)

// GET Routes


//------------------------------------------------------------
const server = app.listen(port, () =>
  console.log(`
🚀 Server ready at: http://localhost:${port}
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
)
