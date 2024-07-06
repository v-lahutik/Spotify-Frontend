import { useEffect, useState } from 'react';
import fetchData from '../utils/fetchData';

export default function useCategoriesPlaylists() {
  const [categoriesPlaylists, setCategoriesPlaylists] = useState(null);

  useEffect(() => {
    fetchData(`https://api.spotify.com/v1/browse/categories`).then((data) => {
      setCategoriesPlaylists(data);
      console.log('categories:', data);
    });
  }, []);

  return categoriesPlaylists;
}
