import React from 'react'

import PatientDetailsSidebar from '@/app/patient/[id]/PatientDetailsSidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { getAppointments } from '@/server/appointment/queries'
import { getAddress, getPerson } from '@/server/auth/queries'
import { getPatient } from '@/server/patient/queries'
import { getMedicalVisit } from '@/server/patient/queries'

import PatientContextProvider from './PatientContext'

export default async function Layout({
  children,
  params,
  patientDetails,
}: {
  children: React.ReactNode
  params: Promise<{ id: number }>
  patientDetails: React.ReactNode
}) {
  const { id } = await params

  console.log('current patient id:', id)

  const patientData = await getPatient(id)

  console.log('current patient:', patientData)

  if (!patientData.data) {
    return (
      <SidebarProvider>
        <PatientDetailsSidebar patientId={id} />
        <main className="border-3 border-yellow w-full bg-background">
          <SidebarTrigger className="hover:bg-foreground cursor-pointer" />
          <p>Patient Not Found</p>
        </main>
      </SidebarProvider>
    )
  }

  const personData = await getPerson(patientData.data.personId)

  console.log('patient layout personData:', personData.data)

  if (!personData.data) {
    console.log('person data check failed')
    return null
  }

  if (!patientData.data.personId) {
    console.log('patient data person id check failed')
    return null
  }

  const medicalVisitData = await getMedicalVisit(patientData.data.id)

  if (!medicalVisitData.data) {
    console.log('appointment data check failed')
    return null
  }

  const appointmentsData = await getAppointments(patientData.data?.id)

  console.log('patient details appointments data:', appointmentsData)

  // const appointmentData = await getAppointment(patientData.data.person_id)

  // console.log('current appointment:', appointmentData)

  if (!appointmentsData.data) {
    console.log('appointment data check failed')
    return null
  }

  console.log('patient layout appointment data:', appointmentsData.data)

  const addressData = await getAddress(personData.data.id)

  console.log('current address in layout:', addressData)

  if (!addressData.data) {
    console.log('address data check failed')
    return null
  }

  return (
    <PatientContextProvider
      patient={patientData.data}
      appointments={appointmentsData.data}
      person={personData.data}
      medicalVisit={medicalVisitData.data}
      address={addressData.data}
    >
      <SidebarProvider>
        <PatientDetailsSidebar patientId={id} />
        <main className="border-3 border-yellow w-full bg-background">
          <SidebarTrigger className="hover:bg-foreground cursor-pointer" />
          {children}
          {patientDetails}
        </main>
      </SidebarProvider>
    </PatientContextProvider>
  )
}
