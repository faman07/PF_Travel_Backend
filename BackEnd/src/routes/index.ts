import { Router } from 'express'
import {customerRouter} from './customer'
import {hotelRouter} from './hotel'
import {ticketRouter} from './ticket'
import {excursionRouter} from './excursion'
import { packageRouter } from './package'

const indexRouter = Router()

indexRouter.use('/', (req, res, next) => {
    //res.send("estamos en el index")
    console.log("Estamos en el /")
    next()
})
indexRouter.use('/user', customerRouter)
indexRouter.use('/hotel', hotelRouter)
indexRouter.use('/excursion', excursionRouter)
indexRouter.use('/ticket', ticketRouter)
indexRouter.use('/package', packageRouter)


export {indexRouter}