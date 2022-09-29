import { Router } from 'express';
import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const router = Router();

router.post('/UpdateCustomer', async (req, res) => {
    try {
      res.status(200).json("El Modulo /UpdateUser se encuentra en desarrollo")
    } catch (e) {
      res.status(400).json(e)
    }
  })
  
  router.post('/UpdateHotel', async (req, res) => {
    try {
      res.status(200).json("El Modulo /UpdateHotel se encuentra en desarrollo")
    } catch (e) {
      res.status(400).json(e)
    }
  })
  
  router.post('/UpdateExcursion', async (req, res) => {
    try {
      res.status(200).json("El Modulo /UpdateExcursion se encuentra en desarrollo")
    } catch (e) {
      res.status(400).json(e)
    }
  })
  
  router.post('/UpdateTicket', async (req, res) => {
    try {
      res.status(200).json("El Modulo /UpdateTicket se encuentra en desarrollo")
    } catch (e) {
      res.status(400).json(e)
    }
  })
  
  router.post('/UpdateAccommodation', async (req, res) => {
    try {
      res.status(200).json("El Modulo /UpdateAccommodation se encuentra en desarrollo")
    } catch (e) {
      res.status(400).json(e)
    }
  })


module.exports = router;