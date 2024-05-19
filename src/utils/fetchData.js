//import fetchAccessToken from './fetchAccessToken';
import axios from 'axios';

export default async function fetchData(url) {
  //const clientId = import.meta.env.VITE_API_CLIENT_ID;
  //const clientSecret = import.meta.env.VITE_API_CLIENT_SECRET;
  //const accessToken = await fetchAccessToken(clientId, clientSecret);
  //const accessToken = localStorage.getItem('token');

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      redirect: 'follow',
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
