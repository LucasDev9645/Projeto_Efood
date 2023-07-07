import styled from "styled-components";
import { colors } from "../../../styles/styles";

export const HomeCardContainer = styled.div`
  background-color: ${colors.white};
  max-width: 29.5rem;
  height: 26rem;
  border-radius: 0.5rem;
`;

export const HomeCardImage = styled.img`
  border-radius: 0.5rem 0.5rem 0 0;
`;

export const ContainerDescription = styled.div`
  padding: 0.5rem;

  a {
    font-size: 0.875rem;
    background-color: ${colors.red};
    color: ${colors.white};
    padding: 0.3rem 0.5rem;
    border-radius: 0.4rem;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  div {
    display: flex;
    align-items: center;
    font-weight: 700;

    p {
      margin-right: 0.5rem;
    }
  }
`;

export const HomeCardDescription = styled.p`
  margin-bottom: 1rem;
  font-style: italic;
`;
