import { loginFailure, loginStart, loginSuccess } from "./userSlice";
import { userRequest, publicRequest } from "../utils/AdminAuth";
import {
    getProductFailure,
    getProductStart,
    getProductSuccess,
    deleteProductFailure,
    deleteProductStart,
    deleteProductSuccess,
    updateProductFailure,
    updateProductStart,
    updateProductSuccess,
    addProductFailure,
    addProductStart,
    addProductSuccess,
  } from "./productSlice.js"
import { deleteUserFailure, deleteUserStart, deleteUserSuccess, updateUserFailure, usersFetching, usersFetchingFailure, usersFetchingSuccess,
  updateUserStart, updateUserSuccess,
  createUserStart,
  createUserSuccess,
  createUserFailure
 } from "./userAccessSlice.js";


export const loginCall = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post('/auth/login', user);
        console.log("res data== ", res.data.data);
        console.log(res);   
        dispatch(loginSuccess(res.data.data));
    } catch (error) {
        dispatch(loginFailure());
    }
}

export const getProducts = async (dispatch) => {
    dispatch(getProductStart());
    try {
      const res = await publicRequest.get("/products/");
      dispatch(getProductSuccess(res.data));
    } catch (err) {
      dispatch(getProductFailure());
    }
  };
  
  export const deleteProduct = async (id, dispatch) => {
    dispatch(deleteProductStart());
    try {
      await userRequest.delete(`/products/${id}`);
      dispatch(deleteProductSuccess(id));
    } catch (err) {
      dispatch(deleteProductFailure());
    }
  };
  
  export const updateProduct = async (id, product, dispatch) => {
    dispatch(updateProductStart());
    try {
      const res = await userRequest.put(`/products/${id}`)
      console.log(res.data);
      dispatch(updateProductSuccess({ id, product }));
    } catch (err) {
      dispatch(updateProductFailure());
    }
  };
  export const addProduct = async (product, dispatch) => {
    dispatch(addProductStart());
    try {
      const res = await userRequest.post(`/products`, product);
      dispatch(addProductSuccess(res.data));
    } catch (err) {
      dispatch(addProductFailure());
    }
  };



  // CRUD calls on users-

  export const getAllUsers = async(dispatch) => {
    dispatch(usersFetching());
    try {
      const res = await userRequest.get('/user/all-user');
      console.log(res.data);
      dispatch(usersFetchingSuccess(res.data));
    } catch (error) {
      dispatch(usersFetchingFailure());
      console.log(error);
    }
  }

  export const deleteUser = async (dispatch, id) => {
    dispatch(deleteUserStart());
    try {
      const res = await userRequest.delete(`/user/${id}`);
      console.log(res);
      dispatch(deleteUserSuccess(id));

    } catch (error) {
      dispatch(deleteUserFailure());
      console.log(error);
    }
  }

  export const updateUser = async (dispatch, id, newData) => {
    dispatch(updateUserStart());
    try {
      const res = await userRequest.put(`/user/${id}`, newData);
      console.log(res.data);
      dispatch(updateUserSuccess(res.data));
    } catch (error) {
      dispatch(updateUserFailure)      
    }
  }

  export const createUser = async (dispatch, details) =>{
    dispatch(createUserStart())
    try {
      const res = await userRequest.post('/auth/register', details);
      dispatch(createUserSuccess(res.data));
    } catch (error) {
      console.log(error);
      dispatch(createUserFailure());
      console.error(error);
    }
  }