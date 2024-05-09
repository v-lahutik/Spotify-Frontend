import React from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import styled from 'styled-components';

const PlayButton = styled.button`
  width: 40px;
  height: 40px;
  background-color: #1db954;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  outline: none;
  color: black; 
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: scale(0.9);
  }
`;

const GreenPlayButton = () => {
  return (
    <PlayButton>
      <FaPlay size={15} />
    </PlayButton>
  );
};

export default GreenPlayButton;
