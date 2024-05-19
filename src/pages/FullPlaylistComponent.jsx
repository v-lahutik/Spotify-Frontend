import PlaylistCard from "../components/Cards/Cards";
import { useEffect, useState } from 'react';
import useFeaturedPlaylists from '../services/featuredPlaylist';
import { FullPlaylistContainer, RowTitle } from "../components/Cards/CardsStyles";

function FullPlaylistComponent() {
    const featuredPlaylists = useFeaturedPlaylists(50);
    const [playlists, setPlaylists] = useState(null);
  
    useEffect(() => {
      setPlaylists(featuredPlaylists);
    }, [featuredPlaylists]);
  
    console.log(playlists); 
  
    return (
      <>
        <RowTitle>Today's biggest hits</RowTitle>
        <FullPlaylistContainer>
        {playlists?.items?.map((playlist, index) => (
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
  }

export default FullPlaylistComponent