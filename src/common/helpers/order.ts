import { IPost } from "../models/IPost";

export function orderUser(a: IPost, b: IPost) {
  if (a?.id > b?.id) {
    return 1;
  }
  if (a?.id < b?.id) {
    return -1;
  }
  return 0;
}
