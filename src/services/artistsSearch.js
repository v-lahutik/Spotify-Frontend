import { useEffect, useState } from 'react';

export function useArtistSearch(query) {
  const [searchedArtists, setSearchedAtrists] = useState([]);
  const myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${localStorage.getItem('token')}`);

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };
  // type is a string that can be one of 'artists', 'tracks', or 'playlists'
  useEffect(() => {
    fetch(`https://api.spotify.com/v1/search?q=${query}&type=artist`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setSearchedAtrists(result);
      })
      .catch((error) => console.error(error));
  }, [query]);

  return searchedArtists;
}
