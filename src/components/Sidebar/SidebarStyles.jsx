import styled from 'styled-components';

const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1px 5px;
  background-color: black;
  color: #ffffff;

  width: 320px;
  top: 0;
  left: 0;
  .playlist-wrapper {
    position: relative;

    height: calc(100vh - 220px) !important;
    overscroll-behavior-y: contain;
    overflow: hidden !important;

    overflow-y: scroll !important;
    scrollbar-width: auto;
    overflow: auto;
    scrollbar-color: hsla(0, 0%, 100%, 0.3) transparent !important;
  }
`;

const SidebarContainer = styled.div`
  background-color:#121212;
  color: rgb(246, 246, 246);
  width: 290px;
  padding: 0;
  padding: 10px;
  border-radius: 8px;
  margin: 8px 3px 8px 8px;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    li {
      padding: 10px;
      cursor: pointer;
      &:hover a {
        color: #ffffff;
      }
      &.active a {
        color: #ffffff;
      }
      a {
        color: #bdbdbd;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 1rem;
        font-weight: 700;
        svg {
          width: 30px;
          height: 30px;
        }
      }
    }

  }
  .library {
    padding:10px 20px;
    color: #bdbdbd;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 1rem;
    font-weight: 700;
    svg {
      width: 30px;
      height: 30px;
    }
    &:hover {
      color: #ffffff;
    }
   
`;

export { SidebarContainer, SidebarWrapper };
