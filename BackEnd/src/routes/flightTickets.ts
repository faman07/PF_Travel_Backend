import { Router } from 'express';
import { Prisma, PrismaClient } from '@prisma/client'
import getTickets from '../services/tickets';

const prisma = new PrismaClient()

const router= Router();
  
// router.get('/Ticket', async (req, res) => {
//   try {
//     let ticket = await getTickets(req.query)
//     res.status(200).json(ticket)
//   } catch (e) {
//     res.status(400).json(e)
//   }
// })
  



exports= router;