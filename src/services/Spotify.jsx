export const authEndpoint = 'https://accounts.spotify.com/authorize';
const redirectUri = 'http://localhost:5173/';
const clientId = import.meta.env.VITE_CLIENT_ID;
console.log('🚀 ~ clientId:', clientId);

const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  '%20',
)}&response_type=token&show_dialog=true`;
