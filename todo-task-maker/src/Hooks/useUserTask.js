// useUserTask.js
import { useQuery } from "@tanstack/react-query";
import axiosSecure from "../API/axiosSecure";

const useUserTask = (email) => {
  const { data: userTasks = [], isLoading: loading, refetch } = useQuery({
    queryKey: ['userTasks', email],
    queryFn: async () => {
      const res = await axiosSecure(`/tasks/${email}`);
      return res.data;
    },
  });

  return { userTasks, loading, refetch };
};

export default useUserTask;
