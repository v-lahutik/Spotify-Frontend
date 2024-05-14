import './App.css';
//import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Outlet } from 'react-router-dom';

import Login from './pages/Login/Login';
import { useEffect, useState } from 'react';
import { getTokenFromUrl } from './services/authSpotify';
import useFeaturedPlaylists from './services/featuredPlaylist';
import Layout from './components/Layout';

function App() {
  const [token, setToken] = useState();
  const tokenLocalStorage = localStorage.getItem('token');

  const featuredPlaylists = useFeaturedPlaylists(10);
  console.log('🚀 ~ App ~ featuredPlaylists:', featuredPlaylists);

  useEffect(() => {
    const hash = getTokenFromUrl();

    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      //spotify.setAccessToken(_token);
      localStorage.setItem('token', _token);
      console.log('token', token);
    }

    console.log('token', token);
  }, []);
  return <div className="app">{tokenLocalStorage ? <Layout /> : <Login />}</div>;
  // return <RouterProvider router={router} />;
}

export default App;
