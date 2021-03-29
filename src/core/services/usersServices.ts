import api from "../../services/api";

interface usersResponse {
  users: [];
}

export async function fetchUsers(): Promise<usersResponse> {
  return await api.get(`/users`);
}

export async function getUserById(id: number): Promise<usersResponse> {
  return await api.get(`/users/${id}`);
}
