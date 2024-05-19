import {CardContainer, PlayButtonWrapper, PlaylistCover, PlaylistInfo, PlaylistName, ArtistName, shortenText } from './CardsStyles.jsx';
import GreenPlayButton from '../Buttons/PlayButton';


const PlaylistCard = ({ playlistCover, playlistName, artistName, }) => {

  return (
    <>
    <CardContainer>
      <PlaylistCover src={playlistCover} alt="Playlist Cover" />
      <PlaylistInfo>
        <PlaylistName>{shortenText(playlistName, 16)}</PlaylistName>
        <ArtistName>{shortenText(artistName, 32)}</ArtistName>
      </PlaylistInfo>
      <PlayButtonWrapper>
        <GreenPlayButton />
      </PlayButtonWrapper>
    </CardContainer>

</>
  );
};

export default PlaylistCard;
