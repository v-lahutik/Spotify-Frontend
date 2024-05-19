/* eslint-disable react/prop-types */
import { HiOutlineMusicalNote } from "react-icons/hi2";
import { CardContainer, PlaylistCover, MusicIconContainer, PlaylistInfo, PlaylistName, PlaylistType } from './VerticalCardStyle.jsx';

function VerticalCard({ playlistCover, playlistName, playlistType, playlistOwner }) {
  return (
    <>
      <CardContainer>
      {playlistCover ? (
          <PlaylistCover src={playlistCover} alt="Playlist Cover" />
        ) : (
          <MusicIconContainer>
            <HiOutlineMusicalNote />
          </MusicIconContainer>
        )}
        <PlaylistInfo>
          <PlaylistName>{playlistName}</PlaylistName>
          <PlaylistType>
            {playlistType} • {playlistOwner}
          </PlaylistType>
        </PlaylistInfo>
      </CardContainer>
    </>
  );
}

export default VerticalCard;
