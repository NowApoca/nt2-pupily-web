export default class MascotasDao {
    constructor() {
        this.mascotas = []
    }

    findById(id) {
        return this.mascotas.find(u => u.id == id)
    }

    findAll() {
        return this.mascotas
    }

    save(usuario) {
        this.mascotas.push(usuario)
    }
}