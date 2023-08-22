import AppDataSource from "../../data-source"
import Customer from "../../entities/customers.entitie"
import AppError from "../../errors/AppError"
import QueryString from "qs"

interface IQuery {
  cpf: string
  email: string
}

interface IResponseObject {
  cpf: boolean
  email: boolean
}

export const verifyCustomerExistsService = async (
  query: QueryString.ParsedQs
): Promise<IResponseObject> => {
  const customersRepository = AppDataSource.getRepository(Customer)

  if (!query.cpf || !query.email) {
    throw new AppError("cpf and email are required", 404)
  }

  const verifyCustomerEmail: Customer[] = await customersRepository
    .createQueryBuilder("customers")
    .where("customers.email = :email", { email: query.email })
    .getMany()

  const verifyCustomerCpf: Customer[] = await customersRepository
    .createQueryBuilder("customers")
    .where("customers.cpf = :cpf", { cpf: query.cpf })
    .getMany()

  let responseObject: IResponseObject = {
    cpf: false,
    email: false,
  }

  if (verifyCustomerEmail[0]) responseObject.email = true

  if (verifyCustomerCpf[0]) responseObject.cpf = true

  return responseObject
}
