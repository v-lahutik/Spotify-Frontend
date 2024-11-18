import styled from 'styled-components'

const PlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
justify-content: space-between;
`;


const PlayerContainer = styled.div`
  background-color: #2f2f2f;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  svg {
    color: #b3b3b3;
    transition: 0.2s ease-in-out;
    &:hover {
      color: white;
    }
  }
  .state {
    svg {
      color: white;
    }
  }
  .previous,
  .next,
  .state {
    font-size: 2rem;
    &:hover {
      cursor: pointer;
    }
  }
`;
const CurrentTrackContainer = styled.div`
  .track {
    display: flex;
    align-items: center;
    gap: 1rem;
    &__image {
    }
    &__info {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      &__track__name {
        color: white;
      }
      &__track__artists {
        color: #b3b3b3;
      }
    }
  }
`;

export { PlayerContainer, CurrentTrackContainer, PlayerWrapper };