import { sign } from "jsonwebtoken";

export const generateTokenProvider = (accountID: string) => {
  const token = sign({}, process.env.PRIVATE_KEY_TOKEN, {
    subject: accountID,
    expiresIn: "300s",
  });

  return token;
};
