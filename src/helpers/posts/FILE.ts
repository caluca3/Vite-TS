export const FileAdd = async (formData: FormData) => {
  const res = await fetch("http://localhost:3001/api/posts/upload", {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: JSON.stringify(formData),
  });
  const data = await res.json();
  const post = data.post;
  console.log(post);
  return post;
};
