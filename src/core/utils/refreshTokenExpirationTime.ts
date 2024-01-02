import dayjs from "dayjs";

export const refreshTokenExpirationTime = (expiresIn: number) => {
  return dayjs().isAfter(dayjs.unix(expiresIn));
};
