import { CalendarHeart } from 'lucide-react'

import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main>
      <section className="bg-[url(/images/hero-image.webp)] bg-center h-screen">
        <div className="flex flex-col gap-8 items-center justify-center h-full backdrop-blur-xs backdrop-brightness-65 text-center text-white">
          <div>
            <h1 className="text-4xl font-bold">Welcome to Haven Health</h1>
            <p className="text-2xl">Your Wellness, Our Commitment</p>
          </div>
          <div>
            <Button
              variant="default"
              size="lg"
              className="text-xl font-semibold"
            >
              <CalendarHeart className="size-6" />
              Schedule Appointment
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
