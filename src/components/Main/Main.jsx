import PlaylistCard from "../Cards/Cards";
import GreenPlayButton from "../Buttons/PlayButton";
import { useEffect, useState } from 'react';
import useFeaturedPlaylists from '../../services/featuredPlaylist';
import { RowContainer, RowTitle } from "../Cards/CardsStyles";

function Main() {
  const featuredPlaylists = useFeaturedPlaylists(7);
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    setPlaylists(featuredPlaylists);
  }, [featuredPlaylists]);

  console.log(playlists); 

  return (
    <>
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
