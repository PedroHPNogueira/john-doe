import { useNavigate } from "react-router-dom"
import { useContext, useEffect } from "react"
import { motion as m } from "framer-motion"

import { FavoriteColorDiv } from "./style"
import { FixedColorsForm } from "./FixedColorsForm"
import { CustomColorsForm } from "./CustonColorsForm"
import { RegisterContext } from "../../../contexts/registerContext"
import { formAnimation } from "../../../animations"

export const FavoriteColorForm = () => {
  const navigate = useNavigate()

  const { selectedOption, customSelectedOption, customerInCreation } = useContext(RegisterContext)

  useEffect(() => {
    if (!customerInCreation.name) {
      navigate("/register/identify")
    }
  })

  return (
    <m.div variants={formAnimation} animate="enter" exit="exit">
      <FavoriteColorDiv previewColor={selectedOption} customPreviewColor={customSelectedOption}>
        <FixedColorsForm />
        <CustomColorsForm />
        <div className="previewDiv" />
      </FavoriteColorDiv>
    </m.div>
  )
}
