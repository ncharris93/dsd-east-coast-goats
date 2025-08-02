import 'server-only'

import { createClient } from '@/lib/supabase/server'

export async function getProvider() {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('person')
    .select(
      `
      id, first_name, last_name,
      contact:contact(contact_type, contact_value),
      address:address(streeta, city, address_state, zip_code)
    `,
    )
    .eq('role', 'provider')
    .limit(1)
    .single()

  if (error) {
    console.error(error.message)
    throw new Error('Failed to fetch provider')
  }

  return data
}
