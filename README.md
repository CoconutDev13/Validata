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