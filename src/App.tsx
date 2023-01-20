import { useCallback, useEffect } from "react";
import { useRecoilValue } from "recoil";
import "./App.css";
import { PostsAtom } from "./atoms/posts/posts";
import getPlaceholderPostData from "./services/getPlaceholderPostData";
import styled from "styled-components";

function App() {
  const posts = useRecoilValue(PostsAtom);

  const fetchPosts = useCallback(async () => {
    await getPlaceholderPostData();
  }, []);

  useEffect(() => {
    if (posts && posts.length) return;
    fetchPosts();
  }, [posts, fetchPosts]);

  if (!posts) {
    return <div> Fetching posts...</div>;
  }
  return (
    <div className="App">
      <Container>
        {posts.map((post) => (
          <div key={post.id} data-testid={`post-${post.id}`}>
            <h5>{post.title}</h5>
            <p>{post.body}</p>
          </div>
        ))}
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 90%;
  margin: 0 auto;
  margin-top: 16px;
  & > div {
    margin: 4px;
    border-radius: 4px;
    background: lightblue;
    h5 {
      text-transform: capitalize;
    }
  }
`;
