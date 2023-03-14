import {CustomerType} from "./customerType";

export interface Customer {
  id?:string
  nameCustomer?: string
  dayOfBirth?: string
  sex?:string
  cmnd?: string
  phone?: string
  email?: string
  typeCustomer?: CustomerType
  address?: string

}
