import { Router} from "express";

const loginRouter:Router = Router();

loginRouter.get('/google', (req, res) => {
    console.log('validacion con Google')
    res.send(req.user)
})

loginRouter.get('/', (req, res) => {
    console.log('validacion local')
    res.send('validacion con JWT')

})

export {loginRouter}