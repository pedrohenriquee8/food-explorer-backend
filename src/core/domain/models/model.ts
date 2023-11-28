import { DTO } from "@typing/index";

abstract class Model {
  static fromJSON(_: DTO): Model {
    throw new Error("This method is not implemented yet.");
  }
}

export { Model };
