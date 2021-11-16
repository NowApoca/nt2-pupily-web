import { registrarUsuario } from '../src/casosDeUso/registroDeUsuarios.js';

import { getUsuariosDao } from '../src/daos/usuarios/index.js'

const usuDao = getUsuariosDao()

await registrarUsuario({
    nombre: 'pepe',
    email: 'mailDePrueba@casosdeuso.com'
})

console.log(usuDao.findAll())