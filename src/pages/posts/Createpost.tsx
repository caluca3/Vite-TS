import React from "react";
import { ActionFunctionArgs, json, useActionData } from "react-router";
import { addPosts } from "../../helpers/posts/POST";
import { Form } from "react-router-dom";

export const action = async ({ params, request }: ActionFunctionArgs) => {
  let formData = await request.formData();

  const title = formData.get("Title") as string;
  const content = formData.get("Contenido") as string;
  const newPost = await addPosts({ title, content });
  return json(newPost);
};

const AggPost = () => {
  const data = useActionData();

  React.useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Form method="post">
      <input type="text" name="Title" placeholder="Titulo" />
      <input type="text" name="Contenido" placeholder="Contenido" />
      <button type="submit">Save</button>
    </Form>
  );
};

export default AggPost;
