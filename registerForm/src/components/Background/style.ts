import styled from "styled-components"

export const BackgroudDiv = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  .logoDiv {
    display: flex;
    width: 52%;
    background-color: var(--color-primary);

    align-items: center;
  }

  .logoDiv > p {
    font-size: 100px;
    opacity: 0.8;
    font-weight: 400;
    color: var(--grey-0);

    margin: auto;
  }

  .secondDiv {
    width: 48%;
    background-color: #f0f0f0;
  }

  @media (max-width: 1250px) {
    .logoDiv > p {
        font-size: 70px;
    }
  }
`
