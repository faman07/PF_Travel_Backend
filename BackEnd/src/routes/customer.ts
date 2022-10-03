import { Router} from "express";
import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


const customerRouter:Router = Router();

customerRouter.post('/CreateCustomer', async (req, res) => {
    const {name,
          identification, 
          birthday, 
          phoneNumber, 
          email, 
          numberCard} = req.body
    try {
      
      res.status(200).json("El Modulo /CreateCustomer se encuentra en desarrollo")
    } catch (e) {
      res.status(400).json(e)
    }
  })

  customerRouter.post(`/signup`, async (req, res) => {
    const {email, pass } = req.body
    try {
      const validation = await prisma.customer.findUnique({
        where: {
          email: email,
          }})
        if (validation?.numberCard == pass) {
          res.status(200).json("Acceso Satisfactorio")
        } else {
          res.status(400).json("Acceso Denegado")
        }
    } catch (e) {
      res.status(400).json(e)
    }
  })

  customerRouter.post('/UpdateCustomer', async (req, res) => {
    try {
      res.status(200).json("El Modulo /UpdateUser se encuentra en desarrollo")
    } catch (e) {
      res.status(400).json(e)
    }
  })

  customerRouter.get('/Customer', async (req, res) => {
    try {
      const costumers = await prisma.customer.findMany()
      res.status(200).json(costumers)
    } catch (e) {
      res.status(400).json(e)    
    }  
  })

  customerRouter.get('/', async (req, res) => {
    try {
      res.status(200).json('Estas en el modulo Users')
    } catch (e) {
      res.status(400).json(e)    
    }  
  })


export {customerRouter}