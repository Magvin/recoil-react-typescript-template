import { setRecoil } from "recoil-nexus";
import { PostsAtom } from "../atoms/posts/posts";

const getPlaceholderPostData = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  ).then((response) => response.json());
  setRecoil(PostsAtom, response);
};

export default getPlaceholderPostData;
