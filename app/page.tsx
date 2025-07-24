import { CalendarHeart } from 'lucide-react'
import { ArrowDownCircle } from 'lucide-react'
import { Stethoscope } from 'lucide-react'
import { Syringe } from 'lucide-react'
import { HandHeart } from 'lucide-react'
import { PillBottle } from 'lucide-react'
import { MapPin } from 'lucide-react'
import { Phone } from 'lucide-react'
import { Clock } from 'lucide-react'
import { Footprints } from 'lucide-react'

import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex flex-col gap-12 w-full">
      <section
        id="hero"
        className="bg-[url(/images/hero-image.webp)] bg-center h-screen text-[#F8F6F1] dark:text-foreground"
      >
        <div className="flex flex-col gap-8 items-center justify-center h-full backdrop-blur-xs backdrop-brightness-65 text-center px-4 ">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold text-balance">
              Welcome to Haven Health
            </h1>
            <p className="text-2xl text-balance">
              Your Wellness, Our Commitment
            </p>
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
        <div>
          <a
            href="#services"
            className="absolute left-1/2 bottom-4 transform -translate-x-1/2"
          >
            <ArrowDownCircle className="size-16 motion-safe:animate-bounce motion-safe:scroll-smooth" />
          </a>
        </div>
      </section>
      <section
        id="services"
        className="flex flex-col gap-8 px-4 items-center max-w-screen-sm mx-auto"
      >
        <div>
          <h2 className="text-3xl font-bold text-center">Our Services</h2>
        </div>
        <div className="grid grid-cols-1 gap-y-8 max-w-95">
          <div>
            <div className="bg-card text-card-foreground flex flex-col gap-8 p-4 rounded-xl">
              <div className="flex flex-col gap-8 items-center text-left">
                <h3 className="text-2xl font-semibold">General Check-up</h3>
                <Stethoscope className="size-12 text-accent" />
              </div>
              <div>
                <p className="text-lg text-pretty">
                  This service provides a comprehensive health assessment to
                  monitor overall well-being, detect potential health issues
                  early, and offer personalized advice for maintaining a healthy
                  lifestyle. It typically includes a physical examination, vital
                  signs measurement, and a review of medical history.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-card text-card-foreground flex flex-col gap-8 p-4 rounded-xl">
              <div className="flex flex-col gap-8 items-center text-left">
                <h3 className="text-2xl font-semibold">
                  Immunization/Vaccination
                </h3>
                <Syringe className="size-12 text-accent" />
              </div>
              <div>
                <p className="text-lg text-pretty">
                  This service offers protective injections against various
                  infectious diseases. Vaccinations help build immunity,
                  preventing the spread of illnesses within the community and
                  safeguarding individual health.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-card text-card-foreground flex flex-col gap-8 p-4 rounded-xl">
              <div className="flex flex-col gap-8 items-center text-left">
                <h3 className="text-2xl font-semibold text-balance">
                  Chronic Condition Follow-Up
                </h3>
                <PillBottle className="size-12 text-accent" />
              </div>
              <div>
                <p className="text-lg text-pretty">
                  This service provides ongoing management and support for
                  patients living with long-term health conditions such as
                  diabetes, hypertension, asthma, or heart disease. It involves
                  regular appointments to monitor symptoms, review and adjust
                  treatment plans, educate patients on self-management
                  strategies (like diet and exercise), and coordinate care with
                  specialists, aiming to prevent complications, improve quality
                  of life, and maintain overall well-being.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-card text-card-foreground flex flex-col gap-8 p-4 rounded-xl">
              <div className="flex flex-col gap-8 items-center text-left">
                <h3 className="text-2xl font-semibold">
                  Mental Health Consultation
                </h3>
                <HandHeart className="size-12 text-accent" />
              </div>
              <div>
                <p className="text-lg text-pretty">
                  This service provides a confidential space for individuals to
                  discuss emotional, psychological, and behavioral concerns with
                  a qualified professional. The goal is to offer support,
                  guidance, and strategies for improving mental well-being and
                  coping with life&apos;s challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Button variant="default" size="lg" className="text-xl font-semibold">
            <CalendarHeart className="size-6" />
            Schedule Appointment
          </Button>
        </div>
      </section>
      <section
        id="about"
        className="flex flex-col gap-8 px-4 items-center max-w-screen-sm mx-auto"
      >
        <div>
          <h2 className="text-3xl font-bold text-center">About Haven Health</h2>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-2xl font-semibold text-center">People First</h3>
          </div>
          <p className="text-lg text-pretty">
            We combine the human touch with cutting-edge tech to make your
            experience smoother and more efficient. Book appointments online,
            receive automatic reminders, securely access your records anytime,
            and even do virtual check-ins — all from your phone or computer.
            Healthcare should fit into your life, not the other way around.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-2xl font-semibold text-center">
              Powered by Technology
            </h3>
          </div>
          <p className="text-lg text-pretty">
            We believe care starts with connection. From your first visit to
            every follow-up, we take time to listen, understand, and support you
            with compassion. You&apos;re more than just a patient — you&apos;re
            part of our clinic family. Our team is made up of real people who
            genuinely care, speak your language, and are here when you need us
          </p>
        </div>
      </section>
      <section
        id="contact"
        className="flex flex-col gap-8 px-4 items-center max-w-screen-sm mx-auto"
      >
        <div>
          <h2 className="text-3xl font-bold text-center">Contact Us</h2>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <a
              href="https://maps.app.goo.gl/akyyouqaHcVawgiR6"
              target="_blank"
              rel="noopener, noreferrer"
              className="flex flex-row gap-2"
            >
              <MapPin className="size-6" />
              <p className="text-lg text-pretty">
                123 Main St., Islip, NY 11751
              </p>
            </a>
          </div>
          <div>
            <a href="tel:6315555555" className="flex flex-row gap-2">
              <Phone className="size-6" />
              <p className="text-lg text-pretty">(631) 555-5555</p>
            </a>
          </div>
          <div className="flex flex-row gap-2">
            <Clock className="size-6" />
            <div className="flex flex-col">
              <p className="text-lg text-pretty">Monday - Saturday</p>
              <p className="text-lg text-pretty">9AM - 5PM</p>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <Footprints className="size-6" />
            <div className="flex flex-col">
              <p className="text-lg text-pretty">Walk-Ins</p>
              <p className="text-lg text-pretty">9AM - 12PM</p>
            </div>
          </div>
        </div>
      </section>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12093.524681257835!2d-73.23059610218785!3d40.73163749225007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e8338c078e3efb%3A0xc616688e9560cfd0!2sIslip%2C%20NY!5e0!3m2!1sen!2sus!4v1753375360833!5m2!1sen!2sus"
          className="w-full aspect-square"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </main>
  )
}
