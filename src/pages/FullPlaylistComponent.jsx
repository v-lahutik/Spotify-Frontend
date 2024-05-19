import PlaylistCard from "../components/Cards/Cards";
import { useEffect, useState } from 'react';
import useFeaturedPlaylists from '../services/featuredPlaylist';
import { FullPlaylistContainer, LinkContainer, RowTitle } from "../components/Cards/CardsStyles";
import { Link } from "react-router-dom";

function FullPlaylistComponent() {
    const featuredPlaylists = useFeaturedPlaylists(21);
    const [playlists, setPlaylists] = useState(null);
  
    useEffect(() => {
      setPlaylists(featuredPlaylists);
    }, [featuredPlaylists]);
  
    console.log(playlists); 
  
    return (
      <>
      <LinkContainer>
      <RowTitle>Today's biggest hits</RowTitle>
      </LinkContainer>
        
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