import styled from 'styled-components';

const PlaylistContainer = styled.div`
  display: flex;
  margin: 0 2rem;
  align-items: center;
  gap: 2rem;
`;

const PlaylistImage = styled.div`
  img {
    height: 15rem;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
    border-radius: 10px;
  }
`;

const PlaylistDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #e0dede;
`;

const PlaylistTitle = styled.div`
  color: white;
  font-size: 4rem;
`;

const PlaylistList = styled.div`
  .header-row {
    display: grid;
    grid-template-columns: 0.3fr 3fr 2fr 0.1fr;
    margin: 1rem 0 0 0;
    color: #dddcdc;
    position: sticky;
    top: 15vh;
    padding: 1rem 3rem;
    transition: 0.3s ease-in-out;
    background-color: ${({ headerBackground }) =>
      headerBackground ? "#000000dc" : "none"};
  }
`;

const TracksContainer = styled.div`
  margin: 0 2rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
`;

const TrackRow = styled.div`
  padding: 0.5rem 1rem;
  display: grid;
  grid-template-columns: 0.3fr 3.1fr 2fr 0.1fr;
  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

const TrackColumn = styled.div`
  display: flex;
  align-items: center;
  color: #dddcdc;
  .index{
    margin-right: 1rem;
  }
  img {
    height: 40px;
    width: 40px;
  }
`;

const TrackDetail = styled.div`
  display: flex;
  gap: 1rem;
  .info {
    display: flex;
    flex-direction: column;
  }
`;

export {
  PlaylistContainer,
  PlaylistImage,
  PlaylistDetails,
  PlaylistTitle,
  PlaylistList,
  TracksContainer,
  TrackRow,
  TrackColumn,
  TrackDetail
};
