import { Post } from "./post.model";

export interface User {
  id: string;
  email: string;
  name: string;
  posts: Post[];
}
