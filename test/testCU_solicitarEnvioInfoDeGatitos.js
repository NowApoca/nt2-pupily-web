import { solicitarEnvioInfoDeGatitosAlMail } from '../src/casosDeUso/solicitarEnvioInfoDeGatitosAlMail.js';

import { getUsuariosDao } from '../src/daos/usuarios/index.js'

const usuDao = getUsuariosDao()

usuDao.save({
    id: 1,
    nombre: 'pepe',
    email: 'mailDePrueba@casosdeuso.com'
})

await solicitarEnvioInfoDeGatitosAlMail(1)