import { useEffect, useState } from 'react';
import fetchData from '../utils/fetchData';

export default function useFeaturedPlaylists(limit = 5) {
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    
    fetchData(`https://api.spotify.com/v1/browse/featured-playlists?limit=${limit}`).then((data) => {
      setPlaylists(data.playlists);
    });
  }, [limit]);

  return playlists;
}

//example for using api from categories api
function useNewPlaylists() {
  const [newPlaylists, setNewPlaylists] = useState(null);

  useEffect(() => {
    fetchData(`https://api.spotify.com/v1/browse/categories/0JQ5DAt0tbjZptfcdMSKl3`)
      .then((data) => {
        console.log("🚀 🚀 🚀 new playlist", data);
        setNewPlaylists(data); // Update state with fetched playlists
      })
      .catch((error) => {
        console.error("Error fetching new playlists:", error); // Log any errors
      });
  }, []);

  return newPlaylists;
}
export {useNewPlaylists};