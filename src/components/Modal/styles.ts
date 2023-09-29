import { styled } from "styled-components";
import { colors } from "../../styles/styles";

export const ModalCard = styled.div`
  background-color: ${colors.red};
  display: flex;
  max-width: 64rem;
  height: 21.5rem;
  border-radius: 0.5rem;
  color: ${colors.blackAmber};
  position: relative;
  z-index: 1;
  margin: 0 0.5rem;

  @media (max-width: 1020px) {
    max-width: 45rem;
    height: 19.5rem;
  }

  @media (max-width: 700px) {
    position: relative;
    flex-direction: column;
    max-width: 21rem;
    height: 32.8rem;
  }
`;

export const ImgModal = styled.div`
  img {
    border-radius: 0.5rem;
    width: 20rem;
    height: 20.4rem;
    margin: 0.6rem;
  }

  @media (max-width: 1020px) {
    img {
      width: 17rem;
      height: 17.4rem;
      margin: 1rem 0.6rem;
    }
  }

  @media (max-width: 700px) {
    img {
      width: 20rem;
      height: 13.7rem;
      margin: 2rem 0.4rem 0 0.4rem;
    }
  }
`;

export const ModalCardDescription = styled.div`
  margin-left: 1.5rem;
  header {
    display: flex;
    justify-content: space-between;

    img {
      width: 1rem;
      height: 1rem;
      margin: 0.5rem;
      cursor: pointer;
    }

    h2 {
      margin-top: 2rem;
      margin-bottom: 1rem;
      font-style: italic;
    }
  }

  p {
    font-size: 1rem;
    margin-bottom: 3rem;
    padding-right: 0.5rem;
  }

  @media (max-width: 1020px) {
    header {
      h2 {
        margin-top: 1rem;
      }
    }
    p {
      margin-bottom: 1.8rem;
    }
  }

  @media (max-width: 700px) {
    margin-left: 0.8rem;
    header {
      display: block;

      .closeImage {
        position: absolute;
        top: 0.2rem;
        right: 0.2rem;
      }

      h2 {
        font-size: 1.2rem;
      }
    }
    p {
      font-size: 0.8rem;
      margin-bottom: 1.8rem;
    }
  }
`;
