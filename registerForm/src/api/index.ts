import { toast } from "react-toastify"
import axios from "axios"
import { AxiosRequestConfig } from "axios"
import { ICustomer, ICustomerInCreation } from "../interfaces/customerInterfaces"

interface ICustomerExists {
  email: boolean
  cpf: boolean
}

const baseUrl = import.meta.env.VITE_API_URL

export const verifyIfCustomerExists = async (
  cpf: string,
  email: string
): Promise<ICustomerExists | void> => {
  const axiosConfig: AxiosRequestConfig = {
    method: "get",
    url: `${baseUrl}/customers/verify?cpf=${cpf}&email=${email}`,
  }

  try {
    const { data } = await axios(axiosConfig)
    return data
  } catch (err) {
    console.log(err)
    toast.error("Erro ao verificar se o cliente já existe!")
  }
}

export const createCustomer = async (customer: ICustomerInCreation): Promise<ICustomer | void> => {
  const axiosConfig: AxiosRequestConfig = {
    method: "post",
    url: `${baseUrl}/customers`,
    headers: {
      "Content-Type": "application/json",
    },
    data: customer,
  }

  try {
    const response = await axios(axiosConfig)
    return response.data
  } catch (err){
    console.log(err)
    toast.error("Erro ao criar o cliente!")
  }
}
