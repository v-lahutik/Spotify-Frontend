// https://api.spotify.com/v1/search?q=slovenska&type=
// https://api.spotify.com/v1/search?q=slovenska&type=album

import { useEffect, useState } from 'react';

export default function useSearch(query) {
  const [searchedItems, setSearchedItems] = useState([]);
  const myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${localStorage.getItem('token')}`);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };
  // type is a string that can be one of 'artists', 'tracks', or 'playlists'
  useEffect(() => {
    fetch(`https://api.spotify.com/v1/search?q=${query}&type=artist,album,playlist,track`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setSearchedItems(result);
      })
      .catch((error) => console.error(error));
  }, [query]);

  return searchedItems;
}
