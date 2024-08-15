// import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { CardContainer, PlayButtonWrapper, PlaylistCover, PlaylistInfo, PlaylistName, ArtistName, shortenText } from './CardsStyles.jsx';
import GreenPlayButton from '../Buttons/PlayButton';

const PlaylistCard = ({ id, playlistCover, playlistName, artistName }) => {
  return (
    
      <CardContainer>
        <Link to={`/playlist/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <PlaylistCover src={playlistCover} alt="Playlist Cover" />
        <PlaylistInfo>
          <PlaylistName>{shortenText(playlistName, 16)}</PlaylistName>
          <ArtistName>{shortenText(artistName, 32)}</ArtistName>
        </PlaylistInfo>
        <PlayButtonWrapper>
          <GreenPlayButton />
        </PlayButtonWrapper>
        </Link>
      </CardContainer>
    
  );
};

export default PlaylistCard;

