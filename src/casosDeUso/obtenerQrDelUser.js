import { generarId } from '../modulos/generarId/generarId'
import { getUsuariosDao } from "../daos/usuarios/index"
import { generateQr } from "../modulos/qr/qr"

const usuarioDao = getUsuariosDao()

export async function generarQrDeUsuario(userId) {
    const usuario = usuarioDao.findById(userId);
    if(!usuario){
        throw new Error(`El usuario con id ${userId} no existe`)
    }

    const qrData = generateQr(usuario.getData());

    return { qrData }
}
