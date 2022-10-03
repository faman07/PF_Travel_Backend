import express from 'express'
import { PrismaClient } from '@prisma/client'
import getTickets from './services/tickets'
//const routes = require('./routes/index.ts');
const port = 5000

const prisma = new PrismaClient()
const app = express()

// middlewares
app.use(express.json())
//app.use('/', routes);

// GET Routes

app.get('/Customer', async (req, res) => {
  try {
    const costumers = await prisma.customer.findMany()
    res.status(200).json(costumers)
  } catch (e) {
    res.status(400).json(e)    
  }  
})

app.get('/Hotel', async (req, res) => {
  try {
    const hotels = await prisma.hotel.findMany()
    res.status(200).json(hotels)
  } catch (e) {
    res.status(400).json(e) 
  }
})

app.get('/Services', async (req, res) => {
  try {
    const services = await prisma.services.findMany()
    res.status(200).json(services)
  }  catch (e) {
    res.status(400).json(e)
  }
})

app.get('/Company', async (req, res) => {
  try {
    const companies = await prisma.company.findMany()
    res.status(200).json(companies)
  } catch (e) {
    res.status(400).json(e)
  }
})

  
app.get('/Ticket', async (req, res) => {
  try {
    let ticket = await getTickets(req.query)
    res.status(200).json(ticket)
  } catch (e) {
    res.status(400).json(e)
  }
})
  

app.get('/TouristPackage', async (req, res) => {
  try {
    res.status(200).json("El Modulo /TouristPackage se encuentra en desarrollo")
  } catch (e) {
    res.status(400).json(e)
  }
})

app.get('/Excursion', async (req, res) => {
  try {
    res.status(200).json("El Modulo /Excursion se encuentra en desarrollo")
  } catch (e) {
    res.status(400).json(e)
  }
})

app.get('/Accommodations', async (req, res) => {
  try {
    res.status(200).json("El Modulo /Accommodations se encuentra en desarrollo")
  } catch (e) {
    res.status(400).json(e)
  }
})

// Update Routes

// app.post('/UpdateCustomer', async (req, res) => {
//   try {
//     res.status(200).json("El Modulo /UpdateUser se encuentra en desarrollo")
//   } catch (e) {
//     res.status(400).json(e)
//   }
// })

// app.post('/UpdateHotel', async (req, res) => {
//   try {
//     res.status(200).json("El Modulo /UpdateHotel se encuentra en desarrollo")
//   } catch (e) {
//     res.status(400).json(e)
//   }
// })

// app.post('/UpdateExcursion', async (req, res) => {
//   try {
//     res.status(200).json("El Modulo /UpdateExcursion se encuentra en desarrollo")
//   } catch (e) {
//     res.status(400).json(e)
//   }
// })

// app.post('/UpdateTicket', async (req, res) => {
//   try {
//     res.status(200).json("El Modulo /UpdateTicket se encuentra en desarrollo")
//   } catch (e) {
//     res.status(400).json(e)
//   }
// })

// app.post('/UpdateAccommodation', async (req, res) => {
//   try {
//     res.status(200).json("El Modulo /UpdateAccommodation se encuentra en desarrollo")
//   } catch (e) {
//     res.status(400).json(e)
//   }
// })

// CREATE Routes

// app.post('/CreateCustomer', async (req, res) => {
//   try {
//     res.status(200).json("El Modulo /CreateCustomer se encuentra en desarrollo")
//   } catch (e) {
//     res.status(400).json(e)
//   }
// })

// app.post('/CreateHotel', async (req, res) => {
//   try {
//     res.status(200).json("El Modulo /CreateHotel se encuentra en desarrollo")
//   } catch (e) {
//     res.status(400).json(e)
//   }
// })

// app.post('/CreateExcursion', async (req, res) => {
//   try {
//     res.status(200).json("El Modulo /CreateExcursion se encuentra en desarrollo")
//   } catch (e) {
//     res.status(400).json(e)
//   }
// })

// app.post('/CreateTicket', async (req, res) => {
//   try {
//     res.status(200).json("El Modulo /CreateTicket se encuentra en desarrollo")
//   } catch (e) {
//     res.status(400).json(e)
//   }
// })

// app.post('/CreateAccommodation', async (req, res) => {
//   try {
//     res.status(200).json("El Modulo /CreateAccommodation se encuentra en desarrollo")
//   } catch (e) {
//     res.status(400).json(e)
//   }
// })

// DELETE Routes

// app.delete('/DeleteCostumer', async (req, res) => {
//   try {
//     res.status(200).json("El Modulo /CreateAccommodation se encuentra en desarrollo")
//   } catch (e) {
//     res.status(400).json(e)
//   }
// })



//------------------------------------------------------------
const server = app.listen(port, () =>
  console.log(`
🚀 Server ready at: http://localhost:${port}
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
)
