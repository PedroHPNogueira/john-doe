import { BackgroudDiv } from "./style"

interface IBackgroundProps {
  children: React.ReactElement
}

export const Background = ({ children }: IBackgroundProps) => {
  return (
    <BackgroudDiv>
      <div className="logoDiv">
        <p>JD Business</p>
      </div>
      <div className="secondDiv"></div>
      {children}
    </BackgroudDiv>
  )
}
