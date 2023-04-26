import axios from 'axios';
const BASE_URL = 'https://6441ae9133997d3ef90088cd.mockapi.io/api/v1/users';
export const fetchUsers = async (page = 1) => {
  try {
    const resp = await axios.get(`${BASE_URL}?page=${page}&limit=3`);
    return resp.data;
  } catch (error) {
    throw new Error(error.statusText);
  }
};

export const fetchAllUsers = async () => {
  try {
    const resp = await axios.get(`${BASE_URL}`);
    return resp.data;
  } catch (error) {
    throw new Error(error.statusText);
  }
};

export const followUser = async (id, obj) => {
  try {
    const resp = await axios.put(`${BASE_URL}/${id}`, obj);
    return resp.data;
  } catch (error) {
    throw new Error(error.statusText);
  }
};
