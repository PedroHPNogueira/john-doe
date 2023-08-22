import styled, { css } from "styled-components"

interface IButtonProps {
  variant: string
}

export const Button = styled.button<IButtonProps>`
  ${({ variant }) => {
    const width1440 = "192px"
    const height1440 = "46px"

    const width1280 = "170px"
    const height1280 = "41px"

    const width1024 = "136px"
    const height1024 = "33px"

    const widht768 = "102px"
    const height768 = "25px"

    if (variant === "primary") {
      return css`
        width: ${width1440};
        height: ${height1440};
        border-radius: 4px;

        background-color: var(--color-primary);
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
        color: white;
        transition: 0.2s;

        button:hover {
          cursor: pointer;
          filter: brightness(1.2);
        }

        @media (max-width: 1400px) {
          width: ${width1280};
          height: ${height1280};
        }

        @media (max-width: 1250px) {
          width: ${width1024};
          height: ${height1024};
          font-size: 12px;
          line-height: 17px;
        }

        @media (max-width: 1000px) {
          width: ${widht768};
          height: ${height768};
          font-size: 10px;
          line-height: 15px;
          border-radius: 2px;
        }
      `
    } else if (variant === "secondary") {
      return css`
        width: ${width1440};
        height: ${height1440};
        border-radius: 4px;

        background-color: #8c98a9;
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
        color: white;

        :hover {
          cursor: pointer;
        }

        @media (max-width: 1400px) {
          width: ${width1280};
          height: ${height1280};
        }

        @media (max-width: 1250px) {
          width: ${width1024};
          height: ${height1024};
          font-size: 12px;
          line-height: 17px;
        }

        @media (max-width: 1000px) {
          width: ${widht768};
          height: ${height768};
          font-size: 10px;
          line-height: 15px;
          border-radius: 2px;
        }
      `
    }
  }}
`
