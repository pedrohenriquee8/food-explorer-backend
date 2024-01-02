import dayjs from "dayjs";

export const expiresIn = dayjs().add(2, "days").unix();
