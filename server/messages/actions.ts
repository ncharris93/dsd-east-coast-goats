'use server'

import { createClient } from '@/lib/supabase/server'
import { SendMessages } from '@/lib/types/messages'

export async function sendMessage(message: SendMessages) {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from('messages')
    .insert([message])
    .select()

  if (error) {
    console.error('Error sending message: ', error)
    throw new Error('Failed to send message')
  }

  return data?.[0]
}
