import styled from "styled-components";

import { colors } from "../../styles/styles";

export const StylesFooter = styled.footer`
  background-color: ${colors.blackAmber};
  width: 100%;
  height: 18.75rem;
  text-align: center;
  font-weight: 700;
  padding: 0.5rem;

  img {
    margin: 2.5rem 0.625rem;
  }

  @media (max-width: 760px) {
    height: 20rem;
    font-size: 0.8rem;
  }
`;
