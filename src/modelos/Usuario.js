export default class Usuario {
    constructor({ id, nombre, email, password }) {
        this.setId(id)
        this.setNombre(nombre)
        this.setEmail(email)
        this.setPassword(password)
    }

    setId(id) {
        if (!id) {
            throw new Error('INVALID_ARGS: falta el id')
        }
        this.id = id
    }

    setNombre(nombre) {
        if (!nombre) {
            throw new Error('INVALID_ARGS: falta el nombre')
        }
        this.nombre = nombre
    }

    setEmail(email) {
        if (!email) {
            throw new Error('INVALID_ARGS: falta el email')
        }
        this.email = email
    }

    setPassword(password) {
        if (!password) {
            throw new Error('INVALID_ARGS: falta el password')
        }
        this.password = password
    }

    getData(){
        return {
            id: this.id,
            nombre: this.nombre,
            email: this.email,
        }
    }

    verificarPassword(password){
        return password === this.password;
    }
}