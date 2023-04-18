export const getPosts = async (userId: number) => {
  const res = await fetch("http://localhost:3001/api/posts/1");
  const data = await res.json();
  const posts = data.posts;
  return posts;
};
