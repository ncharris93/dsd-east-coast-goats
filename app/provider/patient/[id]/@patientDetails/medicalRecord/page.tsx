'use client'

import { SlashIcon } from 'lucide-react'
import { useContext } from 'react'

import AppointmentAccordion from '@/components/patient/AppointmentAccordion'
import MedicalAccordion from '@/components/patient/MedicalAccordion'
import { PatientContext } from '@/components/provider/patientDetails/PatientContext'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Page() {
  const { patient, medicalVisit, appointments } = useContext(PatientContext)

  console.log('current patient in medical record page:', patient)
  console.log('medical visit in medical record page:', medicalVisit)
  console.log('appointments in medical record page:', appointments)

  return (
    <section className=" p-2 flex flex-col items-center">
      <Card className=" bg-card-2 w-full max-w-[500px] mx-auto sm:p-6 md:p-8  flex flex-col justify-center ">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="text-xl">
              Today&apos;s Visit
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <SlashIcon></SlashIcon>
            </BreadcrumbSeparator>
            <BreadcrumbItem className="font-bold text-xl">
              Medical Record
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <CardHeader className="font-bold text-xl sm:text-2xl md:text-3xl ">
          <CardTitle>Medical Record</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col text-foreground ">
          {medicalVisit?.prescriptions && (
            <MedicalAccordion
              data={medicalVisit?.prescriptions}
              label="prescriptions"
            />
          )}
          {medicalVisit?.allergies && (
            <MedicalAccordion
              data={medicalVisit?.allergies}
              label="allergies"
            />
          )}
        </CardContent>
        <CardHeader className="font-bold text-xl sm:text-2xl md:text-3xl">
          <CardTitle>Past Appointments</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col ">
          <ul>
            {appointments?.map((appointment) => (
              <li key={appointment.id}>
                <AppointmentAccordion appointment={appointment} />
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}
