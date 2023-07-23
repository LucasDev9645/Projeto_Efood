import styled from "styled-components";
import { colors } from "../../styles/styles";

export const ImagePresentationHeader = styled.div`
  width: 100%;
  height: 25rem;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${colors.white};
  position: relative;

  h1 {
    position: absolute;
    bottom: 2rem;
  }

  h2 {
    position: absolute;
    top: 2rem;
    font-weight: 400;
  }
`;

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
`;

export const ProfileMenuContainer = styled.div`
  color: ${colors.red};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3.6rem;
  font-weight: 700;

  div {
    display: flex;
    align-items: center;

    p {
      margin-right: 0.5rem;
    }
  }
`;
