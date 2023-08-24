import { createContext, useState } from "react"
import { ICustomerInCreation } from "../interfaces/customerInterfaces"

interface IUserContextProps {
  children: React.ReactNode
}

interface ICustomerContext {
  setCustomerInCreation: React.Dispatch<React.SetStateAction<ICustomerInCreation>>
  customerInCreation: ICustomerInCreation
  setSelectedOption: React.Dispatch<React.SetStateAction<string | undefined>>
  setCustomSelectedOptionPrev: React.Dispatch<React.SetStateAction<string>>
  setCustomSelectedOption: React.Dispatch<React.SetStateAction<string>>
  selectedOption: string | undefined
  customSelectedOptionPrev: string
  customSelectedOption: string
}

export const RegisterContext = createContext<ICustomerContext>({} as ICustomerContext)

const RegisterProvider = ({ children }: IUserContextProps) => {
  const [customerInCreation, setCustomerInCreation] = useState<ICustomerInCreation>({})
  const [selectedOption, setSelectedOption] = useState<string | undefined>()
  const [customSelectedOptionPrev, setCustomSelectedOptionPrev] = useState("")
  const [customSelectedOption, setCustomSelectedOption] = useState("")

  return (
    <RegisterContext.Provider
      value={{
        customerInCreation,
        setCustomerInCreation,
        selectedOption,
        setCustomSelectedOption,
        setCustomSelectedOptionPrev,
        setSelectedOption,
        customSelectedOption,
        customSelectedOptionPrev,
      }}
    >
      {children}
    </RegisterContext.Provider>
  )
}

export default RegisterProvider
