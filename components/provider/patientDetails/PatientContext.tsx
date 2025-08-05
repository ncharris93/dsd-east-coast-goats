'use client'

import React, { createContext } from 'react'

import type { Address, Person } from '@/lib/types/auth'
import type {
  MedicalVisit,
  Patient,
  PatientAppointment,
} from '@/lib/types/patient'

export interface PatientContextProps {
  children: React.ReactNode
  patient: Patient | null
  appointments: PatientAppointment[] | null
  person: Person | null
  medicalVisit: MedicalVisit | null
  address: Address | null
  id: number
}

interface PatientContextType {
  patient: Patient | null
  appointments: PatientAppointment[] | null
  person: Person | null
  medicalVisit: MedicalVisit | null
  address: Address | null
  id: number
}
export const PatientContext = createContext<PatientContextType>({
  patient: null,
  appointments: null,
  person: null,
  medicalVisit: null,
  address: null,
  id: NaN,
})

export default function PatientContextProvider({
  children,
  patient,
  appointments,
  person,
  medicalVisit,
  address,
  id,
}: PatientContextProps) {
  return (
    <PatientContext.Provider
      value={{ patient, appointments, person, medicalVisit, address, id }}
    >
      {children}
    </PatientContext.Provider>
  )
}
