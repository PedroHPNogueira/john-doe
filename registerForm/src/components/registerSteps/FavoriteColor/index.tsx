import { FavoriteColorDiv } from "./style"
import { FixedColorsForm } from "./FixedColorsForm"
import { useContext, useEffect } from "react"
import { RegisterContext } from "../../../contexts/registerContext"
import { CustomColorsForm } from "./CustonColorsForm"
import { useNavigate } from "react-router-dom"

export const FavoriteColorForm = () => {
  const navigate = useNavigate()

  const { selectedOption, customSelectedOption, customerInCreation } = useContext(RegisterContext)

  useEffect(() => {
    if (!customerInCreation.name) {
      navigate("/register/identify")
    }
  })

  return (
    <FavoriteColorDiv previewColor={selectedOption} customPreviewColor={customSelectedOption}>
      <FixedColorsForm/>
      <CustomColorsForm/>
      <div className="previewDiv" />
    </FavoriteColorDiv>
  )
}
