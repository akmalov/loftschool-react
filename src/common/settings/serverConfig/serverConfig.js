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
  const {data} = await server.post('/card', cardData);
  return data;
};

export const fetchProfile = async token => {
  const {data} = await server.get(`/card?token=${token}`);
  return data;
};

export const fetchAddresses = async () => {
  const {data} = await server.get(`/addressList`);
  return data;
};

export const fetchRoutes = async (address1, address2) => {
  const {data} = await server.get(`/route?address1=${address1}&address2=${address2}`);
  return data;
};