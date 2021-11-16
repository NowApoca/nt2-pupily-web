import UsuariosDao from './UsuariosDao.js';

const usuariosDao = new UsuariosDao()

export function getUsuariosDao() {
    return usuariosDao
}