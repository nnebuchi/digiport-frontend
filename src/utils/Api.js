import axios from "axios" 

const api =axios.create({
    baseURL: "http://192.168.1.101:4006/",
    responseType: 'json',
    // withCredentials:true
})
export const userLogin = async (email, password) => {
    return await api
      .post("userLogin", email, password, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        return res?.data;
      })
      .catch((err) => {
        return err.response?.data;
      });
  };
  
  export const userRegistration = async (email, password) => {
    return await api
      .post("userLogin", email, password, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        return res?.data;
      })
      .catch((err) => {
        return err.response?.data;
      });
  };