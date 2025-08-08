import Link from 'next/link'
import { redirect } from 'next/navigation'

import InboxList from '@/components/messages/InboxList'
import { createClient } from '@/lib/supabase/server'
import { getInboxMessages } from '@/server/messages/queries'

export default async function MessagesPage() {
  const supabase = await createClient()
  const { data: auth } = await supabase.auth.getUser()

  if (!auth?.user) {
    redirect('/login')
  }

  const { data: user, error } = await supabase
    .from('person')
    .select('*')
    .eq('person_uuid', auth.user.id)
    .single()

  if (error || !user) {
    redirect('/login')
  }

  const threads = await getInboxMessages(user.id)

  return (
    <div className="bg-background py-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-foreground">Inbox</h1>
          <Link
            href="/patient/dashboard"
            className="text-sm text-muted-foreground hover:underline"
          >
            ← Back to Dashboard
          </Link>
        </div>

        <InboxList threads={threads} userId={user.id} />
      </div>
    </div>
  )
}
