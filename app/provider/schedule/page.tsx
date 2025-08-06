import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import TodaysAppointmentsTable from './todaysAppointmentsTable'

export default async function SchedulePage() {
  const today = new Date()
  const todaysDate = today.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <main>
      <Tabs defaultValue="daily" className="w-10/12 xl:w-1/2 place-self-center">
        <TabsList>
          <TabsTrigger value="daily">Daily</TabsTrigger>
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
        </TabsList>
        <TabsContent value="daily" className="bg-card-3">
          <Card>
            <CardHeader>
              <CardTitle>Today&apos;s Schedule</CardTitle>
              <CardDescription>{todaysDate}</CardDescription>
              <CardAction>Card Action</CardAction>
            </CardHeader>
            <CardContent>
              <TodaysAppointmentsTable />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="weekly">Change your password here.</TabsContent>
      </Tabs>
    </main>
  )
}
