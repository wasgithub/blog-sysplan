import { Props } from "../../../components/stack-avatars";
import { getRandomImageUser } from "../../../../common/helpers/getRandomImageUser";

export const avatars: Props = {
  avatars: [
    {
      src: getRandomImageUser(),
      alt: "Joao",
    },
    {
      src: getRandomImageUser(),
      alt: "Adriano",
    },
    {
      src: getRandomImageUser(),
      alt: "Welder",
    },
  ],
};
