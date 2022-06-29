import axios from 'axios';

const url = 'http://localhost:8000';
export const signupAuth =async (data) => {
     try {
        return await axios.post(`${url}`, data)
        console.log("signup api called successfully")
     } catch (error) {
        console.log("error while calling signup", error)
     }
};

export const loginAuth =async (data) => {
    try {
      return await axios.post(`${url}/login`, data)
       console.log("login api called successfully")
    } catch (error) {
       console.log("error while calling signup", error)
    }
};