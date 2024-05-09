import styled from 'styled-components';

const GradientBackground = styled.div`
  /* Gradient */
  background-image: linear-gradient(to bottom, #3f3f3f, #000000); /* Grey at the top, black at the bottom */
  width: 100%;
  height: 100vh;
  border-radius: 10px;
  margin: 3px;
  color: rgb(246, 246, 246);
  p{
    color:rgb(174, 174, 174);
  }
  `

export default GradientBackground;