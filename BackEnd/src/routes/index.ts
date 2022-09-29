import { Router } from 'express';
import {router as create} from './create';
import {router as update} from './update';
import {router as info} from './info';

const router = Router();

router.use('/info', info)
router.use('/update', update);
router.use('/create', create);

export {router}