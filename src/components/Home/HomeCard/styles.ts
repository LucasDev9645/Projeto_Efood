import styled from "styled-components";
import { colors } from "../../../styles/styles";
import { TagContainer } from "../../Tag/styles";

export const HomeCardContainer = styled.div`
  background-color: ${colors.white};
  max-width: 29.5rem;
  height: 26rem;
  border-radius: 0.5rem;
  position: relative;

  ${TagContainer} {
    margin-right: 0.5rem;
  }
`;

export const HomeCardImage = styled.img`
  border-radius: 0.5rem 0.5rem 0 0;
`;

export const ContainerDescription = styled.div`
  padding: 0.5rem;

  a {
    font-size: 0.875rem;
    font-weight: 700;
    background-color: ${colors.red};
    color: ${colors.white};
    padding: 0.4rem 0.5rem;
    border-radius: 0.4rem;
    position: absolute;
    bottom: 1rem;
    left: 1rem;
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

export const Infos = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
`;
