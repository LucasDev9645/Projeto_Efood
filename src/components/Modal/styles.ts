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
`;

export const ImgModal = styled.div`
  img {
    border-radius: 0.5rem;
    width: 20rem;
    height: 20.4rem;
    margin: 0.6rem;
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
`;
