import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { getCurrentUser } from '@/server/auth/queries'
import { getCurrentPerson } from '@/server/auth/queries'
import { getPatientWithPersonId } from '@/server/patient/queries'

export default async function SchedulePage() {
  const userData = await getCurrentUser()
  console.log('User Data:', userData)

  if (!userData.data) {
    return null
  }
  const currentPersonData = await getCurrentPerson(userData.data?.id)
  console.log('more data:', currentPersonData)

  if (!currentPersonData.data) {
    return null
  }
  const currentPatientData = await getPatientWithPersonId(
    currentPersonData.data?.id,
  )
  console.log('patient data:', currentPatientData)

  return (
    <main>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Daily</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="daily">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
              <CardAction>Card Action</CardAction>
            </CardHeader>
            <CardContent></CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="weekly">Change your password here.</TabsContent>
      </Tabs>
    </main>
  )
}
