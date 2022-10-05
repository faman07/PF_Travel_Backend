import { Router } from 'express'
import {customerRouter} from './customer'
import {hotelRouter} from './hotel'
import {ticketRouter} from './ticket'
import {excursionRouter} from './excursion'
import { packageRouter } from './package'

const indexRouter = Router()

indexRouter.route('/').get((req,res)=>{
    res.send("Holiwis")
})
indexRouter.use('/user',customerRouter)
indexRouter.use('/hotel', hotelRouter)
indexRouter.use('/excursion', excursionRouter)
indexRouter.use('/ticket', ticketRouter)
indexRouter.use('/package', packageRouter)


export {indexRouter}