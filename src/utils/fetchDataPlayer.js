import axios from 'axios';

export default async function fetchData2(url, method = 'GET', data = null) {
  try {
    const response = await axios({
      url,
      method,
      data, // This will be null for GET requests
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
