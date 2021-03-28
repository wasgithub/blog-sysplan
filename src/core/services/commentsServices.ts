import api from "../../services/api";

interface commentsResponse {
  comments: [];
}

export async function fetchComments(): Promise<commentsResponse> {
  return await api.get(`/comments`);
}
