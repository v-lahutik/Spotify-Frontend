import Button from '../../components/Buttons/Buttons';
import { BottomDiv } from '../../components/Header/HeaderStyles';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import useSearch from '../../services/search';
import PlaylistCard from '../../components/Cards/Cards';
import { RowContainer, RowTitle } from '../../components/Cards/CardsStyles';
import { useState, useEffect } from 'react';
import { useArtistSearch } from '../../services/artistsSearch';
import ArtistCard from '../../components/Cards/ArtistCard';
import { Link } from 'react-router-dom';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedTracks, setSearchedTracks] = useState(null);
  const [searchedArtists, setSearchedArtists] = useState(null);
  const [searchedListOfArtists, setSearchedListOfArtists] = useState(null);
  const [featuringAlbums, setFeaturingAlbums] = useState(null);
  const [featuringPlaylists, setFeaturingPlaylists] = useState(null);

  let searched = useSearch(searchTerm) || null;
  console.log('🚀 ~ Search ~ searched:', searched);
  if (searchTerm.length > 0) {
    console.log('searchTerm:', searchTerm);
  }

  let artists = useArtistSearch(searchTerm) || null;
  if (searchTerm.length > 0) {
    console.log('searchTerm:', searchTerm);
  }

  useEffect(() => {
    if (searchTerm === '' || artists === null) {
      return;
    } else {
      console.log('searched:', artists);
      setSearchedArtists(artists.artists.items[0]);
    }
  }, [artists]);
  console.log('🚀 ~ Search ~ searchedArtists:', searchedArtists);

  useEffect(() => {
    if (searchTerm === '' || searched === null) {
      return;
    } else {
      setSearchedTracks(searched.tracks.items);
      setFeaturingAlbums(searched.albums.items);
      setFeaturingPlaylists(searched.playlists.items);
      setSearchedListOfArtists(searched?.artists?.items);
    }
  }, [searched]);

  //console.log(searchedListOfArtists[0]?.id);

  console.log(searchedTracks);
  console.log('🚀 ~ Search ~ searchedArtists:', searchedArtists);

  const image = searchedArtists?.images[0].url || null;
  const name = searchedArtists?.name || null;
  const type = searchedArtists?.type || null;

  console.log(searchedTracks);

  let displayedSearch = <div>Loading....</div>;
  if (searchedTracks != null) {
    displayedSearch = searchedTracks.map((track, index) => (
      <div key={index}>
        <PlaylistCard key={index} playlistCover={track.album.images[0].url} playlistName={track.name} artistName={track.type} />
      </div>
    ));
  }

  let displayedAlbums = <div>Loading....</div>;
  if (featuringAlbums != null) {
    displayedAlbums = featuringAlbums.map((album, index) => (
      <div key={index}>
        <PlaylistCard key={index} playlistCover={album.images[0].url} playlistName={album.name} artistName={album.artists[0].name} />
      </div>
    ));
  }

  let displayedPlaylists = <div>Loading....</div>;
  if (featuringPlaylists != null) {
    displayedPlaylists = featuringPlaylists.map((playlist, index) => (
      <div key={index}>
        <PlaylistCard
          key={index}
          playlistCover={playlist.images[0].url}
          playlistName={playlist.name}
          artistName={`By ${playlist.owner.display_name}`}
        />
      </div>
    ));
  }

  let displayedListOfArtists = <div>Loading....</div>;
  if (searchedListOfArtists != null) {
    displayedListOfArtists = searchedListOfArtists.map((artist, index) => (
      <div key={index}>
        <PlaylistCard key={index} playlistCover={artist?.images[0]?.url} playlistName={artist.name} artistName={artist.type} />
      </div>
    ));
  }

  // let displayedSearchArtists = <div>Loading....</div>;
  // if (searchedArtists != null) {
  //   console.log('🚀 ~ Search ~ searchedArtists:', searchedArtists);

  //   displayedSearchArtists = searchedArtists.map((track, index) => (
  //     <div key={index}>
  //       <PlaylistCard key={index} playlistCover={track.album.images[0].url} playlistName={track.name} artistName={track.type} />
  //     </div>
  //   ));
  // }

  return (
    <>
      <div className="">
        <div className="active  ">
          <IoIosArrowBack />
        </div>
        <div className="">
          <IoIosArrowForward />
        </div>
        <form>
          <input
            type="text"
            value={searchTerm}
            //SETTING SEARCHTERM STATE TO THE INPUTVALUE
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="filter by title..."
          />
          <div className="record-list-container"></div>
        </form>
      </div>

      <IoIosArrowForward />
      <BottomDiv>
        <Button $white="true">All</Button>
        <Button $grey="true">Music</Button>
        <Button $grey="true">Podcasts</Button>
        <Button $grey="true">Music</Button>
      </BottomDiv>
      {searchTerm.length > 0 ? <ArtistCard image={image} name={name} type={type} /> : null}
      {/* <RowContainer>{searchTerm.length > 0 ? displayedSearchArtists?.items : <div>Loading....</div>}</RowContainer> */}
      {searchTerm.length > 0 ? (
        <div>
          <Link to="/FullPlaylist">
            <RowTitle>Songs</RowTitle>
          </Link>
          <RowContainer>{searchTerm.length > 0 ? displayedSearch : <div>Loading....</div>}</RowContainer>
        </div>
      ) : null}
      {searchTerm.length > 0 ? (
        <div>
          <Link to="/FullPlaylist">
            <RowTitle>Albums</RowTitle>
          </Link>
          <RowContainer>{searchTerm.length > 0 ? displayedAlbums : <div>Loading....</div>}</RowContainer>{' '}
        </div>
      ) : null}
      {searchTerm.length > 0 ? (
        <div>
          <Link to="/FullPlaylist">
            <RowTitle>Playlists</RowTitle>
          </Link>
          <RowContainer>{searchTerm.length > 0 ? displayedPlaylists : <div>Loading....</div>}</RowContainer>{' '}
        </div>
      ) : null}
      {searchTerm.length > 0 ? (
        <div>
          <Link to="/FullPlaylist">
            <RowTitle>Artists</RowTitle>
          </Link>
          <RowContainer>{searchTerm.length > 0 ? displayedListOfArtists : <div>Loading....</div>}</RowContainer>{' '}
        </div>
      ) : null}
    </>
  );
}

export default Search;
