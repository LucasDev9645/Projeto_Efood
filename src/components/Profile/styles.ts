import styled from "styled-components";

import { colors } from "../../styles/styles";

export const ImageHeaderProfile = styled.img`
  position: absolute;
  top: 0;
  z-index: -1;
  width: 100%;
  background-repeat: no-repeat;
`;

export const ImagePresentationHeader = styled.div`
  margin-top: 6rem;
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
