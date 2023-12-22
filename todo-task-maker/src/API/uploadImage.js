import axios from "axios";

export const uploadImage = async image => {
  try {
      const formData = new FormData()
      formData.append('image', image)
      const response = await axios.post(
          `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
          formData
      )
      console.log(response.data);
      return response.data;
  } catch (error) {
      console.error("Error uploading image:", error);
      throw error;
  }
}