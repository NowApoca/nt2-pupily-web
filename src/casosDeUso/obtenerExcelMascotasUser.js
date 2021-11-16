import generarId from "../modulos/generarId/generarId"
import generateExcel from '../modulos/excel/excel'

const mascotaDao = getMascotasDao()

export async function obtenerExcelMascotas(userId) {
    const mascotas = mascotaDao.getMascotasDeUsuarioPorId(userId);
    const headers = ['Nombre', 'Id'];
    const fileName = generarId();
    const dataMascotas = mascotas.map(mascota => Object.values(mascota));
    await generateExcel(headers, dataMascotas, {fileName})

    return { fileName }
}
