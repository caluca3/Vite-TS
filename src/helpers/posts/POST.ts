export const addPosts = async (newPost: { title: string; content: string }) => {
  const res = await fetch("http://localhost:3001/api/posts/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: newPost.title,
      content: newPost.content,
    }),
  });
  const data = await res.json();
  const post = data.post;
  console.log(post);
  return post;
};
