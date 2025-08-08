import Link from 'next/link'
import { redirect } from 'next/navigation'

import MessageList from '@/components/messages/MessageList'
import MessageSend from '@/components/messages/MessageSend'
import { createClient } from '@/lib/supabase/server'
import { MessageSender } from '@/lib/types/messages'
import { getConversation } from '@/server/messages/queries'

type Props = {
  params: {
    thread_key: string
  }
}

export default async function ConversationPage({ params }: Props) {
  const supabase = await createClient()
  const { data: auth } = await supabase.auth.getUser()

  if (!auth?.user) {
    redirect('/login')
  }

  const { data: user, error } = await supabase
    .from('person')
    .select('id')
    .eq('person_uuid', auth.user.id)
    .single()

  if (error || !user) {
    redirect('/login')
  }

  const threadKey = decodeURIComponent(params.thread_key)

  const messages: MessageSender[] = await getConversation({
    userId: user.id,
    thread_key: threadKey,
  })

  if (!messages.length) {
    return (
      <div className="text-center py-10">
        <p>No messages found in this conversation</p>
        <Link href="/patient/messages">Back to inbox</Link>
      </div>
    )
  }

  const firstMessage = messages[0]

  // participants
  const recipientId =
    firstMessage.sender_id === user.id
      ? firstMessage.recipient_id
      : firstMessage.sender_id

  return (
    <div className="bg-background py-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-foreground">Conversation</h1>
          <Link
            href="/patient/messages"
            className="text-sm text-muted-foreground hover:underline"
          >
            ← Back to Inbox
          </Link>
        </div>

        <MessageList messages={messages} currentUserId={user.id} />

        <MessageSend
          senderId={user.id}
          recipientId={recipientId}
          context={firstMessage.context}
          message_type={firstMessage.message_type}
          appointment_id={firstMessage.appointment_id}
        />
      </div>
    </div>
  )
}
