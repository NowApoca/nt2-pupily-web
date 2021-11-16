import MascotasDao from './MascotasDao.js';

const mascotasDao = new MascotasDao()

export function getMascotasDao() {
    return mascotasDao
}