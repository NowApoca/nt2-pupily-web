export default class Mascota {
    constructor({ id, nombre, owner }) {
        this.setId(id)
        this.setNombre(nombre)
        this.setOwner(owner)
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

    setEmail(owner) {
        if (!owner) {
            throw new Error('INVALID_ARGS: falta el owner')
        }
        this.owner = owner
    }
}