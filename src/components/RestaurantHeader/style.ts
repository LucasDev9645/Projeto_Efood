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
    background-color: ${colors.red};
    padding: 0.5rem 1rem;
    border-radius: 2rem;
  }

  h2 {
    background-color: ${colors.red};
    padding: 0.3rem 0.6rem;
    border-radius: 2rem;
    font-style: italic;
    position: absolute;
    top: 2rem;
    font-weight: 400;
  }
`;

export const ProfileMenuContainer = styled.div`
  color: ${colors.red};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3.6rem;
  font-weight: 700;

  a {
    color: ${colors.red};
    cursor: pointer;
  }

  div {
    display: flex;
    align-items: center;

    p {
      margin-right: 0.5rem;
    }
  }
`;
