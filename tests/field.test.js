import assert from 'assert'
import { FieldBuilder } from '../src/Field.js'

describe('Field Class', () => {
  describe('Required Error', () => {
    it('should return an error for required field with missing data', () => {
      const field = new FieldBuilder()
        .setName("test")
        .setRequired(true);
   
      const error = field.validate(undefined);
      assert.equal(error.error, "Field is required!");
      assert.equal(error.name, "test");
    });
  });
});

describe('Field Class', () => {
  describe('Required Validated', () => {
    it('should return null for required field when passing data', () => {
      const field = new FieldBuilder()
        .setName("test")
        .setRequired(true);
   
      const error = field.validate("Random shit");
      assert.equal(error, null)
    });
  });
});

describe('Field Class', () => {
  describe('Maximum length Validated', () => {
    it('should return null passing a string literal that has less characters than maximum length', () => {
      const field = new FieldBuilder()
        .setName("test")
        .setMaxLength(20);

      const error = field.validate("Random shit");
      assert.equal(error, null)
    });
  });
});

describe('Field Class', () => {
  describe('Maximum length Error', () => {
    it('should return error passing a string literal that has greater length than maximum length', () => {
      const field = new FieldBuilder()
        .setName("test")
        .setMaxLength(1);

      const error = field.validate("abc");
      assert.notStrictEqual(error, null)
    });
  });
});

describe('Field Class', () => {
  describe('Minimum length Validated', () => {
    it('should return null passing a string literal that has greater length than minimum length', () => {
      const field = new FieldBuilder()
        .setName("test")
        .setMinLength(5);

      const error = field.validate("Random shit");
      assert.equal(error, null)
    });
  });
});

describe('Field Class', () => {
  describe('Minimum length Error', () => {
    it('should return error passing word that has less characters than minimum length', () => {
      const field = new FieldBuilder()
        .setName("test")
        .setMinLength(5);

      const error = field.validate("abc");
      assert.notStrictEqual(error, null)
    });
  });
});