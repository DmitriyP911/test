import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer${token}`;
};
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};


export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {

    try {
      console.log('reg');
      console.log(credentials);
     
      const {data} = await axios.post('/users/signup', credentials);
      console.log(data);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);
export const logIn = createAsyncThunk(
  'auth/logIn',
  async (credentials, thunkApi) => {
    console.log("logIn");
  try {
    const res = await axios.post('/users/login', credentials);
    console.log(res);
    return res.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.massage)
  }
  }
);

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkApi) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkApi.rejectWithValue(error.massage);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refreshing',
  async (credentials, thunkApi) => {}
);
