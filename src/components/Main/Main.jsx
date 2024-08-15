import React, { useContext } from 'react';
import PlaylistCard from '../Cards/Cards';
import { RowContainer, RowTitle, LinkContainer } from '../Cards/CardsStyles';
import { MainComponentWrapper, PlaylistWrapper } from './MainStyles';
import { Link } from 'react-router-dom';
import { PlaylistsContext } from '../../reducers/playlistReducer';

function Main() {
  const { state } = useContext(PlaylistsContext);

  return (
    <>
      <MainComponentWrapper>
        {state?.categories?.map((category) => (
          <PlaylistWrapper key={category.id}>
            <LinkContainer>
              <Link to={`/category/${category.id}`}>
                <RowTitle>{category.name}</RowTitle>
              </Link>
              <Link className="showAll" to={`/category/${category.id}`}>Show All</Link>
            </LinkContainer>

            <RowContainer>
              {state?.playlists[category.id]?.map((playlist, index) => (
                <PlaylistCard
                  key={playlist.id} // Use unique id for the key
                  id={playlist.id} // Pass playlist id to PlaylistCard
                  playlistCover={playlist.images[0].url}
                  playlistName={playlist.name}
                  artistName={playlist.description}
                />
              ))}
            </RowContainer>
          </PlaylistWrapper>
        ))}
      </MainComponentWrapper>
    </>
  );
}

export default Main;
