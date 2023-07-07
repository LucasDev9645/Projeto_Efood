import styled from "styled-components";
import { colors } from "../../styles/styles";

export const Image = styled.div`
  width: 100%;
  height: 43.75rem;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${colors.white};
  font-weight: 700;
  padding-top: 27rem;
`;

export const BannerTitle = styled.h1`
  font-size: 2.5rem;
  max-width: 35rem;
`;

export const BannerPrice = styled.p`
  font-size: 1.5rem;
  margin-top: 1.5rem;

  span {
    text-decoration: line-through;
  }
`;
