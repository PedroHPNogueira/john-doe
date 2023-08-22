import styled from "styled-components"

export const MoreAboutDiv = styled.div`
  form {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 22px;
  }

  form .inputDiv {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  form .inputDiv textarea {
    height: 201px;
    background-color: var(--grey-0);
    border-radius: 4px;
    padding: 10px;
    text-align: start;

    font-size: 16px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
  }

  form .inputDiv label {
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    margin-bottom: 10px;
  }

  form .inputDiv p {
    position: absolute;
    bottom: -16px;
    left: 5px;
    color: #ff2222;
    font-size: 14px;
    font-weight: 500;
  }

  .nextButton {
    position: absolute;
    bottom: -100px;
    right: -40px;
  }

  .returnButton {
    position: absolute;
    bottom: -100px;
    right: 172px;
  }

  button:hover {
    cursor: pointer;
  }

  .nextButton:hover {
    background-color: #6464c4;
  }

  @media (max-width: 1440px) {
    form {
      gap: 20px;
    }

    form .inputDiv textarea {
      height: 178px;
    }

    form .inputDiv label {
      font-size: 15px;
      line-height: 22px;
    }

    form .inputDiv p {
      font-size: 13px;
    }

    .nextButton {
      position: absolute;
      bottom: -100px;
      right: -40px;
    }

    .returnButton {
      position: absolute;
      bottom: -100px;
      right: 149px;
    }
  }

  @media (max-width: 1250px) {
    form {
      gap: 16px;
    }

    form .inputDiv textarea {
      height: 143px;
      border-radius: 3px;
      padding: 7x;
      font-size: 12px;
    }

    form .inputDiv label {
      font-size: 12px;
      line-height: 17px;
      margin-bottom: 7px;
    }

    form .inputDiv p {
      bottom: -12px;
      left: 4px;
      font-size: 10px;
    }

    .nextButton {
      bottom: -79px;
      right: -32px;
    }

    .returnButton {
      bottom: -79px;
      right: 119px;
    }
  }

  @media (max-width: 1000px) {
    form {
      gap: 12px;
    }

    form .inputDiv textarea {
      height: 112px;
      border-radius: 2px;
      padding: 6px;

      font-size: 9px;
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

    .nextButton {
      bottom: -72px;
      right: -22px;
    }

    .returnButton {
      bottom: -72px;
      right: 95px;
    }
  }
`
