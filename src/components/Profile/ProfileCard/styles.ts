import styled from "styled-components";
import { colors } from "../../../styles/styles";

export const ProfileCardContainer = styled.div`
  max-width: 20rem;
  height: 21.25rem;
  background-color: ${colors.red};
  padding: 0.5rem;
  color: ${colors.blackAmber};
  line-height: 1.375rem;
  border-radius: 0.5rem;

  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
  }
`;

export const ContainerModalCard = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

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
    margin: 2rem 2rem 2rem 1.5rem;
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

    h3 {
      margin-top: 2rem;
      margin-bottom: 1rem;
    }
  }

  p {
    font-size: 0.875rem;
    margin-bottom: 1rem;
  }
`;
