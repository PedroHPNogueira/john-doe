export interface ICustomerRequest {
  name: string
  cpf: string
  email: string
  favoriteColor: string
  notes: string
}

export interface ICustomer extends ICustomerRequest {
  id: string
  createdAt: Date
  updatedAt: Date
}
