import axios from 'axios';

export default async function fetchAccessToken(clientId, clientSecret) {
  const params = new URLSearchParams();
  params.append('client_id', clientId);
  params.append('grant_type', 'client_credentials');
  params.append('client_secret', clientSecret);
  params.append('redirect_uri', 'http://localhost:5173/callback');

  try {
    const response = await axios.post('https://accounts.spotify.com/api/token', params, {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    });

    const { access_token } = response.data;
    return access_token;
  } catch (error) {
    console.error('Error fetching access token:', error);
    throw error;
  }
}
