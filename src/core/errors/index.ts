export abstract class FoodExplorerError extends Error {
  statusCode: number;
  name: string;

  constructor(name: string, statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
    this.name = name;
  }

  toJSON() {
    return {
      statusCode: this.statusCode,
      name: this.name,
      message: this.message,
    };
  }
}
