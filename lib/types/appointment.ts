export type AppointmentType =
  | 'General Checkup'
  | 'Chronic Condition Follow-Up'
  | 'Vaccination & Immunization'
  | 'Mental Health Consultation'

export type FormData = {
  appointment_type: AppointmentType | ''
  appointment_date: Date | undefined
  appointment_time: string | null
}
