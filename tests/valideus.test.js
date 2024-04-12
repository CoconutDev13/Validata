import assert from "assert";
import { Valideus } from "../src/index.js";
import { FieldBuilder } from "../src/Field.js";

describe("Valideus Class", () => {
  describe("Testing Valideus with one required field", () => {
    it("should return an error list for required field with missing data", () => {
      const validation = new Valideus();

      validation.addField(new FieldBuilder().setName("test").setRequired(true));

      const error = validation.validate({});
      assert.notStrictEqual(error.length, 0);
    });
  });
});

describe("Valideus Class", () => {
  describe("Testing Valideus with three failed fields", () => {
    it("should return error array with length of 3", () => {
      const validation = new Valideus();

      validation.addField(new FieldBuilder().setName("test").setRequired(true));
      validation.addField(new FieldBuilder().setName("test2").setRequired(true));
      validation.addField(new FieldBuilder().setName("test3").setRequired(true));

      const error = validation.validate({});
      assert.equal(error.length, 3);
    });
  });
});

describe("Valideus Class", () => {
  describe("Testing Valideus with three failed fields and one passed", () => {
    it("should return error array with length of 3", () => {
      const validation = new Valideus();

      validation.addField(new FieldBuilder().setName("test").setRequired(true));
      validation.addField(new FieldBuilder().setName("test2").setRequired(true));
      validation.addField(new FieldBuilder().setName("test3").setRequired(true));
      validation.addField(new FieldBuilder().setName("test4").setRequired(true));

      const error = validation.validate({
        test: "12345"
      });
      assert.equal(error.length, 3);
    });
  });
});

describe("Valideus Class", () => {
  describe("Passing 2 fields, one required and the other not required with minimum length that wont exist in data object", () => {
    it("should return no errors", () => {
      const validation = new Valideus();

      validation.addField(new FieldBuilder().setName("test").setRequired(true));
      validation.addField(new FieldBuilder().setName("test2").setRequired(false).setMinLength("10"));

      const error = validation.validate({
        test: "12345",
      });
      assert.equal(error, null);
    });
  });
});

describe("Valideus Class", () => {
  describe("Passing 2 fields, one required and the other not required with minimum length", () => {
    it("should return no errors", () => {
      const validation = new Valideus();

      validation.addField(new FieldBuilder().setName("test").setRequired(true));
      validation.addField(new FieldBuilder().setName("test2").setRequired(false).setMinLength("10"));

      const error = validation.validate({
        test: "12345",
        test2: "12345",
      });
      assert.notStrictEqual(error, null);
    });
  });
});

describe("Valideus Class", () => {
  describe("Testing Valideus with all required fields", () => {
    it("should pass the validation and return null", () => {
      const validation = new Valideus();

      validation.addField(new FieldBuilder().setName("test").setRequired(true));
      validation.addField(new FieldBuilder().setName("test2").setRequired(true));

      const error = validation.validate({
        test: "12345",
        test2: "12345"
      });
      assert.equal(error, null);
    });
  });
});
