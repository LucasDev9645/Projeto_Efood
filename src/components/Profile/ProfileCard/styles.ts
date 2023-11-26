import styled from "styled-components";

import { colors } from "../../../styles/styles";
import { ButtonStyles } from "../../Button/styled";

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

  @media (max-width: 760px) {
    max-width: 29.5rem;
    height: 24rem;

    img {
      width: 28rem;
      height: 14.25rem;
    }

    h3 {
      text-align: center;
    }

    ${ButtonStyles} {
      max-width: 100%;
      width: 100%;
    }
  }

  @media (max-width: 560px) {
    max-width: 20rem;
    height: 21.25rem;

    img {
      width: 19rem;
      height: 10.25rem;
    }
  }
`;
