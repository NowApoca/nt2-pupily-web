import { Router } from 'express'
import { registrarMascota } from '../casosDeUso/registroDeMascotas.js'

const mascotasRouter = Router()

const getFile = createFileExtractorMiddleware('./imagenes')

mascotasRouter.post('/', getFile, async (req, res) => {
    try {
        const mascota = await registrarMascota({ ...req.body})
        res.json(mascota)
    } catch (error) {
        res.json({ error: error.message })
    }
})

export { mascotasRouter }