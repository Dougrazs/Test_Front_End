import styled from "styled-components";

export const Container = styled.div`
  background: black;
`;

export const Critic = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 16px;
    font-weight: 700;
  }

  h2 {
    margin-left: 1rem;

    font-weight: 600;

    background-color: #6c3;
    color: #fff;

    padding: 5px;
    border-radius: 5px;
  }
`;
