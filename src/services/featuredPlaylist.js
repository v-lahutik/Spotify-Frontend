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

// //example for using api from categories api
// function useNewPlaylists(categoryId) {
//   const [newPlaylists, setNewPlaylists] = useState(null)
//   const [categories, setCAtegories] = useState(null)

//   useEffect(() => {
//     if (!categoryId) return;
//     fetchData(`https://api.spotify.com/v1/browse/categories/${categoryId}/playlists`)
//       .then((data) => {
//         console.log("🚀 🚀 🚀 new playlist", data);
//         setNewPlaylists(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching new playlists:", error); 
//       });
//   }, [categoryId]);

//   return newPlaylists;
// }

// export { useNewPlaylists };


function getPlaylists() {
  const [categories, setCategories] = useState([]);
  const [newPlaylists, setNewPlaylists] = useState({});

  useEffect(() => {
    const getData = async () => {
      // Fetch all categories
      const categoryData = await fetchData('https://api.spotify.com/v1/browse/categories');
      setCategories(categoryData.categories.items);
      console.log('🚀 ~ fetchData ~ categories:', categoryData.categories.items[1].id);

      // Fetch playlists for each category using the category ID
      categoryData.categories.items.forEach(async (category) => {
        const playlistData = await fetchData(`https://api.spotify.com/v1/browse/categories/${category.id}/playlists`);
        setNewPlaylists(prevState => ({
          ...prevState,
          [category.id]: playlistData.playlists.items
        }));
        console.log('🚀 ~ fetchData ~ playlists:', playlistData.playlists.items);
      });
    };

    getData();
  }, [])
}

export {getPlaylists};