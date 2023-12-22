// api.js
import axiosSecure from "./axiosSecure";

export const getSingleTask = async id => {
  try {
    const { data } = await axiosSecure.get(`/task/${id}`);
    return data;
  } catch (error) {
    console.error('Error in getSingleTask:', error);
    throw error;
  }
};


export const updateTaskInfo = async (id, task) => {
    const { data } = await axiosSecure.put(`/task/${id}`, task);
    return data;
  }
