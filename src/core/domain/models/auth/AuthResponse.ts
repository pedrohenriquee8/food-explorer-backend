import { Model } from "@models/model";
import { RefreshToken } from "@models/auth/RefreshToken";
import { DTO } from "@typing/http";

class AuthResponse extends Model {
  private _token: string;
  private _refreshToken: RefreshToken;

  constructor() {
    super();
    this._token = this._refreshToken = undefined;
  }

  static fromJSON(json: DTO): AuthResponse {
    const authResponse = new AuthResponse();
    authResponse._token = String(json["token"]);
    authResponse._refreshToken = RefreshToken.fromJSON(
      json["refreshToken"] as DTO
    );
    return authResponse;
  }

  toJSON(): DTO {
    const dto = {} as DTO;
    dto["token"] = this._token;
    dto["refreshToken"] = this._refreshToken;
    return dto;
  }

  get token() {
    return this._token;
  }

  get refreshToken() {
    return this._refreshToken;
  }
}

export { AuthResponse };
