import React from "react";
import { getPosts } from "../../helpers/posts/GET";
import { json, useLoaderData } from "react-router-dom";

type Post = {
  id: number;
  title: string;
  content: string;
};

export async function loader() {
  const posts = await getPosts(1);

  return json({ posts });
}

const Posts = () => {
  const { posts } = useLoaderData() as { posts: Post[] };

  React.useEffect(() => {
    console.log(posts);
  }, []);

  return (
    <ul>
      {posts &&
        posts.map((p) => (
          <li key={p.id}>
            <p>
              <b>{p.title}</b>
              {" " + p.content + " "}
            </p>
          </li>
        ))}
    </ul>
  );
};

export default Posts;
