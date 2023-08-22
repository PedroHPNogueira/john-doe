import * as yup from "yup"

export const customerInfoSerializer = yup.object().shape({
  name: yup.string().required("Campo obrigatório!"),
  email: yup.string().email("Email inválido!").required("Campo obrigatório!"),
  cpf: yup.string().required("Campo obrigatório!").matches(/[^\d]/g, "CPF Inválido!"),
})

export const favoriteColorSerializer = yup.object().shape({
  favoriteColor: yup
    .string()
    .required("Campo obrigatório!")
    .matches(/^[a-fA-F0-9]{6}$/, "Cor inválida!")
})

export const customColorSerializer = yup.object().shape({
  customColor: yup
    .string()
    .required("Campo obrigatório!")
    .matches(/^[a-fA-F0-9]{6}$/, "Cor inválida!")
})

export const notesSerializer = yup.object().shape({
  notes: yup.string().required("Campo obrigatório!")
})