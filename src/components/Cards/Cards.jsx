import {RowTitle, RowContainer, CardContainer, PlayButtonWrapper, PlaylistCover, PlaylistInfo, PlaylistName, ArtistName } from './CardsStyles.jsx';
import GreenPlayButton from '../Buttons/PlayButton';


const PlaylistCard = ({ playlistCover, playlistName, artistName }) => {
  return (
    <>

    <RowTitle>Your top mixes</RowTitle>
    <RowContainer>
    <CardContainer>
      <PlaylistCover src={playlistCover} alt="Playlist Cover" />
      <PlaylistInfo>
        <PlaylistName>{playlistName}</PlaylistName>
        <ArtistName>{artistName}</ArtistName>
      </PlaylistInfo>
      <PlayButtonWrapper>
        <GreenPlayButton />
      </PlayButtonWrapper>
    </CardContainer>

    <CardContainer>
      <PlaylistCover src={playlistCover} alt="Playlist Cover" />
      <PlaylistInfo>
        <PlaylistName>{playlistName}</PlaylistName>
        <ArtistName>{artistName}</ArtistName>
      </PlaylistInfo>
      <PlayButtonWrapper>
        <GreenPlayButton />
      </PlayButtonWrapper>
    </CardContainer>

    
    </RowContainer>
</>
  );
};

export default PlaylistCard;
