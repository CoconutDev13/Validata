# Valideus: Data Validation for JavaScript Projects

Valideus is a lightweight library that simplifies data validation in your JavaScript applications. It provides a user-friendly API for defining validation rules and ensuring your data adheres to those rules.

## Installation

Install Valideus using npm:

```bash
npm install valideus
```

## Usage

1. Import the Package:
```js
import Valideus from 'valideus'; // Assuming ES Modules
```

2. Create a Validator Instance:
```js
const validation = new Valideus() 
```

3. Define Validation Rules:
```js
validation.addField(new FieldBuilder().setName("required_field").setRequired(true)) //Required field
validation.addField(new FieldBuilder().setName("minlim").setMinLength(5)) //Minimum length limit
validation.addField(new FieldBuilder().setName("maxlim").setMaxLength(5)) //Maximum length limit

//Or combined
validation.addField(
    new FieldBuilder()
        .setName("full_power")
        .setMaxLength(100))
        .setMinimuLength(10) 
        .setRequired(true)
```

4. Validate Your Data:
```js
validation.validate({
    required_field: "Required field',
    minlim: '123', // <-- here is an error because min length is 5 
    //maxlim: empt    <-- no error here because its not required AND NOT INCLUDED.
    full_power: '' // <-- here is an error as well because its required but its empty 
})
```

5. Use the validation output
```js
if(errors) return // Simple as that because if there are no errors it will return null
```
or you can print them:
```js
errors.forEach(error => console.error(error.name.concat(":", error.error)))
```