import { ArtistContainer, ArtistCardSearch, WrappedImage, ArtistImageCard, ArtistNameCard, ArtistTypeCard } from './CardsStyles';

function ArtistCard({ image, name, type }) {
  return (
    <>
      <ArtistContainer>
        <ArtistCardSearch>
          <WrappedImage>
            <ArtistImageCard src={image} alt="artist" />
          </WrappedImage>

          <ArtistNameCard>{name}</ArtistNameCard>
          <ArtistTypeCard>{type}</ArtistTypeCard>
        </ArtistCardSearch>
      </ArtistContainer>
    </>
  );
}

export default ArtistCard;
