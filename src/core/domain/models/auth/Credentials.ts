import { Model } from "@models/model";
import { DTO } from "@typing/http";

class Credentials extends Model {
  private _email: string;
  private _password: string;

  constructor() {
    super();
    this._email = this._password = undefined;
  }

  static fromJSON(json: DTO): Credentials {
    const credentials = new Credentials();
    credentials._email = String(json["email"]);
    credentials._password = String(json["password"]);
    return credentials;
  }

  get email() {
    return this._email;
  }

  get password() {
    return this._password;
  }
}

export { Credentials };
