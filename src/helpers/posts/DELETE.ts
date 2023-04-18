export const deletePosts = async (newPost: { id: number }) => {
  const res = await fetch("http://localhost:3001/api/posts/delete/1", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: newPost.id,
    }),
  });
  const data = await res.json();
  const post = data.post;
  console.log(post);
  return post;
};
