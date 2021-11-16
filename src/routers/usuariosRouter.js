import { Router } from 'express'
import { registrarUsuario } from '../casosDeUso/registroDeUsuarios.js'

const usuariosRouter = Router()

usuariosRouter.post('/', getFile, async (req, res) => {
    try {
        const usuario = await registrarUsuario({ ...req.body })
        res.json(usuario)
    } catch (error) {
        res.json({ error: error.message })
    }
})

usuariosRouter.post('/login', getLogParams, async (req, res) => {
    
})

usuariosRouter.get('/data/qr', getAuth, async (req, res) => {
    
})

usuariosRouter.get('/mascotas', getAuth, async (req, res) => {
    
})

export { usuariosRouter }