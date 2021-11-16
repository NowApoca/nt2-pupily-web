import { generarId } from '../modulos/generarId/generarId'
import Mascota from '../modelos/Mascota';
import { getMascotasDao } from "../daos/mascotas/index"

const mascotaDao = getMascotasDao()

export async function registrarMascota(datosMascota) {
    const id = generarId()
    const mascota = new Mascota({ ...datosMascota, id })
    mascotaDao.save(mascota)

    return { mascota, token }
}
