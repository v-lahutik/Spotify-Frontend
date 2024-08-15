import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fetchData from '../../utils/fetchData';
import {
  PlaylistContainer,
  PlaylistImage,
  PlaylistDetails,
  PlaylistTitle,
  PlaylistList,
  TracksContainer,
  TrackRow,
  TrackColumn,
  TrackDetail,
} from './SinglePlaylistStyles';

const formatTrackDuration = (durationMs) => {
  const totalSeconds = Math.floor(durationMs / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

const formatTotalDuration = (tracks) => {
  const totalMs = tracks.reduce((acc, track) => acc + track.track.duration_ms, 0);
  const totalSeconds = Math.floor(totalMs / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  if (hours > 0 && minutes > 0) {
    return `around ${hours} hr ${minutes} min`;
  } else if (hours > 0) {
    return `around ${hours} hr`;
  } else {
    return `around ${minutes} min`;
  }
};

const SinglePlaylistComponent = () => {
  const { playlistId } = useParams();
  const [playlist, setPlaylist] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaylistData = async () => {
      try {
        const response = await fetchData(`https://api.spotify.com/v1/playlists/${playlistId}`);
        setPlaylist(response);
      } catch (error) {
        setError(error.message);
        console.error('Error fetching playlist:', error);
      }
    };

    if (playlistId) {
      fetchPlaylistData();
    }
  }, [playlistId]);

  if (error) return <div>Error: {error}</div>;
  if (!playlist) return <div>Loading...</div>;

  const totalDuration = playlist.tracks.items.length > 0 ? formatTotalDuration(playlist.tracks.items) : '0 min';

  return (
    <>
      <PlaylistContainer>
        <PlaylistImage>
          <img src={playlist.images[0]?.url} alt={playlist.name} />
        </PlaylistImage>
        <PlaylistDetails>
          <PlaylistTitle>{playlist.name}</PlaylistTitle>
          <div>{playlist.description}</div>
          <div>
            {playlist.owner.display_name} - {playlist.tracks.total} songs, {totalDuration}
          </div>
        </PlaylistDetails>
      </PlaylistContainer>

      <PlaylistList headerBackground={true}>
        <div className="header-row">
          <div>#</div>
          <div>Title</div>
          <div>Album</div>
          <div>Time</div>
        </div>
        <TracksContainer>
          {playlist.tracks.items.map((item, index) => (
            <TrackRow key={index}>
              <TrackColumn>
                <div className='index'>{index + 1}</div>
                <img src={item.track.album.images[0]?.url} alt={item.track.name} />
              </TrackColumn>
              <TrackDetail>
                <div className="info">
                  <div>{item.track.name}</div>
                  <div>{item.track.artists.map((artist) => artist.name).join(', ')}</div>
                </div>
              </TrackDetail>
              <div>{item.track.album.name}</div>
              <div>{formatTrackDuration(item.track.duration_ms)}</div> 
            </TrackRow>
          ))}
        </TracksContainer>
      </PlaylistList>
    </>
  );
};

export default SinglePlaylistComponent;
