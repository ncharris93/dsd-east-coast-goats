import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'

export interface MedicalAccordionProps {
  prescriptions: string[]
  allergies: string[]
}

export default function MedicalAccordion({
  prescriptions,
  allergies,
}: MedicalAccordionProps) {
  return (
    <Accordion
      type="single"
      collapsible
      className="flex flex-col border-4 border-blue-300 max-w-[400px] gap-5"
    >
      <AccordionItem
        value="allergies"
        className="flex flex-col  border-b-1 border-destructive"
      >
        <AccordionTrigger className="flex items-center w-full justify-between p-2">
          <span className="inline hover:border-b hover:border-destructive">
            Allergies
          </span>
          <ChevronDown size={20} />
        </AccordionTrigger>
        <AccordionContent className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up p-2">
          <ul>
            {allergies.map((allergy: string) => (
              <li key={allergy}>
                <span>{allergy}</span>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
      {/* <hr className='border-1 border-black-300 '/> */}
      <AccordionItem
        value="prescriptions"
        className="flex flex-col gap-1 border-b-1 border-destructive"
      >
        <AccordionTrigger className="flex items-center w-full justify-between p-2">
          <span className="inline hover:border-b hover:border-destructive">
            Prescriptions
          </span>
          <ChevronDown size={20} />
        </AccordionTrigger>
        <AccordionContent className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up p-2">
          <ul>
            {prescriptions.map((prescription: string) => (
              <li key={prescription}>
                <span>{prescription}</span>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
