import styled from "styled-components"

export const RegisterMain = styled.main`
  .formContainer {
    box-sizing: border-box;
    position: absolute;
    z-index: 1;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    width: 864px;
    height: 636px;
    padding: 48px 71px 0 51px;
    border-radius: 8px;

    background-color: #fff;
    box-shadow: 0.3px 0.3px 8px #aaa, -0.3px -0.3px 8px #aaa;
    text-align: center;
  }

  .formContainer h1 {
    font-size: 36px;
    font-weight: 500;
    line-height: 48px;
  }

  .formContainer .overview {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 30px;
    justify-content: space-between;

    margin: 40px 40px;
  }

  .formContainer .overview > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
  }

  .formContainer .overview > div > div {
    display: flex;

    height: 44px;
    width: 44px;
    border-radius: 50%;

    background-color: var(--grey-0);
  }

  .formContainer .overview p {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }

  .formContainer .overview div svg {
    height: 19px;
    width: 19px;
    margin: auto;

    color: var(--grey-1);
    transition: 0.5s;
  }

  .formContainer .overview .completed svg {
    color: #00ae63;
  }

  .formContainer .overview .inProgress svg {
    color: var(--color-primary);
  }

  @media (max-width: 1400px) {
    .formContainer {
      width: 768px;
      height: 565px;
      padding: 42px 63px 0 45px;
    }

    .formContainer h1 {
      font-size: 32px;
      line-height: 42px;
    }

    .formContainer .overview {
      gap: 27px;

      margin-top: 35px;
      margin-bottom: 35px;
    }

    .formContainer .overview div > div {
      height: 39px;
      width: 39px;
    }

    .formContainer .overview div svg {
      height: 17px;
      width: 17px;
    }

    .formContainer .overview p {
      font-size: 15px;
      line-height: 22px;
    }
  }

  @media (max-width: 1250px) {
    .formContainer {
      width: 615px;
      height: 452px;
      padding: 34px 51px 0 37px;
    }

    .formContainer h1 {
      font-size: 26px;
      line-height: 34px;
    }

    .formContainer .overview {
      gap: 22px;

      margin-top: 29px;
      margin-bottom: 29px;
    }

    .formContainer .overview div > div {
      height: 32px;
      width: 32px;
    }

    .formContainer .overview p {
      font-size: 12px;
      line-height: 17px;
    }

    .formContainer .overview div svg {
      height: 14px;
      width: 14px;
    }
  }

  @media (max-width: 1000px) {
    .formContainer {
      width: 508px;
      height: 375px;
      padding: 28px 41px 0 30px;
    }

    .formContainer h1 {
      font-size: 22px;
      line-height: 28px;
    }

    .formContainer .overview {
      gap: 18px;

      margin-top: 24px;
      margin-bottom: 24px;
    }

    .formContainer .overview div > div {
      height: 26px;
      width: 26px;
    }

    .formContainer .overview p {
      font-size: 10px;
      line-height: 14px;
    }

    .formContainer .overview div svg {
      height: 12px;
      width: 12px;
    }
  }
`
