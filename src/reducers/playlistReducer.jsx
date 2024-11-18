import { createContext, useReducer, useEffect } from 'react';
import fetchData from '../utils/fetchData';

export const PlaylistsContext = createContext({});

export const playlistsReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'CATEGORY_PLAYLISTS':
      return { ...state, categories: payload.categories, playlists: payload.playlists };
      
    default:
      return state;
  }
};

export const PlaylistsProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(playlistsReducer, { categories: [], playlists: {} }); 
console.log("STATE FROM REDUCER", state)
useEffect(() => {
  const getData = async () => {
    try {
      // Fetch all category names
      const categoryData = await fetchData('https://api.spotify.com/v1/browse/categories');
      const categories = categoryData.categories.items;
      
      const playlists = {};
      console.log('🚀 ~ fetchData ~ categories:', categories);

      // Fetch playlists for each category using the category ID
      for (const category of categories) {
        const playlistData = await fetchData(`https://api.spotify.com/v1/browse/categories/${category.id}/playlists?offset=0&limit=7`);
        playlists[category.id] = playlistData.playlists.items;
      }
      console.log('🚀 ~ fetchData ~ playlists:', playlists);
      // Dispatch both categories and playlists to the reducer
      dispatch({ type: 'CATEGORY_PLAYLISTS', payload: { categories, playlists } });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  getData();
}, []);

  return (
    <PlaylistsContext.Provider value={{ state, dispatch }}>
      {children}
    </PlaylistsContext.Provider>
  );
};
