import { useEffect, useState } from 'react';

export default function usePlaylist(playlistId) {
  const [playlist, setPlaylist] = useState(null);

  useEffect(() => {
    fetchData(`https://api.spotify.com/v1/playlists/${playlistId}`).then(setPlaylist);
  }, [playlistId]);

  return [playlist];
}
