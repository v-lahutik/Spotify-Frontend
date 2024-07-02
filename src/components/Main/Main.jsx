import PlaylistCard from '../Cards/Cards';
import { useEffect, useState, useContext } from 'react';
import useFeaturedPlaylists, { useNewPlaylists } from '../../services/featuredPlaylist';
import { RowContainer, RowTitle, LinkContainer } from '../Cards/CardsStyles';
import { MainComponentWrapper, PlaylistWrapper } from './MainStyles';
import { Link } from 'react-router-dom';
import { PlaylistsContext, playlistsReducer } from '../../reducers/playlistReducer';



function Main() {
  const { state } = useContext(PlaylistsContext);

  const featuredPlaylists = useFeaturedPlaylists(7);
  const [playlists, setPlaylists] = useState(null);
 
  const newPlaylists=useNewPlaylists()

  useEffect(() => {
    setPlaylists(featuredPlaylists);
  }, [featuredPlaylists]);


 
  return (
    <>
    {console.log("from categories api playlist", newPlaylists)}
     {console.log("inside main component states", state.categories)} 
      <MainComponentWrapper>
        {state?.categories?.map((playlist) => (
          <PlaylistWrapper>
            <LinkContainer>
              <Link to="/FullPlaylist">
                <RowTitle key={playlist.id}>{playlist.name}</RowTitle>
              </Link>

              <Link className="showAll" to="/FullPlaylist">
                Show All
              </Link>
            </LinkContainer>

            <RowContainer>
              {playlists?.items?.map((playlist, index) => (
                <PlaylistCard key={index} playlistCover={playlist.images[0].url} playlistName={playlist.name} artistName={playlist.description} />
              ))}
            </RowContainer>
          </PlaylistWrapper>
        ))}

        {/* keep component below as STATIC example*/}
        <PlaylistWrapper>


          <LinkContainer>
            <Link to="/FullPlaylist">
              <RowTitle>Today's biggest hits(EXAMPLE)</RowTitle>
            </Link>
            <Link className="showAll" to="/FullPlaylist">
              Show All
            </Link>
          </LinkContainer>
          <RowContainer>
            {playlists?.items?.map((playlist, index) => (
              <PlaylistCard key={index} playlistCover={playlist.images[0].url} playlistName={playlist.name} artistName={playlist.description} />
            ))}
          </RowContainer>
        </PlaylistWrapper>
      </MainComponentWrapper>
    </>
  );
}

export default Main;
