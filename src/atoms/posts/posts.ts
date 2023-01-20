import { atom } from "recoil";
import { PostInterface } from "../../interface/Posts";

const key = "TemplatePosts";
export const PostsAtom = atom<PostInterface[] | null>({
  key: `${key}Atom`,
  default: null,
});
