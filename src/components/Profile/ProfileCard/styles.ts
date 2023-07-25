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

  img {
    width: 19rem;
    height: 10.25rem;
  }

  h3 {
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
  }
`;
