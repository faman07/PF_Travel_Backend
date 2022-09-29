import { Router } from 'express';
import { Prisma, PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const router = Router();

router.get('/Customer', async (req, res) => {
    try {
      const costumers = await prisma.customer.findMany()
      res.status(200).json(costumers)
    } catch (e) {
      res.status(400).json(e)    
    }  
  })
  
  router.get('/Hotel', async (req, res) => {
    try {
      const hotels = await prisma.hotel.findMany()
      res.status(200).json(hotels)
    } catch (e) {
      res.status(400).json(e) 
    }
  })
  
  router.get('/Services', async (req, res) => {
    try {
      const services = await prisma.services.findMany()
      res.status(200).json(services)
    }  catch (e) {
      res.status(400).json(e)
    }
  })
  
  router.get('/Company', async (req, res) => {
    try {
      const companies = await prisma.company.findMany()
      res.status(200).json(companies)
    } catch (e) {
      res.status(400).json(e)
    }
  })
  
  router.get('/Ticket', async (req, res) => {
    try {
      res.status(200).json("El Modulo /Ticket se encuentra en desarrollo")
    } catch (e) {
      res.status(400).json(e)
    }
  })
  
  router.get('/TouristPackage', async (req, res) => {
    try {
      res.status(200).json("El Modulo /TouristPackage se encuentra en desarrollo")
    } catch (e) {
      res.status(400).json(e)
    }
  })
  
  router.get('/Excursion', async (req, res) => {
    try {
      res.status(200).json("El Modulo /Excursion se encuentra en desarrollo")
    } catch (e) {
      res.status(400).json(e)
    }
  })
  
  router.get('/Accommodations', async (req, res) => {
    try {
      res.status(200).json("El Modulo /Accommodations se encuentra en desarrollo")
    } catch (e) {
      res.status(400).json(e)
    }
  })
  


module.exports = router;