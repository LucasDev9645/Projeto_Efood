import styled from "styled-components";
import { colors } from "../../styles/styles";

export const HeaderContainer = styled.header`
  margin-top: 2rem;
  background-color: ${colors.white};
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 6.25rem;
  border-radius: 1rem;
  font-weight: 700;
  font-size: 1.2rem;
`;

export const HeaderLinks = styled.ul`
  display: flex;

  a {
    margin-right: 1rem;
    color: ${colors.red};
  }
`;

export const HeaderCart = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-right: 0.4rem;
  }
`;
