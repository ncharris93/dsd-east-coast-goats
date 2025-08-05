import { EmergencyContact } from './auth'

export type Appointment = {
  appointment_time: string | null
}
export type Message = {
  content: string
  sender: string
}

export interface Patient {
  id: number
  personId: number | null
  dateOfBirth: string | null
  sex: string | null
  insuranceFlag: boolean | null
  emergencyContact: EmergencyContact | null
}

export type PatientName = string
export type Provider = string

export enum AppointmentType {
  chronicCondition = 'Chronic Condition Follow-Up',
  mentalHealth = 'Mental Health Consultation',
  vaccinationImmunization = 'Vaccination & Immunization',
  generalCheckup = 'General Checkup',
}

export enum AppointmentStatus {
  scheduled = 'scheduled',
  completed = 'completed',
  noShow = 'no-show',
  cancelled = 'cancelled',
}

export interface PatientAppointment {
  id: number
  patientId: number | null
  providerId: number | null
  type: AppointmentType | null
  datePaid: string | null
  time: string | null
  status: AppointmentStatus | null
}

export interface MedicalVisit {
  id: number
  patientId: number | null
  doctorId: number | null
  allergies: string[] | null
  prescriptions: string[] | null
  summaryNotes: string | null
  followUpNeeded: string | null
}
