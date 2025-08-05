'use client'

import { SlashIcon } from 'lucide-react'
import Image from 'next/image'
import { useContext } from 'react'

import { PatientContext } from '@/components/provider/patientDetails/PatientContext'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Card, CardContent } from '@/components/ui/card'
import { formatDate, getAge } from '@/utils/helpers'

export default function Page() {
  const { patient, appointments, person, medicalVisit, address } =
    useContext(PatientContext)
  console.log('contact info current patient:', patient)
  console.log('contact info current appointment:', appointments)
  console.log('contact info current person:', person)
  console.log('contact info current person:', medicalVisit)
  console.log('emergency contact in patient:', patient?.emergencyContact)

  const scheduledAppointment = appointments?.find(
    (appointment) => appointment.status == 'scheduled',
  )

  return (
    <section className=" p-2 flex flex-col items-center">
      <Card className="w-full max-w-screen-lg mx-auto sm:p-6 md:p-8 bg-card-2 text-foreground">
        <CardContent className="p-0">
          {/* main patient div */}
          <div className="b flex flex-col justify-center">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="text-xl">
                  Today&apos;s Visit
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <SlashIcon></SlashIcon>
                </BreadcrumbSeparator>
                <BreadcrumbItem className="font-bold text-xl">
                  Patient Details
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className=" max-w-[1000px] flex flex-col lg:flex-row gap-5 grow p-2">
              {/* patient pic and name */}
              <div className="flex flex-col gap-3">
                <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 ">
                  <Image
                    src="/images/patient-profile.jpeg"
                    alt="patient-image"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <span className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                  {person?.firstName} {person?.lastName}
                </span>
                <span className="text-lg sm:text-xl md:text-2xl text-">
                  {patient?.dateOfBirth
                    ? getAge(patient?.dateOfBirth)
                    : 'No age found'}
                  , {patient?.sex}
                </span>
              </div>

              {/* appointment and address */}
              <div className=" w-full flex flex-col justify-center gap-2 ">
                <div className=" w-full flex justify-between gap-2 p-2">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-xl sm:text-2xl md:text-3xl">
                      Scheduled Appointment
                    </h3>
                    <span className="text-xl">
                      {scheduledAppointment?.time
                        ? formatDate(scheduledAppointment.time)
                        : 'No Appointment Scheduled'}
                    </span>
                  </div>
                  <div className=" w-full max-w-[50%] ">
                    <h4 className="text-lg font-bold">Special Notes</h4>
                    <span className="text-sm sm:text-base md:text-lg leading-snug text-secondary">
                      {medicalVisit?.summaryNotes}
                    </span>
                  </div>
                </div>
                {/* contact details */}
                <div className="flex flex-col gap-1 ">
                  <h3 className="font-bold text-xl sm:text-2xl md:text-3xl">
                    Contact Details
                  </h3>
                  <div className="flex justify-between">
                    <div className="flex flex-col w-full">
                      <h4 className="font-bold text-lg">Emergency Contact</h4>
                      <span>
                        {patient?.emergencyContact?.firstName}{' '}
                        {patient?.emergencyContact?.lastName}
                      </span>
                      <span>{patient?.emergencyContact?.phone}</span>
                    </div>
                    <div className=" w-full flex flex-col gap-1 text-sm">
                      <h4 className="text-lg font-bold">Address</h4>
                      <span>
                        {address?.streetA}, {address?.city} {address?.state}{' '}
                        {address?.zipCode}
                      </span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
