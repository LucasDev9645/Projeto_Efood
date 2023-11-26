import styled from "styled-components";

import { colors } from "../../styles/styles";
import { ButtonStyles } from "../Button/styled";

export const CartContainer = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;

  &.is-open {
    display: flex;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const SideBar = styled.aside`
  z-index: 1;
  width: 22.5rem;
  background-color: ${colors.red};
  padding: 2rem 0.5rem 0 0.5rem;

  li {
    position: relative;
    border-radius: 0.5rem;
    width: 21.5rem;
    height: 6.25rem;
    background-color: ${colors.blackAmber};
    padding: 0.625rem;
    display: flex;
    margin-bottom: 1rem;

    div {
      padding-left: 0.5rem;

      p {
        color: ${colors.red};
        padding-top: 1rem;
      }

      img {
        width: 1rem;
        height: 1rem;
        position: absolute;
        bottom: 0.5rem;
        right: 0.5rem;
      }
    }
  }

  ${ButtonStyles} {
    width: 100%;
    height: 2rem;
  }

  .cartNotice {
    color: ${colors.blackAmber};
    font-weight: 700;
    font-size: 1.125rem;
    text-align: center;
  }

  @media (max-width: 700px) {
    width: 20.5rem;

    li {
      width: 19.5rem;
    }
  }
`;

export const ImageFood = styled.img`
  max-width: 5rem;
  object-fit: cover;
`;

export const BinStyles = styled.img`
  max-width: 5rem;
  height: 5rem;
  cursor: pointer;
`;

export const Price = styled.p`
  display: flex;
  font-weight: 700;
  justify-content: space-between;
  margin: 2.5rem 0 1rem 0;
  color: ${colors.blackAmber};
`;
