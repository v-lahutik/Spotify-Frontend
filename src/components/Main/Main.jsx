import PlaylistCard from "../Cards/Cards";
import { useEffect, useState } from 'react';
import useFeaturedPlaylists from '../../services/featuredPlaylist';
import { RowContainer, RowTitle } from "../Cards/CardsStyles";
import { Link, Outlet } from "react-router-dom";

function Main() {
  const featuredPlaylists = useFeaturedPlaylists(7);
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    setPlaylists(featuredPlaylists);
  }, [featuredPlaylists]);

  console.log(playlists); 

  return (
    <>
    <Link to="/FullPlaylist">Full Playlist</Link>
      <RowTitle>Today's biggest hits</RowTitle>
      <RowContainer>
      {playlists?.items?.map((playlist, index) => (
          <PlaylistCard
            key={index}
            playlistCover={playlist.images[0].url}
            playlistName={playlist.name}
            artistName={playlist.description}
          />
        ))}
      </RowContainer>
      
    </>
  );
}

export default Main;
