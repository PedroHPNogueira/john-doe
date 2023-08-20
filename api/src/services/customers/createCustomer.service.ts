import AppDataSource from "../../data-source"
import Customer from "../../entities/customers.entitie"
import AppError from "../../errors/AppError"
import { ICustomer, ICustomerRequest } from "../../interfaces/customers.interfaces"
import { customerSerializer } from "../../serializers/customers.serializer"

const createCustomerService = async (customerPayload: ICustomerRequest): Promise<ICustomer> => {
  const customerRepository = AppDataSource.getRepository(Customer)

  const customerVerify: Customer[] = await customerRepository.find({
    where: [{ email: customerPayload.email }, { cpf: customerPayload.cpf }]
  })

  if (customerVerify[0]) {
    throw new AppError("user already exists", 409)
  }

  const customer = customerRepository.create(customerPayload)
  await customerRepository.save(customer)

  return await customerSerializer.validate(customer, {
    stripUnknown: true,
  })
}

export default createCustomerService
