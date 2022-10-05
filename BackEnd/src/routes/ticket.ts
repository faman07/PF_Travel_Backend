import { Router} from "express";
import { Prisma, PrismaClient } from '@prisma/client'
import getTickets from "../services/tickets";

const prisma = new PrismaClient()



const ticketRouter:Router = Router();

ticketRouter.get('/getTicket', async (req, res) => {
  try {
    res.status(200).json(await getTickets(req.query))
  } catch (e) {
    res.status(400).json(e)
  }
})

ticketRouter.post('/saveTicket', async (req, res) => {
    try {
      res.status(200).json("El Modulo /CreateTicket se encuentra en desarrollo")
    } catch (e) {
      res.status(400).json(e)
    }
  })

  ticketRouter.post('/updateTicket', async (req, res) => {
    try {
      res.status(200).json("El Modulo /UpdateTicket se encuentra en desarrollo")
    } catch (e) {
      res.status(400).json(e)
    }
  })

  ticketRouter.post('/deleteTicket', async (req, res) => {
    try {
      res.status(200).json("El Modulo /DeleteTicket se encuentra en desarrollo")
    } catch (e) {
      res.status(400).json(e)
    }
  })




export {ticketRouter}

