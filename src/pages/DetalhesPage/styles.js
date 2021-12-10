import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  background: ${(props) => `url(${props.image}) no-repeat top center`};
  background-color: rgba(0, 0, 0, 0.5);

  -moz-box-shadow: inset 0 0 10px #000000;
  -webkit-box-shadow: inset 0 0 100px #000000;
  box-shadow: inset 0 0 500px #000000;

  height: 100vh;

  h1 {
    font-size: 5rem;
    font-weight: 900;
    font-family: "raleway";

    color: #fff;
    -webkit-text-stroke-width: 1px; /* largura da borda */
    -webkit-text-stroke-color: #000; /* cor da borda */

    margin: 2rem 0 3rem 0;
  }
`;
