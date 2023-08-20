import { ICustomer } from "./../interfaces/customers.interfaces"
import * as yup from "yup"
import { SchemaOf } from "yup"
import { ICustomerRequest } from "../interfaces/customers.interfaces"

const customerRequestSerializer: SchemaOf<ICustomerRequest> = yup.object().shape({
  name: yup.string().required(),
  cpf: yup.string().required().length(11).matches(/^\d+$/, { message: "cpf must be numbers only" }),
  email: yup.string().required().email(),
  favoriteColor: yup.string().required().length(6).matches(/^[0-9abcdef]+$/i, "invalid hex color"),
  notes: yup.string().required(),
})

const customerSerializer: SchemaOf<ICustomer> = yup.object().shape({
  name: yup.string().required(),
  cpf: yup.string().required().length(11).matches(/^\d+$/, { message: "cpf must be numbers only" }),
  email: yup.string().required().email(),
  favoriteColor: yup.string().required().length(6),
  notes: yup.string().required(),
  updatedAt: yup.date().required(),
  createdAt: yup.date().required(),
  id: yup.string().required(),
})

export { customerRequestSerializer, customerSerializer }
