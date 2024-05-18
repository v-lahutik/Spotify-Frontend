import styled from 'styled-components';

const RowTitle = styled.h2`

    font-size: 1.5rem;
    padding: 0 20px;
    &:hover {
        text-decoration: underline;
    `;

const RowContainer = styled.div`
  display: flex;
  padding: 0 8px;
`;

const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  margin: 0px;
  width: 100%;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #1a1a1a;
  }
`;

const PlaylistCover = styled.img`
  width: 48px;
  height: 48px;
  margin: 10px 2px 10px 10px;
  border-radius: 8px;
  object-fit: cover;
`;

const PlaylistInfo = styled.div`
  padding: 10px;
`;

const PlaylistName = styled.h2`
  font-size: 18px;
  margin: 0;
  word-break: break-all;
  overflow-wrap: anywhere;
  font-weight: 400;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const PlaylistType = styled.p`
  font-size: 1rem;
  margin: 5px 0 0;
  word-break: break-all;
  overflow-wrap: anywhere;
  color: #6a6a6a;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export { RowTitle, RowContainer, CardContainer, PlaylistCover, PlaylistInfo, PlaylistName, PlaylistType };
