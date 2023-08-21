import { Request, Response } from "express"
import createCustomerService from "../../services/customers/createCustomer.service"
import { getCustomersService } from "../../services/customers/getCustomrts.service"

export const createCustomerController = async (req: Request, res: Response) => {
  const customer = await createCustomerService(req.body)
  return res.status(201).json(customer)
}

export const getCustomersController = async (req: Request, res: Response) => {
  const customers = await getCustomersService()
  console.log(req.query)
  return res.status(200).json({customers})
}