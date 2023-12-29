import { StaticImageData } from "next/image";
import { Theme } from "root/shared/api/type";

import UserAvatar from "root/shared/assets/avatar.jpeg";

type AuthorizeOnLoadResponse = {
  theme: Theme;
  login: string;
  email: string;
  firstName: string;
  lastName: string;
  id: number;
  // TODO: remove StaticImageData
  avatarUrl: string | null | StaticImageData;
};

export const authorizeOnLoadReq = async () =>
  new Promise<AuthorizeOnLoadResponse>((res, rej) => {
    setTimeout(() => {
      res({
        id: 1,
        email: "user.email@mail.com",
        firstName: "Name",
        lastName: "LastName",
        login: "usr_lgn",
        theme: "SYSTEM",
        avatarUrl: Math.random() * 10 > 5 ? UserAvatar : null,
      });

      // rej(new Error("описание ошибки авторизации"));
    }, 1000);
  });
