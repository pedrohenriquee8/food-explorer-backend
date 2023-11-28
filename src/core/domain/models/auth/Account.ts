import { Model } from "@models/model";
import { AccountRoleType, DTO } from "@typing/index";

class Account extends Model {
  private _id?: string;
  private _name: string;
  private _role: AccountRoleType;

  constructor() {
    super();
    this._name = this._role = undefined;
  }

  static fromJSON(json: DTO): Account {
    const account = new Account();
    account._id = String(json["id"]);
    account._name = String(json["name"]);
    account._role = Number(json["role"]) as AccountRoleType;
    return account;
  }

  toJSON(): DTO {
    const dto = {} as DTO;
    dto["id"] = this._id;
    dto["name"] = this._name;
    dto["role"] = this._role;
    return dto;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get role() {
    return this._role;
  }
}

export { Account };
