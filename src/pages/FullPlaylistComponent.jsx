import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PlaylistsContext } from '../reducers/playlistReducer';
import fetchData from '../utils/fetchData';
import PlaylistCard from "../components/Cards/Cards";
import { FullPlaylistContainer, LinkContainer, RowTitle } from "../components/Cards/CardsStyles";

const FullPlaylistComponent = () => {
  const { categoryId } = useParams(); 
  const { state } = useContext(PlaylistsContext); // Access context
  const [playlists, setPlaylists] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaylists = async () => {
      console.log('Fetching playlists for category ID:', categoryId); // Log categoryId
      try {
        const url = `https://api.spotify.com/v1/browse/categories/${categoryId}/playlists?offset=0&limit=20`;
        console.log('Request URL:', url); // Log request URL
        const response = await fetchData(url);

        console.log('API Response:', response); // Log API response
        setPlaylists(response.playlists.items);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching playlists:', error);
      }
    };

    if (categoryId) {
      fetchPlaylists();
    } else {
      console.warn('No category ID provided');
    }
  }, [categoryId]);

  // Find the category name from context
  const category = state.categories.find(cat => cat.id === categoryId);
  const categoryName = category ? category.name : categoryId;

  if (error) return <div>Error: {error}</div>;
  if (playlists.length === 0) return <div>Loading...</div>;

  return (
    <>
      <LinkContainer>
        <RowTitle>{categoryName}</RowTitle>
        { console.log('Category Name:', categoryName) }
      </LinkContainer>

      <FullPlaylistContainer>
        {playlists?.map((playlist, index) => (
          <PlaylistCard
            key={index}
            playlistCover={playlist.images[0].url}
            playlistName={playlist.name}
            artistName={playlist.description}
          />
        ))}
      </FullPlaylistContainer>
    </>
  );
};

export default FullPlaylistComponent;
