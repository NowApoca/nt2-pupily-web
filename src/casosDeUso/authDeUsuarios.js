import { getUsuariosDao } from '../daos/usuarios/index.js';
import Usuario from '../modelos/Usuario.js'
import { getUsuariosDao } from '../daos/usuarios/index.js';
import { generarId } from '../modulos/generarId/generarId'
import TokenHandler from '../modulos/session/session';
import config from "../config"

const usuarioDao = getUsuariosDao()
const sessionDao = getSessionDao()
const tokenHandler = new TokenHandler(config.SECRET)

export async function loginUsuario({email, password}) {
    const id = generarId()

    const usuario = usuarioDao.findByEmail(email)

    const loginInvalidoMsg = "El usuario o la password no existen";

    if(usuario === null){
        throw new Error(loginInvalidoMsg);
    }

    let esPasswordValida = usuario.verificarPassword(password);
    if(!esPasswordValida){
        throw new Error(loginInvalidoMsg);
    }

    const token = tokenHandler.serializeSession(user.getData());
    sessionDao.save(token)

    return { token }
}
