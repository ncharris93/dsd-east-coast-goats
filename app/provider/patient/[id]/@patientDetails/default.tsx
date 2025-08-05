'use client'

import { useRouter } from 'next/navigation'
import { useContext, useEffect } from 'react'

import { PatientContext } from '@/components/provider/patientDetails/PatientContext'

export default function Default() {
  const { id } = useContext(PatientContext)
  const router = useRouter()

  useEffect(() => {
    if (id) {
      router.replace(`/provider/patient/${id}/contactInfo`)
    }
  }, [id, router])

  return null
}
