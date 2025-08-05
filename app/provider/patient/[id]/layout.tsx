import React from 'react'

import PatientContextProvider from '@/components/provider/patientDetails/PatientContext'
import PatientDetailsSidebar from '@/components/provider/patientDetails/PatientDetailsSidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import type { ActionResponse } from '@/lib/types/auth'
import { getAppointments } from '@/server/appointment/queries'
import { getAddress, getPerson } from '@/server/auth/queries'
import { getPatient } from '@/server/patient/queries'
import { getMedicalVisit } from '@/server/patient/queries'

function assertData<T>(result: ActionResponse<T>, message: string): T {
  if (!result.data) {
    throw new Error(message)
  }
  return result.data
}

export default async function Layout({
  params,
  patientDetails,
}: {
  children: React.ReactNode
  params: Promise<{ id: number }>
  patientDetails: React.ReactNode
}) {
  const { id } = await params
  const patient = assertData(await getPatient(id), 'Patient not found')
  const person = assertData(
    await getPerson(patient.personId),
    'Person not found',
  )
  const medicalVisit = assertData(
    await getMedicalVisit(patient.id),
    'Medical visit not found',
  )
  const appointments = assertData(
    await getAppointments(patient.id),
    'Appointments not found',
  )
  const address = assertData(await getAddress(person.id), 'Address not found')

  return (
    <PatientContextProvider
      patient={patient}
      appointments={appointments}
      person={person}
      medicalVisit={medicalVisit}
      address={address}
      id={id}
    >
      <SidebarProvider>
        <PatientDetailsSidebar patientId={id} />
        <main className=" w-full bg-background">
          <SidebarTrigger className="hover:bg-foreground cursor-pointer" />
          {patientDetails}
        </main>
      </SidebarProvider>
    </PatientContextProvider>
  )
}
