import styled from "styled-components";

export const BackgroundHeaderHome = styled.div`
  width: 100%;
  height: 22.5rem;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;

  img {
    margin-top: 4rem;
  }
`;

export const HomeTitle = styled.h1`
  text-align: center;
  font-style: italic;
  margin: 10rem 0;

  @media (max-width: 760px) {
    font-size: 1.2rem;
    margin: 5rem 0;
  }
`;

export const ListCard = styled.section`
  margin: 4rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2rem;
  padding: 0.5rem;

  @media (max-width: 1020px) {
    justify-content: center;
  }
`;
