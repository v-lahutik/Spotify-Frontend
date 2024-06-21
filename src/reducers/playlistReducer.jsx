import { createContext, useReducer, useEffect } from 'react';
import fetchData from '../utils/fetchData';

export const PlaylistsContext = createContext({});

export const playlistsReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'CATEGORY_PLAYLISTS': {
      console.log("payload", payload);
      return { ...state, categories: payload }; // Ensure categories are correctly set in the state
    }
    default:
      return state;
  }
};

export const PlaylistsProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(playlistsReducer, { categories: [] }); // Define initial state with categories
console.log("STATE FROM REDUCER", state)
  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchData(`https://api.spotify.com/v1/browse/categories`);
        if (data && data.categories) {
          dispatch({ type: 'CATEGORY_PLAYLISTS', payload: data.categories.items });
          console.log('🚀 ~ fetchData ~ category:', data.categories);
        } else {
          console.error('No categories found:', data);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    getCategories();
  }, []);

  return (
    <PlaylistsContext.Provider value={{ state, dispatch }}>
      {children}
    </PlaylistsContext.Provider>
  );
};
