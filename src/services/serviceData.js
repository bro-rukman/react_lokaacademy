import axios from "axios";
export const getAllDataProduct = async () => {
  try {
    const response = await axios.get(`http://localhost:3004/data`);
    if (response) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};
export const getDataProductById = async (id) => {
  const response = await axios.get(`http://localhost:3004/data/${id}`);
  if (response) {
    return response.data;
  }
};
export const postData = async (data) => {
  try {
    const response = await axios.post(`http://localhost:3004/posts`, data);
    if (response) {
      return "success";
    }
  } catch (error) {
    console.log(error);
  }
};
export const getAllPostData = async () => {
  try {
    const response = await axios.get(`http://localhost:3004/posts`);
    if (response) {
      console.log(response);
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};
export const getPostDataById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3004/posts/${id}`);
    if (response) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};
export const putPostData = async (id, data) => {
  try {
    const response = await axios.put(`http://localhost:3004/posts/${id}`, data);
    if (response) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};
export const deletePostData = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3004/posts/${id}`);
    if (response) {
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
};
