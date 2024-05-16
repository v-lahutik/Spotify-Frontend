import styled from 'styled-components';

const RowTitle= styled.h2`

    font-size: 1.5rem;
    padding: 0 20px;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    `;

const RowContainer = styled.div`
  display: flex;
  padding: 0 10px;
`;

const CardContainer = styled.div`
position: relative;
display: flex;
flex-direction: column;
margin: 0px;
width: 300px;
border-radius: 8px;
cursor: pointer;

&:hover {
    background-color: rgb(25, 25, 25);
}
`;
const PlayButtonWrapper = styled.div`
  position: absolute;
  right: 0px;
  bottom: 10rem;
  transform: translate(-50%, -50%);
  opacity: 0; /* Initially hide the button */
  transition: opacity 0.3s ease;
  ${CardContainer}:hover & {
    opacity: 1; /* Show button on hover */
  }
`;
const PlaylistCover = styled.img`
  width: 10rem;
  height: 10rem;
  margin: 10px;
  border-radius:8px;
  object-fit: cover; 
`;

const PlaylistInfo = styled.div`
  padding: 10px;
`;

const PlaylistName = styled.h2`
  font-size: 16px;
  font-weight: 500;
  margin: 0;
`;

const ArtistName = styled.p`
  font-size: 14px;
  margin: 5px 0 0;
`;

export { RowTitle, RowContainer, CardContainer, PlayButtonWrapper, PlaylistCover, PlaylistInfo, PlaylistName, ArtistName };