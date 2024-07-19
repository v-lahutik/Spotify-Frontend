import React, { useEffect, useState, useContext } from 'react';
import PlaylistCard from '../Cards/Cards';
import useFeaturedPlaylists from '../../services/featuredPlaylist';
import { RowContainer, RowTitle, LinkContainer } from '../Cards/CardsStyles';
import { MainComponentWrapper, PlaylistWrapper } from './MainStyles';
import { Link } from 'react-router-dom';
import { PlaylistsContext } from '../../reducers/playlistReducer';

function Main() {
  const { state } = useContext(PlaylistsContext);

  const featuredPlaylists = useFeaturedPlaylists(7);
  const [playlists, setPlaylists] = useState(null);

  // For example purposes
  useEffect(() => {
    setPlaylists(featuredPlaylists);
  }, [featuredPlaylists]);

  return (
    <>
      <MainComponentWrapper>
        {state?.categories?.map((category) => (
          <PlaylistWrapper key={category.id}>
            <LinkContainer>
              <Link to="/FullPlaylist">
                <RowTitle>{category.name}</RowTitle>
              </Link>
              <Link className="showAll" to="/FullPlaylist">
                Show All
              </Link>
            </LinkContainer>

            <RowContainer>
              {state?.playlists[category.id]?.map((playlist, index) => (
                <PlaylistCard
                  key={index}
                  playlistCover={playlist.images[0].url}
                  playlistName={playlist.name}
                  artistName={playlist.description}
                />
              ))}
            </RowContainer>
          </PlaylistWrapper>
        ))}

        {/* keep component below as STATIC example*/}
        <PlaylistWrapper>
          <LinkContainer>
            <Link to="/FullPlaylist">
              <RowTitle>Today's biggest hits (EXAMPLE)</RowTitle>
            </Link>
            <Link className="showAll" to="/FullPlaylist">
              Show All
            </Link>
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
        </PlaylistWrapper>
      </MainComponentWrapper>
    </>
  );
}

export default Main;
