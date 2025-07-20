import './globals.css'

import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-8 min-h-dvh">
      <section className="bg-[url(/hero-image.webp)] h-full w-full bg-cover bg-center">
        <div className="backdrop-blur-sm flex flex-col items-center text-center text-balance py-4">
          <div className="text-popover">
            <h1 className="text-3xl font-bold">Welcome to Haven Health</h1>
            <p className="text-xl font-semibold">
              Your Wellness, Our Committment
            </p>
          </div>
          <div>
            <Button size="lg">Schedule Appointment</Button>
          </div>
        </div>
      </section>
    </main>
  )
}
