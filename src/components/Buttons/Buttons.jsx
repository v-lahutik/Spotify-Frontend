import React from 'react';
import styled, { css } from 'styled-components';


const Button = styled.button`
  background-color: ${(props) => {
    if (props.black) return 'rgb(16, 16, 16)';
    if (props.grey) return 'rgb(36, 36, 36)';
    if (props.white) return 'rgb(246, 246, 246)';
  }};
  color: ${(props) => {
    if (props.black) return 'rgb(246, 246, 246)';
    if (props.grey) return 'rgb(246, 246, 246)';
    if (props.white) return 'rgb(16, 16, 16)';
  }};
  font-size: 12px;
  font-family: 'Circular', sans-serif;
  padding: 8px 20px;
  margin: 8px;
  border-radius: 50px; /* Rounded border-radius by default */

  /* Additional properties for modifying the size */
  ${(props) =>
    props.bigger &&
    css`
      font-size: 14px; 
      padding: 15px 24px;
      font-weight: 700;
    `}

  /* Circle shape if 'circle' prop is true */
  ${(props) =>
    props.circle &&
    css`
    width: 30px; 
    padding: 8px 8px;
    border-radius: 50%; 
    `}

  cursor: pointer;
  border: none;

  &:hover {
    transform: scale(1.05);
  }
`;

function BtnComponent() {
  return (
    <div>
      <Button black bigger>Sign Up</Button>
      <Button white bigger>Log In</Button>
    </div>
  );
}

function LoggedInBtn() {
    return (
      <div>
         <Button white>All</Button>
          <Button grey>Music</Button>
          <Button grey>Podcasts</Button>
          
          <Button white>Explore premium</Button>
          <Button black>Install App</Button>
          <Button black circle>V</Button>
          <Button black circle>V</Button>
       
      </div>
    );
  }
  

export default BtnComponent;
export { LoggedInBtn };
