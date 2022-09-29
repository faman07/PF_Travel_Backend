import { Router } from 'express';
import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const router = Router();

router.post('/CreateCustomer', async (req, res) => {
    try {
      res.status(200).json("El Modulo /CreateCustomer se encuentra en desarrollo")
    } catch (e) {
      res.status(400).json(e)
    }
  })
  
  router.post('/CreateHotel', async (req, res) => {
    try {
      res.status(200).json("El Modulo /CreateHotel se encuentra en desarrollo")
    } catch (e) {
      res.status(400).json(e)
    }
  })
  
  router.post('/CreateExcursion', async (req, res) => {
    try {
      res.status(200).json("El Modulo /CreateExcursion se encuentra en desarrollo")
    } catch (e) {
      res.status(400).json(e)
    }
  })
  
  router.post('/CreateTicket', async (req, res) => {
    try {
      res.status(200).json("El Modulo /CreateTicket se encuentra en desarrollo")
    } catch (e) {
      res.status(400).json(e)
    }
  })
  
  router.post('/CreateAccommodation', async (req, res) => {
    try {
      res.status(200).json("El Modulo /CreateAccommodation se encuentra en desarrollo")
    } catch (e) {
      res.status(400).json(e)
    }
  })


module.exports = router;