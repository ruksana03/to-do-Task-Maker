import axiosSecure from "./axiosSecure";


// Send user info to database 
export const storeUserInfo = async (user) => {
  if (!user || !user.email) {
    return null;
  }
  const currentUser = {
    name:user.displayName,
    email: user.email,
    image:user.photoURL
  };

  const { data } = await axiosSecure.put(`/users/${user.email}`, currentUser);
  return data;
};




