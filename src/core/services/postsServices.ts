import api from "../../services/api";

interface postsResponse {
  posts: [];
}

export async function fetchPosts(): Promise<postsResponse> {
  return await api.get(`/posts`);
}
