import { useContext } from "react"
import { RegisterContext } from "../../../../contexts/registerContext"
import { Button } from "../../../../styles/button"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { ICustomColor } from "../../../../interfaces/customerInterfaces"
import { yupResolver } from "@hookform/resolvers/yup"
import { customColorSerializer } from "../../../../schemas/userSchemas"

export const CustomColorsForm = () => {
  const navigate = useNavigate()
  const {
    selectedOption,
    customSelectedOptionPrev,
    setCustomSelectedOptionPrev,
    setCustomSelectedOption,
    customerInCreation,
    setCustomerInCreation,
  } = useContext(RegisterContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICustomColor>({
    resolver: yupResolver(customColorSerializer),
  })

  const handleCustomValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = event.target.value.slice(0, 6)
    setCustomSelectedOptionPrev(value)
    if (value.match(/^[a-fA-F0-9]{6}$/)) {
      setCustomSelectedOption(value)
    } else {
      setCustomSelectedOption("")
    }
  }

  const submitCustomColor = (data: ICustomColor) => {
    const color = data.customColor.toLowerCase()
    let customer = customerInCreation
    customer = { ...customerInCreation, favoriteColor: color }
    setCustomerInCreation(customer)

    navigate("/register/notes")
  }

  return (
    <form
      className="customColorInputDiv"
      onSubmit={handleSubmit(submitCustomColor)}
    >
      {selectedOption === "" ? (
        <>
          <input
            type="text"
            value={customSelectedOptionPrev}
            {...register("customColor")}
            onChange={handleCustomValueChange}
            placeholder="8c0612"
          />
          <p>{errors.customColor?.message}</p>
          <div className="buttonDiv">
            <Button
              type="button"
              className="returnButtonF"
              variant="secondary"
              onClick={() => {
                navigate("/register/identify")
              }}
            >
              Voltar
            </Button>
            <Button className="nextButtonF" variant="primary" type="submit">
              Próximo passo
            </Button>
          </div>
        </>
      ) : (
        <></>
      )}
    </form>
  )
}
