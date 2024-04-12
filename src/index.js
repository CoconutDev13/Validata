export class Validata {
    #fields

    constructor () {
        this.#fields = new Array()
    }

    addField(builder) {
        this.#fields.push(builder)
        return this
    }

    validate = (data) => {
        const errors = new Array()
        this.#fields.forEach((field) => {
            const value = data[field.name]
            const error = field.validate(value)
            if(error) errors.push(error)
        })

        return errors.length === 0 ? null : errors
    }
}