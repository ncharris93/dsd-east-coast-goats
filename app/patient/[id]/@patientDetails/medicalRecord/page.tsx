'use client'

// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from '@radix-ui/react-accordion'
import { SlashIcon } from 'lucide-react'
import { useContext } from 'react'

import MedicalAccordion from '@/components/patient/MedicalAccordion'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { PatientContext } from '../../PatientContext'

export default function Page() {
  const { patient, medicalVisit, appointments } = useContext(PatientContext)

  console.log('current patient in medical record page:', patient)
  console.log('medical visit in medical record page:', medicalVisit)
  console.log('appointments in medical record page:', appointments)

  return (
    <section className="border-3 border-black p-2 flex flex-col items-center">
      <Card className="w-full max-w-screen-lg mx-auto sm:p-6 md:p-8">
        <div className="border-3 border-lime-300 flex flex-col justify-center">
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
          <div className="flex flex-col border-3  border-black-300">
            <CardHeader className="font-bold text-xl sm:text-2xl md:text-3xl">
              <CardTitle>Medical Record</CardTitle>
            </CardHeader>
            <CardContent>
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
          </div>
          <div className="flex flex-col border-3  border-black-300"></div>
        </div>
      </Card>
    </section>
  )
}
