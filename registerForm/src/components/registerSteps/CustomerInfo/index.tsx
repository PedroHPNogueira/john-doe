import { useState, useContext, useEffect } from "react"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigate } from "react-router-dom"
import { motion as m } from "framer-motion"

import { formAnimation } from "../../../animations"
import { CustomerInfoDiv } from "./style"
import { Button } from "../../../styles/button"
import { ICustomerInfo } from "../../../interfaces/customerInterfaces"
import { RegisterContext } from "../../../contexts/registerContext"
import { customerInfoSerializer } from "../../../schemas/userSchemas"
import { verifyIfCustomerExists } from "../../../api"

export const CustomerInfo = () => {
  const [cpf, setCpf] = useState("")
  const { customerInCreation, setCustomerInCreation } = useContext(RegisterContext)
  const navigate = useNavigate()

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
    if (!e.target.value) return
    const cpfRaw: string = e.target.value.replace(/[^\d]/g, "")
    const cpf = cpfRaw.slice(0, 11)

    setCpf(cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"))
  }

  const submitCustomerInfo = async (data: ICustomerInfo) => {
    data.cpf = data.cpf.replace(/[^\d]/g, "")

    const customerVerify = await verifyIfCustomerExists(data.cpf, data.email)

    if (!customerVerify) return

    if (customerVerify?.email) {
      toast.error("Email já cadastrado!")
      return
    }

    if (customerVerify?.cpf) {
      toast.error("CPF já cadastrado!")
      return
    }

    let customer = customerInCreation
    customer = { ...customerInCreation, ...data }
    setCustomerInCreation(customer)

    navigate("/register/favoriteColor")
  }

  useEffect(() => {
    formatCPF({ target: { value: customerInCreation.cpf } } as React.ChangeEvent<HTMLInputElement>)
  }, [])

  return (
    <CustomerInfoDiv>
      <m.form
        variants={formAnimation}
        animate="enter"
        exit="exit"
        onSubmit={handleSubmit(submitCustomerInfo)}
      >
        <div className="inputDiv">
          <label>Nome</label>
          <input
            type="text"
            {...register("name")}
            placeholder="Cristiano Ronaldo dos Santos Aveiro"
          />
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
      </m.form>
    </CustomerInfoDiv>
  )
}
