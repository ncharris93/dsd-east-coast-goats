import type { User } from '@supabase/supabase-js'
import { cache } from 'react'

import { createClient } from '@/lib/supabase/server'
import { createClient } from '@/lib/supabase/server'
import { Tables } from '@/lib/supabase/types'
import { ActionResponse } from '@/lib/types/auth'
import { ActionResponse, Person } from '@/lib/types/auth'

export const getCurrentUser: () => Promise<ActionResponse<User>> = cache(
  async () => {
    const supabase = await createClient()

    try {
      const {
        data: { session },
      } = await supabase.auth.getSession()

      if (!session) {
        return {
          success: true,
          data: null,
          message: 'No active user session found',
        }
      }
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser()
      if (error) {
        return {
          success: false,
          message: error?.message || 'User authentication failed',
          error: error?.name || 'Authentication',
        }
      }
      return {
        success: true,
        data: user,
        message: 'Retrieved the current user',
      }
    } catch (err) {
      console.error('Get current user error:', err)
      return {
        success: false,
        message: 'An error occurred while retrievig the current user',
        error: 'Failed to get current user',
      }
    }
  },
)

export async function getCurrentPerson(
  authId: string,
): Promise<ActionResponse<Person>> {
  const supabase = await createClient()

  try {
    const { data, error } = await supabase
      .from('person')
      .select('*')
      .eq('person_uuid', authId)
      .single()

    if (error) {
      return {
        success: false,
        message: error.message,
        error: error.name,
      }
    }

    const person = {
      id: data.id,
      firstName: data.first_name,
      lastName: data.last_name,
      role: data.role,
      createdAt: data.created_at,
      updatedAt: data.updated_at,
    }

    return {
      success: true,
      data: person,
      message: 'Retrieved the current person',
    }
  } catch (err) {
    console.error('Get current user error:', err)
    return {
      success: false,
      message: 'An error occurred while getting the current person',
      error: 'Failed to get current person',
    }
  }
}

export async function createUser() {}

export const getCurrentUser: () => Promise<ActionResponse<User>> = cache(
  async () => {
    // await mockDelay(1000)
    const supabase = await createClient()

    try {
      const {
        data: { session },
      } = await supabase.auth.getSession()

      console.log('current user session:', session)

      if (session) {
        const {
          data: { user },
          error,
        } = await supabase.auth.getUser()

        console.log('current user data:', user)

        if (error) {
          return {
            success: false,
            message: error?.message || 'User authentication failed',
            error: error?.name || 'Authentication',
          }
        }

        return {
          success: true,
          data: user,
          message: 'Retrieved the current user',
        }
      } else {
        return {
          success: true,
          data: null,
          message: 'No active user session found',
        }
      }
    } catch (err) {
      console.error('Get current user error:', err)
      return {
        success: false,
        message: 'An error occurred while retrieving  the current user',
        error: 'Failed to get current user',
      }
    }
  },
)

export const getUserByEmail = cache(async () => {})

export const getUsers = cache(async () => {})

export async function deleteUser() {}

export async function updateUser() {}

export async function getCurrentPerson(
  userId: string,
): Promise<ActionResponse<Tables<'person'>>> {
  const supabase = await createClient()

  try {
    const { data, error } = await supabase
      .from('person')
      .select('*')
      .eq('person_uuid', userId)
      .single()

    console.log('get current person data:', data)

    if (error) {
      return {
        success: false,
        message: error.message,
        error: error.name,
      }
    }

    return {
      success: true,
      data: data,
      message: 'Retrieved the current person',
    }
  } catch (err) {
    console.error('Get current user error:', err)
    return {
      success: false,
      message: 'An error occurred while getting the current person',
      error: 'Failed to get current person',
    }
  }
}
