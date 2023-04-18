export const editPosts = async (newPost: {
  id: number;
  title: string;
  content: string;
}) => {
  const res = await fetch("http://localhost:3001/api/posts/edit/1", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: newPost.id,
      title: newPost.title,
      content: newPost.content,
    }),
  });
  const data = await res.json();
  const post = data.post;
  console.log(post);
  return post;
};
