import { Address, Contact } from './person'

export type Provider = {
  id: number
  first_name: string | null
  last_name: string | null
  contact: Contact[] | null
  address: Address[] | null
}
