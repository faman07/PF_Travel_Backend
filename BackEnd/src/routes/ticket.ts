import { Router} from "express";
import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()



const ticketRouter:Router = Router();

ticketRouter.post('/CreateTicket', async (req, res) => {
    try {
      res.status(200).json("El Modulo /CreateTicket se encuentra en desarrollo")
    } catch (e) {
      res.status(400).json(e)
    }
  })

  ticketRouter.post('/UpdateTicket', async (req, res) => {
    try {
      res.status(200).json("El Modulo /UpdateTicket se encuentra en desarrollo")
    } catch (e) {
      res.status(400).json(e)
    }
  })

  ticketRouter.get('/Company', async (req, res) => {
    try {
      const companies = await prisma.company.findMany()
      res.status(200).json(companies)
    } catch (e) {
      res.status(400).json(e)
    }
  })

  ticketRouter.get('/Ticket', async (req, res) => {
    try {
      res.status(200).json("El Modulo /Ticket se encuentra en desarrollo")
    } catch (e) {
      res.status(400).json(e)
    }
  })


export {ticketRouter}