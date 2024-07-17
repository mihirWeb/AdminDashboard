import axios from "axios";
// import { useSelector } from "react-redux";

const BASE_URL = "http://localhost:3000/api/v2";
const storageData = localStorage.getItem("persist:root");
let TOKEN
if(storageData){
  const user = JSON.parse(localStorage.getItem("persist:root"))?.user
  if(user){
    TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)?.currentUserInfo?.accessToken;
  }
}


// console.log("Token is: ", JSON.parse(JSON.parse(localStorage.getItem("persist:root"))?.user)?.currentUserInfo?.accessToken)
// const TOKEN = "xyz";
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});