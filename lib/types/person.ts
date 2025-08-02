export type Contact = {
  contact_type: string | null
  contact_value: string | null
}

export type Address = {
  streeta: string | null
  streetb?: string | null
  city: string | null
  address_state: string | null
  zip_code: string | null
}
