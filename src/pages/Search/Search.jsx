import Button from '../../components/Buttons/Buttons';
import { BottomDiv } from '../../components/Header/HeaderStyles';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import useSearch from '../../services/search';
import PlaylistCard from '../../components/Cards/Cards';
import { RowContainer } from '../../components/Cards/CardsStyles';
import { useState, useEffect } from 'react';
import { useArtistSearch } from '../../services/artistsSearch';
import ArtistCard from '../../components/Cards/ArtistCard';

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchedTracks, setSearchedTracks] = useState(null);
  const [searchedArtists, setSearchedArtists] = useState(null);

  let searched = useSearch(searchTerm) || null;
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
    }
  }, [searched]);
  console.log(searchedTracks);

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
      <RowContainer>{searchTerm.length > 0 ? displayedSearch : <div>Loading....</div>}</RowContainer>
    </>
  );
}

export default Search;
