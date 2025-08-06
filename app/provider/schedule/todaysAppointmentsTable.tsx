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
        {appointmentData.map((appointment) => (
          <TableRow key={appointment.id} className="hover:bg-current/10">
            <TableCell className="font-medium">
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
              <Link href="#" className="hover:underline">
                {appointment.patient?.person?.first_name}{' '}
                {appointment.patient?.person?.last_name}
              </Link>
            </TableCell>
            <TableCell>{appointment.appointment_type}</TableCell>
            <TableCell>
              {'Dr.'} {appointment.provider?.last_name}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
