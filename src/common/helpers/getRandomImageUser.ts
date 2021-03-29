import { getRandomInteger } from "./getRandomInteger";

export function getRandomImageUser() {
  let randomNumber = getRandomInteger(1, 100);

  return `https://randomuser.me/api/portraits/men/${randomNumber}.jpg`;
}
