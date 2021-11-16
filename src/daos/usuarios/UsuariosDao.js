export default class UsuariosDao {
    constructor() {
        this.usuarios = []
    }

    findById(id) {
        return this.usuarios.find(u => u.id == id)
    }

    findAll() {
        return this.usuarios
    }

    save(usuario) {
        this.usuarios.push(usuario)
    }
}