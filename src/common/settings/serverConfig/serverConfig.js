import axios from 'axios';

const server = axios.create({
  baseURL: 'https://loft-taxi.glitch.me',
  headers: {"Content-Type": "application/json"}
});

export const requestLogin = async authData => {
  const {data} = await server.post('/auth', authData);
  return data;
};

export const requestRegister = async registerData => {
  const {data} = await server.post('/register', registerData);
  return data;
};