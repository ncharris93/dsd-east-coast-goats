import { createHash } from 'crypto'

export function generateThreadKey(
  userId: number,
  otherId: number,
  context: string,
  appointmentId?: number,
  messageType?: string,
): string {
  const base = appointmentId
    ? `appointment-${appointmentId}-${Math.min(userId, otherId)}-${Math.max(userId, otherId)}`
    : `context-${Math.min(userId, otherId)}-${Math.max(userId, otherId)}-${context}-${messageType ?? 'default'}`

  return createHash('sha256').update(base).digest('hex')
}
