'use client'

import { MessageSender } from '@/lib/types/messages'

type Props = {
  messages: MessageSender[]
  currentUserId: number
}

export default function MessageList({ messages, currentUserId }: Props) {
  return (
    <div className="space-y-4">
      {messages.map((message) => {
        const isCurrentUser = message.sender_id === currentUserId
        const displayName = isCurrentUser
          ? 'You'
          : message.sender.role === 'provider'
            ? `Dr. ${message.sender.first_name} ${message.sender.last_name}`
            : `${message.sender.first_name} ${message.sender.last_name}`

        return (
          <div
            key={message.id}
            className={`rounded-lg p-3 max-w-[75%] ${
              isCurrentUser
                ? 'ml-auto bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground'
            }`}
          >
            <div className="text-xs font-semibold mb-1">{displayName}</div>
            <div className="text-sm">{message.content}</div>
            <div className="text-[10px] mt-1 text-right opacity-70">
              {message.created_at
                ? new Date(message.created_at).toLocaleString()
                : ''}
            </div>
          </div>
        )
      })}
    </div>
  )
}
