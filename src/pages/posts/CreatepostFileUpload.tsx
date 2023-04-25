import React from "react";
import { ActionFunctionArgs, json, useActionData } from "react-router";
import { addPosts } from "../../helpers/posts/POST";
import { Form } from "react-router-dom";
import { FileAdd } from "../../helpers/posts/FILE";

export const action = async ({ params, request }: ActionFunctionArgs) => {
  let formData = await request.formData();
  const newPost = await FileAdd(formData);
  return json(newPost);
};

const CreateFile = () => {
  const data = useActionData();

  React.useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Form method="post" encType="multipart/form-data">
      <input type="file" name="file" />
      <button type="submit">Save</button>
    </Form>
  );
};

export default CreateFile;
