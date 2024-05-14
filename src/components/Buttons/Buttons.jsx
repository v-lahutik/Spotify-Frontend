import styled, { css } from 'styled-components';

const Button = styled.button`
background-color: ${({$grey, $black, $white}) => {
  if ($black) return 'rgb(16, 16, 16)';
  if ($grey) return 'rgb(36, 36, 36)';
  if ($white) return 'rgb(246, 246, 246)';
}};
  color: ${({$grey, $black, $white}) => {
    if ($black) return 'rgb(246, 246, 246)';
    if ($grey) return 'rgb(246, 246, 246)';
    if ($white) return 'rgb(16, 16, 16)';
  }};

  font-size: 12px;
  font-family: "DM Sans", sans-serif;
  padding: 8px 20px;
  margin: 8px 3px;
  border-radius: 50px; /* Rounded border-radius by default */

  /* Additional properties for modifying the size */
  ${({$bigger}) =>
    $bigger &&
    css`
      font-size: 14px;
      padding: 15px 24px;
      font-weight: 700;
    `}

  /* Circle shape if 'circle' prop is true */
  ${({$circle}) =>
    $circle &&
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
export default Button;