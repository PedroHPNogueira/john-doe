import styled from "styled-components"

export const CustomerInfoDiv = styled.main`
  form {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 22px;
  }

  form .twoInputsDiv {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 51px;

    width: 100%;
  }

  form .inputDiv {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;

    text-align: start;
  }

  form .inputDiv input {
    height: 37px;
    background-color: var(--grey-0);
    border-radius: 4px;
    padding-left: 10px;
  }

  form .inputDiv label {
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    margin-bottom: 10px;
    margin-left: 10px;
  }

  form .inputDiv p {
    position: absolute;
    bottom: -16px;
    left: 5px;
    color: #ff2222;
    font-size: 14px;
    font-weight: 500;
  }

  button {
    position: absolute;
    bottom: -193px;
    right: -40px;
  }

  button:hover{
    cursor: pointer;
    background-color: #6464c4;
  }

  @media (max-width: 1400px) {
    form {
      gap: 20px;
    }

    form .twoInputsDiv {
      gap: 45px;
    }

    form .inputDiv input {
      height: 33px;
      padding-left: 9px;
    }

    form .inputDiv label {
      font-size: 15px;
      line-height: 22px;
    }

    form .inputDiv p {
      font-size: 13px;
    }

    button {
      bottom: -181px;
      right: -40px;
    }
  }

  @media (max-width: 1250px) {
    form {
      gap: 16px;
    }

    form .twoInputsDiv {
      gap: 36px;
    }

    form .inputDiv input {
      height: 27px;
      border-radius: 3px;
      padding-left: 7px;
      font-size: 12px;
    }

    form .inputDiv label {
      font-size: 12px;
      line-height: 17px;
      margin-bottom: 7px;
    }

    form .inputDiv p {
      bottom: -14px;
      left: 3px;
      color: #ff2222;
      font-size: 10px;
    }

    button {
      bottom: -150px;
      right: -35px;
    }
  }

  @media (max-width: 1000px) {
    form {
      gap: 13px;
    }

    form .twoInputsDiv {
      gap: 28px;
    }

    form .inputDiv input {
      height: 20px;
      border-radius: 2px;
      padding-left: 6px;
    }

    form .inputDiv label {
      font-size: 9px;
      line-height: 14px;
      margin-bottom: 6px;
    }

    form .inputDiv p {
      bottom: -9px;
      left: 3px;
      font-size: 8px;
    }

    button {
      bottom: -125px;
      right: -20px;
    }
  }
`
