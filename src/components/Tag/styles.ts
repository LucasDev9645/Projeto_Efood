import { Props } from ".";

import styled from "styled-components";
import { colors } from "../../styles/styles";

export const TagContainer = styled.div<Props>`
  background-color: ${colors.red};
  color: ${colors.white};
  font-size: ${(props) => (props.size === "big" ? "1rem" : "0.625rem")};
  font-weight: 700;
  padding: ${(props) =>
    props.size === "big" ? "0.5rem 1rem" : "0.25rem 0.375rem "};
`;
