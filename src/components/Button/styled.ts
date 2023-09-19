import styled from "styled-components";
import { colors } from "../../styles/styles";

export const ButtonStyles = styled.button`
  border: none;
  width: 19rem;
  height: 1.5rem;
  background-color: ${colors.blackAmber};
  color: ${colors.red};
  font-size: 0.875rem;
  font-weight: 700;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
