import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { useContext, useEffect } from "react"
import { yupResolver } from "@hookform/resolvers/yup"

import { IFavoriteColor } from "../../../../interfaces/customerInterfaces"
import { favoriteColorSerializer } from "../../../../schemas/userSchemas"
import { RegisterContext } from "../../../../contexts/registerContext"
import { Button } from "../../../../styles/button"

export const FixedColorsForm = () => {
  const fixedColorAndValues = [
    {
      colorName: "Vermelho",
      colorValue: "ff0000",
    },
    {
      colorName: "Laranja",
      colorValue: "ffa500",
    },
    {
      colorName: "Amarelo",
      colorValue: "ffff00",
    },
    {
      colorName: "Verde",
      colorValue: "008000",
    },
    {
      colorName: "Azul",
      colorValue: "0000ff",
    },
    {
      colorName: "Violeta",
      colorValue: "9400d3",
    },
  ]

  const navigate = useNavigate()
  const {
    customerInCreation,
    setCustomerInCreation,
    selectedOption,
    setSelectedOption,
    setCustomSelectedOption,
  } = useContext(RegisterContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFavoriteColor>({
    resolver: yupResolver(favoriteColorSerializer),
    defaultValues: {
      favoriteColor: customerInCreation.favoriteColor,
    },
  })

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value)
  }

  const submitFavoriteColor = (data: IFavoriteColor) => {
    const color = data.favoriteColor.toLowerCase()
    let customer = customerInCreation
    customer = { ...customerInCreation, favoriteColor: color }
    setCustomerInCreation(customer)

    navigate("/register/notes")
  }

  useEffect(() => {
    const colorsArray: string[] = []

    fixedColorAndValues.forEach(({ colorValue }) => {
      colorsArray.push(colorValue)
    })

    if (customerInCreation.favoriteColor) {
      if (colorsArray.includes(customerInCreation.favoriteColor)) {
        setSelectedOption(customerInCreation.favoriteColor)
      } else {
        setSelectedOption("")
        setCustomSelectedOption(customerInCreation.favoriteColor)
      }
    }
  }, [])

  return (
    <form id="teste" onSubmit={handleSubmit(submitFavoriteColor)}>
      <fieldset>
        <legend>Selecione sua cor favorita:</legend>
        <div>
          {fixedColorAndValues.map((colorAndValue) => {
            return (
              <div>
                <input
                  {...register("favoriteColor")}
                  type="radio"
                  value={colorAndValue.colorValue}
                  checked={selectedOption === colorAndValue.colorValue}
                  onChange={handleOptionChange}
                />
                <label>{colorAndValue.colorName}</label>
              </div>
            )
          })}
          <div>
            <input
              {...register("favoriteColor")}
              type="radio"
              value=""
              checked={selectedOption === ""}
              onChange={handleOptionChange}
            />
            <label>Outra</label>
          </div>
        </div>
        <p>{errors.favoriteColor?.message}</p>
      </fieldset>
      <div className="buttonDiv">
        {selectedOption !== "" ? (
          <>
            <Button
              type="button"
              className="returnButton"
              variant="secondary"
              onClick={() => {
                navigate("/register/identify")
              }}
            >
              Voltar
            </Button>
            <Button className="nextButton" variant="primary" type="submit">
              Próximo passo
            </Button>
          </>
        ) : (
          <></>
        )}
      </div>
    </form>
  )
}
