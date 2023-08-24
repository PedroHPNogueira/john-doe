import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"
import { BsPersonFill as Person } from "react-icons/bs"
import { CgFileDocument as Document } from "react-icons/cg"
import { IoMdColorPalette as ColorPalete } from "react-icons/io"

import { RegisterMain } from "./styles"
import { Background } from "../../components/Background"

export const RegisterPage = () => {
  const location = useLocation()

  useEffect(() => {
    const classes = ["completed", "inProgress"]

    const personSVG = document.getElementById("personSVG")
    const paleteSVG = document.getElementById("paleteSVG")
    const documentSVG = document.getElementById("documentSVG")

    personSVG?.classList.remove(...classes)
    paleteSVG?.classList.remove(...classes)
    documentSVG?.classList.remove(...classes)

    if (location.pathname === "/register/identify") {
      personSVG?.classList.add("inProgress")
    } else if (location.pathname === "/register/favoriteColor") {
      personSVG?.classList.add("completed")
      paleteSVG?.classList.add("inProgress")
    } else {
      personSVG?.classList.add("completed")
      paleteSVG?.classList.add("completed")
      documentSVG?.classList.add("inProgress")
    }
  }, [location.pathname])

  return (
    <RegisterMain>
      <Background>
        <div className="formContainer">
          <h1>CADASTRO</h1>
          <div className="overview">
            <div>
              <div id="personSVG" className="inProgress">
                <Person />
              </div>
              <p>Identificação</p>
            </div>
            <div>
              <div id="paleteSVG" className="homeSVG">
                <ColorPalete />
              </div>
              <p>Cor favorita</p>
            </div>
            <div>
              <div id="documentSVG" className="documentSVG">
                <Document />
              </div>
              <p>Observações</p>
            </div>
          </div>
          <Outlet />
        </div>
      </Background>
    </RegisterMain>
  )
}
