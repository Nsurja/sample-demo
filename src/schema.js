import Ajv from "ajv";
import { JSONSchemaBridge } from "uniforms-bridge-json-schema";
import { LongTextField } from "uniforms-bootstrap4";

const ajv = new Ajv({ allErrors: true, useDefaults: true });

const schema = {
  title: "Lead Form",
  type: "object",
  properties: {
    name: { type: "string" },
    email: { type: "string" },
    phone: {
      type: "integer",
      minimum: 0,
      maximum: 100,
    },
    developer: {
      type: "string",
      options: [
        {
          label: "Front End",
          value: "frontend",
        },
        {
          label: "Back End",
          value: "backend",
        },
      ],
    },
    message: {
      type: "string",
      uniforms: {
        component: LongTextField,
      },
    },
  },
  required: ["name", "email", "message"],
};

function createValidator(schema) {
  const validator = ajv.compile(schema);

  return (model) => {
    validator(model);

    if (validator.errors && validator.errors.length) {
      throw { details: validator.errors };
    }
  };
}

const schemaValidator = createValidator(schema);

const bridge = new JSONSchemaBridge(schema, schemaValidator);

export default bridge;
