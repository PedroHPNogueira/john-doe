import { useForm } from "react-hook-form"
import { CustomerInfoDiv } from "./style"
import { useState, useContext } from "react"
import { ICustomerInfo } from "../../../interfaces/customerInterfaces"
import { RegisterContext } from "../../../contexts/registerContext"
import { useNavigate } from "react-router-dom"
import { customerInfoSerializer } from "../../../schemas/userSchemas"
import { yupResolver } from "@hookform/resolvers/yup"
import { Button } from "../../../styles/button"

export const CustomerInfo = () => {
  const [cpf, setCpf] = useState("")
  const {  customerInCreation, setCustomerInCreation } = useContext(RegisterContext)
  const navigate = useNavigate()

  const submitCustomerInfo = (data: ICustomerInfo) => {
    console.log("oi")
    let customer = customerInCreation
    customer = {...customerInCreation,...data}
    setCustomerInCreation(customer)

    navigate("/register/favoriteColor")
}

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICustomerInfo>({
    resolver: yupResolver(customerInfoSerializer),
    defaultValues: {
      name: customerInCreation.name,
      email: customerInCreation.email,
      cpf: customerInCreation.cpf,
    },
  })

  const formatCPF = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cpfRaw: string = e.target.value.replace(/[^\d]/g, "")
    const cpf = cpfRaw.slice(0, 11)

    setCpf(cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"))
  }

  return (
    <CustomerInfoDiv>
      <form
      /* variants={cardsAnimations}  */
      /* animate="enter"
      exit="exit" */
      onSubmit={handleSubmit(submitCustomerInfo)}
      >
        <div className="inputDiv">
          <label>Nome</label>
          <input type="text" {...register("name")} placeholder="Cristiano Ronaldo dos Santos Aveiro" />
          <p>{errors.name?.message}</p>
        </div>
        <div className="twoInputsDiv">
          <div className="inputDiv">
            <label>Email</label>
            <input type="text" {...register("email")} placeholder="example@mail.com" />
            <p>{errors.email?.message}</p>
          </div>
          <div className="inputDiv">
            <label>CPF</label>
            <input
              type="text"
              value={cpf}
              {...register("cpf")}
              onChange={formatCPF}
              placeholder="12345678900"
            />
            <p>{errors.cpf?.message}</p>
          </div>
        </div>
        <Button variant="primary" type="submit">
          Próximo passo
        </Button>
      </form>
    </CustomerInfoDiv>
  )
}
