import React from "react";
import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, registerSuccess, loginSuccess, logoutSuccess } from "../features/authSlice";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const BASE_URL = import.meta.env.VITE_BASE_URL


const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const register = async (userInfo) => {
    dispatch(fetchStart());
    console.log(userInfo,'registrUSEauth')
    try {
      const { data } = await axios.post(
        `${BASE_URL}users/`,
        userInfo
      );
      console.log("register",data);
      dispatch(registerSuccess(data))
      navigate("/")
    } catch (error) {
        dispatch(fetchFail())
    }
  };
  const login =async(userInfo)=>{
    console.log(userInfo,'useAuth')  
     try {
       const {data} =  await axios.post(
            `${BASE_URL}auth/login/`,
             userInfo
           );
          
           navigate("/stock")
           dispatch(loginSuccess(data))
     } catch (error) {
         
     }
   }
  const logout =async()=>{
   
     try {
        await axios.get(
             "https://17106.fullstack.clarusway.com/auth/logout/"
            
           );
           dispatch(logoutSuccess())
           navigate("/")
           
     } catch (error) {
         
     }
   }

  return { register ,login,logout};
};

export default useAuthCall;