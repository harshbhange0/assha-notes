import axios from "axios";

export const authCheck = async () => {
  const baseUrl = import.meta.env.VITE_Base_Url;
  try {
    if (!baseUrl) {
      throw Error("No Sever Url Found");
    }
    const token = localStorage.getItem("Authorization");
    if (!token) {
      throw Error("No Auth Token Found Pleas Login/Register");
    }
    const res = await axios.get(`${baseUrl}auth-check`, {
      headers: {
        Authorization: token,
      },
    });
    return res.data.message;
  } catch (error) {
    throw Error("Some thing went wrong in authCheck");
  }
};
