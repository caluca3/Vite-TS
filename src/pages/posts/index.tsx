import React from "react";
import { getPosts } from "../../helpers/posts/get-posts";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  const posts = await getPosts(1);
  return { posts };
}

const Posts = () => {
  const { posts } = useLoaderData() as { posts: object[] };
  return <div>posts</div>;
};

export default Posts;
