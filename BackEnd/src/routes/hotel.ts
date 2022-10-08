import { Router} from "express";
import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()



const hotelRouter:Router = Router();

hotelRouter.get('/', async (req, res) => {
    try {
      res.status(200).json("Estas en la ruta /hotel")
    } catch (e) {
      res.status(400).json(e)
    }
  })

  hotelRouter.get('/Hotel', async (req, res) => { 
    try {
        const hotels =  await prisma.hotel.findMany()
        if(hotels) {return res.json(hotels)
        }
        return res.send("No hay Hoteles")
      }  
     catch (e) {
      res.status(400).json(e)
    }
  })


export {hotelRouter}