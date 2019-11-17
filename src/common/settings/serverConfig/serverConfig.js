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

export const createProfile = async cardData => {
  const { data } = await server.post('/card', cardData);
  return data;
};

export const fetchProfile = async token => {
  const { data } = await server.get(`/card?token=${token}`);
  return data;
};