import { Router } from 'express';
const  create = require ('./create')
const  update= require ('./update')
const  info= require ('./info')

const router = Router();

router.use('/info', info)
router.use('/update', update);
router.use('/create', create);