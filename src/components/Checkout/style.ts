import styled from "styled-components";

import { CartContainer, SideBar } from "../Cart/style";
import { colors } from "../../styles/styles";
import { ButtonStyles } from "../Button/styled";

export const MessageContainer = styled(CartContainer)`
  display: flex;
`;

export const CompletionMessage = styled(SideBar)`
  color: ${colors.amber};

  p {
    font-size: 0.875rem;
    line-height: 1.375rem;
    padding-top: 1rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;

  ${ButtonStyles} {
    margin-bottom: 0.8rem;
  }
`;

export const OrderContainer = styled(CartContainer)`
  display: none;

  .is-open {
    display: flex;
  }
`;

export const FormBar = styled(SideBar)`
  p {
    color: ${colors.amber};
    font-weight: bold;
    margin-bottom: 16px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  label {
    margin: 8px 0;
    color: ${colors.amber};
    font-weight: bold;
    font-size: 14px;
  }
  input {
    height: 32px;
    background-color: ${colors.blackAmber};
    border: none;
    border-radius: 0.5rem;
    font-size: 14px;
    font-weight: bold;
    padding-left: 8px;
    &:focus {
      outline: none;
    }
    &.error {
      border: 3px solid gold;
    }
  }

  small {
    color: ${colors.amber};
  }
`;

export const InputNumbers = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  column-gap: 34px;
  div {
    margin-top: 8px;
  }

  label {
    color: ${colors.amber};
    font-weight: bold;
    font-size: 14px;
  }

  input {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    font-weight: 700;
    padding-left: 0.5rem;
    height: 2rem;
    width: 100%;
    background-color: ${colors.blackAmber};
    border: none;
    border-radius: 0.5rem;

    &:focus {
      outline: none;
    }

    &.error {
      border: 3px solid gold;
    }
  }

  small {
    color: ${colors.amber};
  }
`;

export const ButtonPaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 0.7rem;
    height: 2rem;
    font-size: 0.875rem;
    font-weight: 700;
    border: none;
    border-radius: 0.5rem;
    background-color: ${colors.blackAmber};
    color: ${colors.red};
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const OrderConfirm = styled(CartContainer)`
  display: flex;
`;
