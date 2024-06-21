import PlaylistCard from "../Cards/Cards";
import { useEffect, useState, useContext } from 'react';
import useFeaturedPlaylists from '../../services/featuredPlaylist';
import { RowContainer, RowTitle, LinkContainer } from "../Cards/CardsStyles";
import { Link} from "react-router-dom";
import { PlaylistsContext, playlistsReducer, PlaylistsProvider } from "../../reducers/playlistReducer";

function Main() {
  const {state}=useContext(PlaylistsContext)
  
  const featuredPlaylists = useFeaturedPlaylists(7);
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    setPlaylists(featuredPlaylists);
  }, [featuredPlaylists]);

  console.log(playlists?.items); 
  

  useEffect(() => {
    console.log("Featured Playlists:", playlists?.items);
    console.log("Context State:", state?.categories);
    console.log("state", state)
  }, [playlists, state]);
  return (
    <>
    <PlaylistsProvider>
      
      <LinkContainer>
        <Link to="/FullPlaylist"><RowTitle>Today's biggest hits</RowTitle></Link>
        <Link className="showAll" to="/FullPlaylist">Show All</Link>
      </LinkContainer>
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
      </PlaylistsProvider>
    </>
  );
}

export default Main;
