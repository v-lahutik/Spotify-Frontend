/* eslint-disable react/prop-types */

import { CardContainer, PlaylistCover, PlaylistInfo, PlaylistName, PlaylistType } from './VerticalCardStyle.jsx';

function VerticalCard({ playlistCover, playlistName, playlistType, playlistOwner }) {
  return (
    <>
      <CardContainer>
        <PlaylistCover src={playlistCover} alt="Playlist Cover" />
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
