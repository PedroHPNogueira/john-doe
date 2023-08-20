import AppDataSource from "../../data-source"
import Customer from "../../entities/customers.entitie"

export const getCustomersService = async (): Promise<Customer[]> => {
  const customersRepository = AppDataSource.getRepository(Customer)

  const customers: Customer[] = await customersRepository.createQueryBuilder("customers").getMany()

  return customers
}
