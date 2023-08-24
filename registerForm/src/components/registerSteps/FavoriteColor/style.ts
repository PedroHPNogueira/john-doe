import styled from "styled-components"

interface IPreviewColor {
  previewColor: string | undefined
  customPreviewColor: string | undefined
}

const definePreviewColor = (
  preview: string | undefined,
  custom: string | undefined
): string | undefined => {
  if (preview === undefined) return

  if (preview === "") {
    return `#${custom}`
  } else {
    return `#${preview}`
  }
}

export const FavoriteColorDiv = styled.main<IPreviewColor>`
  form {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 22px;
  }

  .buttonDiv {
    display: flex;
    flex-direction: row;
  }

  fieldset {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 80px;

    text-align: start;

    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
  }

  fieldset legend {
    margin-bottom: 20px;
    font-weight: 500;
  }

  fieldset > div {
    display: flex;
    flex-direction: row;
    gap: 10px;
  }

  fieldset > div > div {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 3px;
  }

  form p {
    margin-top: 5px;
    color: #ff2222;
    font-size: 14px;
    font-weight: 500;

    margin: 0 auto;
  }

  .customColorInputDiv {
    display: flex;
    align-items: start;
    flex-direction: column;
    height: 60px;
    gap: 5px;
    margin-top: -6px;
    margin-bottom: 30px;

    align-items: center;
  }

  .customColorInputDiv input {
    height: 37px;
    background-color: var(--grey-0);
    border-radius: 4px;
    padding-left: 10px;

    text-align: center;
  }

  .previewDiv {
    width: 100%;
    margin: auto;
    height: 80px;

    border: 2px dashed var(--grey-2);
    background-color: ${({ previewColor, customPreviewColor }) =>
      definePreviewColor(previewColor, customPreviewColor)};
    border-radius: 4px;
  }

  .buttonDiv {
    height: 0px;
  }

  .nextButtonF {
    position: absolute;
    bottom: -197px;
    right: -40px;
  }

  .returnButtonF {
    position: absolute;
    bottom: -197px;
    right: 172px;
  }

  .nextButton {
    position: absolute;
    bottom: -257px;
    right: -40px;
  }

  .returnButton {
    position: absolute;
    bottom: -257px;
    right: 172px;
  }

  button:hover {
    cursor: pointer;
  }

  .nextButton:hover {
    background-color: #6464c4;
  }

  .nextButtonF:hover {
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

    form p {
      font-size: 13px;
    }

    fieldset {
      font-size: 15px;
      line-height: 22px;
    }

    .nextButtonF {
      position: absolute;
      bottom: -177px;
      right: -40px;
    }

    .returnButtonF {
      position: absolute;
      bottom: -177px;
      right: 150px;
    }

    .nextButton {
      position: absolute;
      bottom: -237px;
      right: -40px;
    }

    .returnButton {
      position: absolute;
      bottom: -237px;
      right: 150px;
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

    form p {
      bottom: -14px;
      left: 3px;
      color: #ff2222;
      font-size: 10px;
    }

    .previewDiv {
      height: 50px;
    }

    fieldset {
      font-size: 12px;
      line-height: 17px;
    }

    .customColorInputDiv {
      margin-bottom: 10px;
    }

    .customColorInputDiv input {
      height: 25px;
      width: 20%;
      font-size: 12px;
    }

    .nextButtonF {
      position: absolute;
      bottom: -127px;
      right: -35px;
    }

    .returnButtonF {
      position: absolute;
      bottom: -127px;
      right: 115px;
    }

    .nextButton {
      position: absolute;
      bottom: -187px;
      right: -35px;
    }

    .returnButton {
      position: absolute;
      bottom: -187px;
      right: 115px;
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

    form p {
      bottom: -9px;
      left: 3px;
      font-size: 8px;
    }

    .previewDiv {
      height: 40px;
    }

    fieldset {
      font-size: 10px;
      line-height: 14px;
    }
    
    .customColorInputDiv input {
      height: 25px;
      width: 20%;
      font-size: 12px;
    }

    .nextButtonF {
      position: absolute;
      bottom: -87px;
      right: -20px;
    }

    .returnButtonF {
      position: absolute;
      bottom: -87px;
      right: 100px;
    }

    .nextButton {
      position: absolute;
      bottom: -147px;
      right: -20px;
    }

    .returnButton {
      position: absolute;
      bottom: -147px;
      right: 100px;
    }
  }
`
