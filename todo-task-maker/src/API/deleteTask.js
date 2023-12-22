import axiosSecure from "./axiosSecure";

export const deleteSingleTask = async (id) => {
    try {
        const { data } = await axiosSecure.delete(`/task/${id}`);
        return data;
    } catch (error) {
        console.error('Error in deleteSingleTask:', error);
        throw error;
    }
};
