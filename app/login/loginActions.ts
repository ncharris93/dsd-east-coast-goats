'use client'

import { createClient } from '@/lib/supabase/client'
import { showError, showSuccess } from '@/utils/toast'

type LoginInputs = {
  email: string
  password: string
}

export async function loginAction({
  email,
  password,
}: LoginInputs): Promise<boolean> {
  const supabase = createClient()
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    showError(error.message)
    return false
  }

  showSuccess('Login Successful')
  return true
}
