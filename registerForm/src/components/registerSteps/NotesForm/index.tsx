import { toast } from "react-toastify"
import { useContext, useEffect } from "react"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigate } from "react-router-dom"
import { motion as m } from "framer-motion"

import { MoreAboutDiv } from "./style"
import { Button } from "../../../styles/button"
import { INotes } from "../../../interfaces/customerInterfaces"
import { notesSerializer } from "../../../schemas/userSchemas"
import { RegisterContext } from "../../../contexts/registerContext"
import { createCustomer } from "../../../api"
import { formAnimation } from "../../../animations"

export const NotesForm = () => {
  const navigate = useNavigate()

  const { customerInCreation, setCustomerInCreation } = useContext(RegisterContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<INotes>({
    resolver: yupResolver(notesSerializer),
    defaultValues: {
      notes: customerInCreation.notes,
    },
  })

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCustomerInCreation({ ...customerInCreation, notes: e.target.value })
  }

  const submitNotes = async (data: INotes) => {
    const notes = data.notes
    let customer = customerInCreation
    customer = { ...customerInCreation, notes: notes }
    setCustomerInCreation(customer)

    const customerCreated = await createCustomer(customer)

    if (customerCreated) {
      setCustomerInCreation({})
      navigate("/register/success")
      toast.success("Cadastro realizado com sucesso!")
    }
  }

  useEffect(() => {
    if (
      !customerInCreation.favoriteColor ||
      !customerInCreation.name ||
      !customerInCreation.email ||
      !customerInCreation.cpf
    ) {
      navigate("/register/favoriteColor")
    }
  })

  return (
    <MoreAboutDiv>
      <m.form
        variants={formAnimation}
        animate="enter"
        exit="exit"
        onSubmit={handleSubmit(submitNotes)}
      >
        <div className="inputDiv">
          <label>Deixe aqui suas observaçções:</label>
          <textarea {...register("notes")} onChange={handleChange} />
          <p>{errors.notes?.message}</p>
        </div>
        <Button
          type="button"
          variant="secondary"
          className="returnButton"
          onClick={() => {
            navigate("/register/favoriteColor")
          }}
        >
          Voltar
        </Button>
        <Button variant="primary" className="nextButton" type="submit">
          Finalizar cadastro
        </Button>
      </m.form>
    </MoreAboutDiv>
  )
}
