import PlaylistCard from '../Cards/Cards';
import { useEffect, useState } from 'react';
import useFeaturedPlaylists from '../../services/featuredPlaylist';
import { RowContainer, RowTitle, LinkContainer } from '../Cards/CardsStyles';
import { Link } from 'react-router-dom';
import useUserTopItems from '../../services/userTopItems';

function Main() {
  const featuredPlaylists = useFeaturedPlaylists(7);
  const [playlists, setPlaylists] = useState(null);

  // const user = useUserTopItems();
  // console.log('🚀 ~ Main ~ user:', user);

  useEffect(() => {
    setPlaylists(featuredPlaylists);
  }, [featuredPlaylists]);

  // console.log(playlists?.items);

  return (
    <>
      <LinkContainer>
        <Link to="/FullPlaylist">
          <RowTitle>Today's biggest hits</RowTitle>
        </Link>
        <Link className="showAll" to="/FullPlaylist">
          Show All
        </Link>
      </LinkContainer>
      <RowContainer>
        {playlists?.items?.map((playlist, index) => (
          <PlaylistCard key={index} playlistCover={playlist.images[0].url} playlistName={playlist.name} artistName={playlist.description} />
        ))}
      </RowContainer>
    </>
  );
}

export default Main;
