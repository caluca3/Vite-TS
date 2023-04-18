import Posts, { loader as loaderPosts } from "../pages/posts";
import AggPost, { action as actionAddPost } from "../pages/posts/Createpost";
import { Deletepost } from "../pages/posts/Deletepost";
import { Putpost } from "../pages/posts/Putpost";

export const routerPost = {
  path: "posts",
  children: [
    { path: ":userId", element: <Posts />, loader: loaderPosts },
    { path: "addpost", element: <AggPost />, action: actionAddPost },
    { path: "putpost", element: <Putpost />, action: actionAddPost },
    { path: "delete", element: <Deletepost />, action: actionAddPost },
  ],
};
