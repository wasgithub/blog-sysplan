import { getRandomInteger } from "./getRandomInteger";

export function getRandomImageUser() {
  let randomNumber = getRandomInteger(1, 100);

  return `https://picsum.photos/id/${randomNumber}/200/300`;
}
