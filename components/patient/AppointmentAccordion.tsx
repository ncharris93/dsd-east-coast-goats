import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'

import type { PatientAppointment } from '@/lib/types/patient'
import { formatDate } from '@/utils/helpers'

export interface AppointmentAccordionProps {
  appointment: PatientAppointment
}

export default function AppointmentAccordion({
  appointment,
}: AppointmentAccordionProps) {
  if (!appointment.id || appointment.status === 'scheduled') {
    return null
  }

  return (
    <Accordion
      type="single"
      collapsible
      className="flex flex-col border-4 border-blue-300 max-w-[400px] gap-5"
    >
      <AccordionItem
        value={formatDate(appointment.time ?? '')}
        className="flex flex-col  border-b-1 border-destructive"
      >
        <AccordionTrigger className="flex items-center w-full justify-between p-2 AccordionTrigger">
          <span className="inline hover:border-b hover:border-destructive cursor-pointer">
            {formatDate(appointment.time ?? '')}
          </span>
          <ChevronDown size={20} className="cursor-pointer AccordionChevron" />
        </AccordionTrigger>
        <AccordionContent className="overflow-hidden flex flex-col data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up p-2 AccordionContent">
          <span>Type: {appointment.type}</span>
          <span>Status: {appointment.status}</span>
          {appointment.datePaid ? (
            <span>Paid: {appointment.datePaid}</span>
          ) : null}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
