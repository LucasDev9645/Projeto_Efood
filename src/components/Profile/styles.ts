import styled from "styled-components";

export const CardListContainer = styled.div`
  display: grid;
  justify-items: center;

  ul {
    display: inline;
    margin: 4rem 0;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }

  @media (max-width: 1020px) {
    ul {
      display: grid;
      margin: 3rem 0;
      grid-template-columns: repeat(2, 1fr);
      gap: 3rem;
    }
  }

  @media (max-width: 760px) {
    ul {
      display: grid;
      margin: 2rem 0;
      grid-template-columns: 1fr;
      gap: 2rem;
    }
  }
`;

export const ContainerModalCard = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: center;
  align-items: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
