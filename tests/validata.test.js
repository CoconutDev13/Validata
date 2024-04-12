import assert from "assert";
import { Validata } from "../src/index.js";
import { FieldBuilder } from "../src/Field.js";

describe("Validata Class", () => {
  describe("Testing Validata with one required field", () => {
    it("should return an error list for required field with missing data", () => {
      const validata = new Validata();

      validata.addField(new FieldBuilder().setName("test").setRequired(true));

      const error = validata.validate({});
      assert.notStrictEqual(error.length, 0);
    });
  });
});

describe("Validata Class", () => {
  describe("Testing Validata with three failed fields", () => {
    it("should return error array with length of 3", () => {
      const validata = new Validata();

      validata.addField(new FieldBuilder().setName("test").setRequired(true));
      validata.addField(new FieldBuilder().setName("test2").setRequired(true));
      validata.addField(new FieldBuilder().setName("test3").setRequired(true));

      const error = validata.validate({});
      assert.equal(error.length, 3);
    });
  });
});

describe("Validata Class", () => {
  describe("Testing Validata with three failed fields and one passed", () => {
    it("should return error array with length of 3", () => {
      const validata = new Validata();

      validata.addField(new FieldBuilder().setName("test").setRequired(true));
      validata.addField(new FieldBuilder().setName("test2").setRequired(true));
      validata.addField(new FieldBuilder().setName("test3").setRequired(true));
      validata.addField(new FieldBuilder().setName("test4").setRequired(true));

      const error = validata.validate({
        test: "12345"
      });
      assert.equal(error.length, 3);
    });
  });
});

describe("Validata Class", () => {
  describe("Passing 2 fields, one required and the other not required with minimum length that wont exist in data object", () => {
    it("should return no errors", () => {
      const validata = new Validata();

      validata.addField(new FieldBuilder().setName("test").setRequired(true));
      validata.addField(new FieldBuilder().setName("test2").setRequired(false).setMinLength("10"));

      const error = validata.validate({
        test: "12345",
      });
      assert.equal(error, null);
    });
  });
});

describe("Validata Class", () => {
  describe("Passing 2 fields, one required and the other not required with minimum length", () => {
    it("should return no errors", () => {
      const validata = new Validata();

      validata.addField(new FieldBuilder().setName("test").setRequired(true));
      validata.addField(new FieldBuilder().setName("test2").setRequired(false).setMinLength("10"));

      const error = validata.validate({
        test: "12345",
        test2: "12345",
      });
      assert.notStrictEqual(error, null);
    });
  });
});

describe("Validata Class", () => {
  describe("Testing Validata with all required fields", () => {
    it("should pass the validation and return null", () => {
      const validata = new Validata();

      validata.addField(new FieldBuilder().setName("test").setRequired(true));
      validata.addField(new FieldBuilder().setName("test2").setRequired(true));

      const error = validata.validate({
        test: "12345",
        test2: "12345"
      });
      assert.equal(error, null);
    });
  });
});
