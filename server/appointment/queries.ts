import 'server-only'

import { createClient } from '@/lib/supabase/server'
import { Tables } from '@/lib/supabase/types'
import { ActionResponse } from '@/lib/types/auth'
import {
  AppointmentStatus,
  AppointmentType,
  PatientAppointment,
} from '@/lib/types/patient'

type AppointmentRow = { appointment_time: string | null }

export async function getAppointment(
  patientId: number,
): Promise<ActionResponse<Tables<'appointment_booking'>>> {
  const supabase = await createClient()

  try {
    const { data, error } = await supabase
      .from('appointment_booking')
      .select('*')
      .eq('patient_id', patientId)
      .single()

    console.log('get appointment data:', data)

    if (error) {
      return {
        success: false,
        message: error.message || `Something went wrong`,
        error: error.name,
      }
    }

    return {
      success: true,
      data: data,
      message: 'Retrieved current appointment',
    }
  } catch (err) {
    console.error('Get current appointment error:', err)
    return {
      success: false,
      message: 'An error occured retrieving the current appointment',
      error: 'Failed to get current appointment',
    }
  }
}

export async function getAppointments(
  patientId: number,
): Promise<ActionResponse<PatientAppointment[]>> {
  const supabase = await createClient()

  try {
    const { data, error } = await supabase
      .from('appointment_booking')
      .select('*')
      .eq('patient_id', patientId)

    if (error) {
      return {
        success: false,
        message:
          error.message ||
          'Something went wrong with retrieving patient appointments',
        error: error.name,
      }
    }

    const appointments = data.map((appointmentResult) => {
      const appointment = {
        id: appointmentResult.id,
        patientId: appointmentResult.patient_id,
        providerId: appointmentResult.provider_id,
        type: appointmentResult.appointment_type as AppointmentType,
        datePaid: appointmentResult.date_paid,
        time: appointmentResult.appointment_time,
        status: appointmentResult.status as AppointmentStatus,
      }

      return appointment
    })

    console.log('get appointment data:', data)
    console.log('get appointments conversion:', appointments)

    return {
      success: true,
      message: 'Successfully retrieved patient appointments',
      data: appointments,
    }
  } catch (err) {
    console.error('Failed to get patient appointments:', err)
    return {
      success: false,
      message: 'An error occurred retrieving patient appointments',
      error: 'Failed to get patient appointments',
    }
  }
}

// export async function getAppointments() {}

export async function getBookedAppointmentTimes(date: Date) {
  const supabase = await createClient()

  const startOfDay = new Date(date)
  startOfDay.setHours(0, 0, 0, 0)

  const endOfDay = new Date(date)
  endOfDay.setHours(23, 59, 59, 999)

  const { data, error } = await supabase
    .from('appointment_booking')
    .select('appointment_time')
    .gte('appointment_time', startOfDay.toISOString())
    .lte('appointment_time', endOfDay.toISOString())
    .eq('status', 'scheduled')

  if (error) {
    console.error('Error fetching booked times: ', error.message)
    throw error
  }

  if (!data) {
    return []
  }

  return (data as AppointmentRow[])
    .filter((a) => a.appointment_time !== null)
    .map((a) => new Date(a.appointment_time!))
}
