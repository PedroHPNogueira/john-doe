import { createContext, useState } from "react"
import { ICustomerInCreation } from "../interfaces/customerInterfaces"
/* import { useNavigate } from "react-router" */

interface IUserContextProps {
  children: React.ReactNode
}

interface ICustomerContext {
  /* submitFavoriteColor: (data:IFavoriteColor) => void,
    submitNotes: (data: INotes) => void,
    startNewRegister: () => void, */
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

  /* const navigate = useNavigate() */

  /* const submitAddressInfo = (data: IAddress) => {
        let user = {...userInCreation, address: data}
        setUserInCreation(user)

        navigate("/register/about")
    }

    const submitMoreAbout = (data: IMoreAbout) => {
        let user = {...userInCreation, moreAbout: data.MoreAbout}
        setUserInCreation(user)

        const users = usersCreated
        users.unshift(user)
        setUsersCreated(users)
        console.log(usersCreated[0])
        navigate("/created")
    }

    const startNewRegister =() => {
        setUserInCreation({})

        navigate("/register/identify")
    } */

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
