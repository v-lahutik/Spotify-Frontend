import { useEffect, useState } from 'react';

export default function useUserTopItems() {
  const [topItems, setTopItems] = useState({});
  const myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${localStorage.getItem('token')}`);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };
  // type is a string that can be one of 'artists', 'tracks', or 'playlists'
  useEffect(() => {
    fetch(`https://api.spotify.com/v1/me/top/${type}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setTopItems(result);
      })
      .catch((error) => console.error(error));
  }, [type]);

  return topItems;
}
