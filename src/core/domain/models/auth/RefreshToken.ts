import { Model } from "@models/model";
import { DTO } from "@typing/http";

class RefreshToken extends Model {
  private _id?: string;
  private _expiresIn: number;
  private _accountId: string;

  constructor() {
    super();
    this._expiresIn = this._accountId = undefined;
  }

  static fromJSON(json: DTO): RefreshToken {
    const refreshToken = new RefreshToken();
    refreshToken._id = String(json["id"]);
    refreshToken._expiresIn = Number(json["expiresIn"]);
    refreshToken._accountId = String(json["account_id"]);
    return refreshToken;
  }

  toJSON(): DTO {
    const dto = {} as DTO;
    dto["id"] = this._id;
    dto["expiresIn"] = this._expiresIn;
    dto["accountId"] = this._accountId;
    return dto;
  }

  get id() {
    return this._id;
  }

  get expiresIn() {
    return this._expiresIn;
  }

  get accountId() {
    return this._accountId;
  }
}

export { RefreshToken };
