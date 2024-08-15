import styled from 'styled-components';

const LinkContainer = styled.div`

  display: flex;
  justify-content: space-between;
  padding: 0 45px 0 0;
  margin: 0;
  .showAll{
      margin-top: 10px;
    }
    a{
    font-size: 0.8rem;
    color: white;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
    
  }
  `
const RowTitle = styled.h2`
  
  font-size: 1.5rem;
  padding: 0 40px;
  margin: 0;
`;
const RowContainer = styled.div`

  display: flex;
  padding: 0 2rem;
  

`;
const FullPlaylistContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 2rem;
 
  `;

  const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;

  border-radius: 8px;
  padding: 8px;
  cursor: pointer;

  max-width: 300px;
  min-width: 200px;
  max-width: 200px;
  
  box-sizing: border-box;
  &:hover {
    background-color: rgb(25, 25, 25);
  }
`;

const PlayButtonWrapper = styled.div`
  position: absolute;
  right: 8px;
  bottom: 80px;
  transform: translate(-50%, -50%);
  opacity: 0; /* Initially hide the button */
  transition: opacity 0.3s ease;
  ${CardContainer}:hover & {
    opacity: 1; /* Show button on hover */
  }
`;

const PlaylistCover = styled.img`
  width: 100%;
  height: auto;
  max-height: 200px;
  max-width: 200px;
  border-radius: 8px;
  object-fit: cover;
  
`;

const PlaylistInfo = styled.div`
  padding: 10px;
  
`;

const PlaylistName = styled.h2`
  font-size: 0.8rem;
  font-weight: 500;
  margin: 0;
`;

const ArtistName = styled.p`
  font-size: 0.7rem;
  margin: 5px 0 0;
`;
function shortenText(text, charLimit) {
  if (text.length <= charLimit) {
    return text;
  }
  
  let shortened = text.slice(0, charLimit);
  const lastSpaceIndex = shortened.lastIndexOf(' ');
  
  // Ensure we don't break words
  if (lastSpaceIndex > -1) {
    shortened = shortened.slice(0, lastSpaceIndex);
  }

  const shortenedWithEllipsis = shortened + '...';
  
  return <span title={text}>{shortenedWithEllipsis}</span>;
}

export { RowTitle,LinkContainer, RowContainer, FullPlaylistContainer, CardContainer, PlayButtonWrapper, PlaylistCover, PlaylistInfo, PlaylistName, ArtistName, shortenText };
