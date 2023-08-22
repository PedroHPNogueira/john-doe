export interface ICustomer{
    name: string,
    email: string,
    cpf: string,
    notes: string,
    favoriteColor: string
}

export interface ICustomerInCreation{
    name?: string,
    email?: string,
    notes?: string,
    cpf?: string,
    favoriteColor?: string
}

export interface IFavoriteColor {
    favoriteColor: string
}

export interface ICustomColor {
    customColor: string
}

export interface INotes {
    notes: string
}

export interface ICustomerInfo {
    name: string,
    email: string,
    cpf: string,
}