import React, { useEffect, useState, useContext } from 'react';
import PlaylistCard from '../Cards/Cards';
import useFeaturedPlaylists from '../../services/featuredPlaylist';
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
            <Link to={`/playlist/${category.id}`}>
                <RowTitle>{category.name}</RowTitle>
              </Link>
              <Link className="showAll" to={`/playlist/${category.id}`}>Show All</Link>
            </LinkContainer>

            <RowContainer>
              {console.log("MAIN", state)}
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

      </MainComponentWrapper>
    </>
  );
}

export default Main;
