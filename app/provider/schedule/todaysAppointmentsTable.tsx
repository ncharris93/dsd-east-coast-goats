import Link from 'next/link'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { getAppointmentsByDateRange } from '@/server/appointment/queries'

export default async function TodaysAppointmentsTable() {
  const today = new Date()

  const startOfDay = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  )

  const endOfDay = new Date(startOfDay)
  endOfDay.setDate(startOfDay.getDate() + 1)

  const appointmentData = await getAppointmentsByDateRange(startOfDay, endOfDay)
  console.log(appointmentData)

  if (!appointmentData || appointmentData.length === 0) {
    return <p className="p-4">No appointments found for today.</p>
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Time</TableHead>
          <TableHead>Patient</TableHead>
          <TableHead>Appointment Type</TableHead>
          <TableHead>Doctor</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {appointmentData.map((appointment) => {
          const hasPassed =
            appointment.appointment_time &&
            new Date(appointment.appointment_time) < new Date()

          return (
            <TableRow
              key={appointment.id}
              className={`bg-card-1 hover:bg-black/5 ${
                hasPassed ? 'opacity-50 line-through' : ''
              }`}
            >
              <TableCell className="font-medium text-primary">
                {appointment.appointment_time
                  ? new Date(appointment.appointment_time).toLocaleTimeString(
                      'en-US',
                      {
                        hour: 'numeric',
                        minute: '2-digit',
                        timeZone: 'America/New_York',
                      },
                    )
                  : 'N/A'}
              </TableCell>
              <TableCell>
                <Link
                  href="#"
                  className="font-medium underline underline-offset-2"
                >
                  {appointment.patient?.person?.first_name}{' '}
                  {appointment.patient?.person?.last_name}
                </Link>
              </TableCell>
              <TableCell>{appointment.appointment_type}</TableCell>
              <TableCell>
                {'Dr.'} {appointment.provider?.last_name}
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
