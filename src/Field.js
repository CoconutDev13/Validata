export class FieldBuilder {
    name
    minLength
    maxLength
    required

    setName(name) {
        this.name = name
        return this;
    }

    setMinLength(value) {
        this.minLength = value
        return this;
    }

    setMaxLength(value) {
        this.maxLength = value
        return this
    }

    setRequired(value) {
        this.required = value
        return this
    } 

    validate(data) {
        if(this.required && this.isEmpty(data)) 
            return { error: "Field is required!", name: this.name }

        if(this.required == false && this.isEmpty(data)) return null;

        let error = this.validateLength(data)
        return error
    }

    validateLength(data) {
        const length = data?.toString()?.length || 0;
    
        if (length < this.minLength) {
          return { error: `Field '${this.name}' must be at least ${this.minLength} characters long.`, name: this.name };
        }
    
        if (length > this.maxLength) {
          return { error: `Field '${this.name}' must be no more than ${this.maxLength} characters long.`, name: this.name };
        }
    
        return null;
    }

    isEmpty(data) {
        return data === null || data === undefined || data.toString().trim() === '';
    }
}