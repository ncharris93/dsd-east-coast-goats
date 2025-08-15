'use client'

import { CalendarDays } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { Sidebar } from '@/components/dashboard/adminDashboard/sidebar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { createClient } from '@/lib/supabase/client'
import { Appointment, Message } from '@/lib/types/patient'

import Messages from './../patient/dashboard/Messages'
import PatientFinder from './PatientFinder'

type ProviderDashboardProps = {
  appointment: Appointment[]
  messages: Message[]
}

export default function ProviderDashboard({}: ProviderDashboardProps) {
  const router = useRouter()
  const supabase = createClient()

  const [providerName, setProviderName] = useState('Provider')
  const [nextAppointment, setNextAppointment] = useState<{
    id: number
    type: string
    time: string
    patientName?: string
  } | null>(null)
  const [messages, setMessages] = useState<Message[]>([])

  useEffect(() => {
    const run = async () => {
      const { data: auth } = await supabase.auth.getUser()
      const uid = auth.user?.id
      if (!uid) {
        return
      }

      const { data: person } = await supabase
        .from('person')
        .select('id, first_name, last_name')
        .eq('person_uuid', uid)
        .single()

      if (!person) {
        return
      }

      setProviderName(
        `${person.first_name ?? ''} ${person.last_name ?? ''}`.trim() ||
          'Provider',
      )

      const { data: appt } = await supabase
        .from('appointment_booking')
        .select(
          `
          id,
          appointment_type,
          appointment_time,
          status,
          patient:patient_id (
            person:person_id (
              first_name,
              last_name
            )
          )
        `,
        )
        .eq('provider_id', person.id)
        .eq('status', 'scheduled')
        .gt('appointment_time', new Date().toISOString())
        .order('appointment_time', { ascending: true })
        .limit(1)
        .maybeSingle()

      if (appt) {
        const patientName =
          `${appt.patient?.person?.first_name ?? ''} ${appt.patient?.person?.last_name ?? ''}`.trim()
        setNextAppointment({
          id: appt.id,
          type: appt.appointment_type ?? '',
          time: appt.appointment_time ?? '',
          patientName,
        })
      } else {
        setNextAppointment(null)
      }

      const { data: msgs } = await supabase
        .from('messages')
        .select(
          `
          id,
          content,
          sender:person!sender_id (
            first_name,
            last_name
          )
        `,
        )
        .eq('recipient_id', person.id)
        .order('id', { ascending: false })
        .limit(25)

      if (msgs) {
        const normalized: Message[] = msgs.map((m) => ({
          id: m.id,
          content: m.content ?? '',
          sender: {
            first_name: m.sender?.first_name ?? '',
            last_name: m.sender?.last_name ?? '',
          },
        }))
        setMessages(normalized)
      }
    }

    run()
  }, [])

  const handleClick = () => router.push('/provider/schedule')

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <main className="flex-1 p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold mb-3">
              Welcome back, {providerName}!
            </h1>
            <p className="mt-1 text-2xl p-1">
              We&apos;re glad you&apos;re here. Let’s get you up to speed.
            </p>
          </div>
        </div>

        <div className="container m-auto grid grid-cols-1 md:grid-cols-2 max-w-5xl gap-10 p-4">
          <div className="flex flex-col gap-22 ">
            <div className="sm:items-center space-y-10 flex flex-col lg:items-end max-w-3xl">
              <Card className="bg-card-1 w-full max-w-md">
                <CardHeader>
                  <CardTitle className="font-bold">
                    Upcoming Appointment
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex items-center gap-2">
                  {!nextAppointment ? (
                    <CardDescription>No upcoming appointments.</CardDescription>
                  ) : (
                    <CardDescription>
                      Your{' '}
                      <span className="text-accent font-semibold">
                        {nextAppointment.type}
                      </span>{' '}
                      with{' '}
                      <span className="font-semibold">
                        {nextAppointment.patientName || 'Patient'}
                      </span>{' '}
                      is on{' '}
                      <span className="text-primary font-bold">
                        {new Date(nextAppointment.time).toLocaleTimeString()}
                      </span>
                      .
                    </CardDescription>
                  )}
                </CardContent>
                <CardFooter className="flex-col gap-2">
                  <Button onClick={handleClick} className="w-full">
                    <CalendarDays />
                    View All Appointments
                  </Button>
                </CardFooter>
              </Card>

              <PatientFinder />
            </div>
          </div>

          <div className="sm:items-center lg:space-y-15 space-y-6 flex flex-col lg:items-start">
            <Messages messages={messages} path="/provider" />
          </div>
        </div>
      </main>
    </div>
  )
}
