import {
  ArrowDownCircle,
  CalendarHeart,
  Clock,
  Footprints,
  HandHeart,
  MapPin,
  Phone,
  PillBottle,
  Stethoscope,
  Syringe,
} from 'lucide-react'

import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex flex-col gap-16 w-full mb-16">
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
      <section id="services" className="flex flex-col gap-16 px-4">
        <h2 className="text-3xl font-bold text-center">Our Services</h2>
        <div
          id="services-card-container"
          className="grid grid-cols-1 gap-x-4 gap-y-8 mx-auto min-w-screen-sm md:grid-cols-2 md:max-w-screen-md xl:grid-cols-4 xl:max-w-screen-xl"
        >
          <article
            id="check-up"
            className="bg-card p-3 rounded-lg flex gap-4 items-center"
          >
            <div className="bg-accent p-3 rounded-full size-fit">
              <Stethoscope className="size-8 text-accent-foreground" />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <h3 className="text-xl font-bold">General Check-Up</h3>
              <p className="text-pretty">
                Regular check-ups to monitor your health and catch any issues
                early.
              </p>
            </div>
          </article>
          <article
            id="chronin-condition"
            className="bg-card p-4 rounded-lg flex gap-4 items-center w-full"
          >
            <div className="bg-accent p-3 rounded-full size-fit">
              <PillBottle className="size-8 text-accent-foreground" />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <h3 className="text-xl font-bold">Chronic Condition Follow-Up</h3>
              <p className="text-pretty">
                Ongoing care and management for chronic conditions like
                diabetes.
              </p>
            </div>
          </article>
          <article
            id="vaccinations"
            className="bg-card p-4 rounded-lg flex gap-4 items-center w/full"
          >
            <div className="bg-accent p-3 rounded-full size-fit">
              <Syringe className="size-8 text-accent-foreground" />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <h3 className="text-xl font-bold">Vaccinations</h3>
              <p className="text-pretty">
                Vaccinations to keep you and your family healthy.
              </p>
            </div>
          </article>
          <article
            id="mental-health"
            className="bg-card p-4 rounded-lg flex gap-4 items-center w-full"
          >
            <div className="bg-accent p-3 rounded-full size-fit">
              <HandHeart className="size-8 text-accent-foreground" />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <h3 className="text-xl font-bold">Mental Health Consulation</h3>
              <p className="text-pretty">
                Compassionate support for your mental well-being.
              </p>
            </div>
          </article>
        </div>
        <div className="flex justify-center">
          <Button variant="default" size="lg" className="text-xl font-semibold">
            <CalendarHeart className="size-6" />
            Schedule Appointment
          </Button>
        </div>
      </section>
      <section
        id="about"
        className="flex flex-col gap-16 px-4 items-center max-w-screen-lg mx-auto "
      >
        <div className="bg-card text-card-foreground rounded-3xl px-8 py-12">
          <div>
            <h2 className="text-3xl font-bold text-center">
              About Haven Health
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 text-lg lg:grid-cols-2">
            <div className="flex flex-col gap-4">
              <p className="text-pretty">
                At Haven Health, we are dedicated to providing comprehensive and
                compassionate healthcare services to our community. Our team of
                experienced professionals is committed to your well-being,
                offering personalized care tailored to your unique needs.
              </p>
              <p className="text-pretty">
                From routine check-ups to specialized treatments, we strive to
                create a welcoming environment where you can feel safe and cared
                for. Your health is our priority, and we are here to support you
                every step of the way.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-pretty">
                Our state-of-the-art facility is equipped with the latest
                medical technology, ensuring that you receive the highest
                quality of care. We believe in a holistic approach to health,
                focusing not only on physical well-being but also on mental and
                emotional health.
              </p>
              <p className="text-pretty">
                Join us at Haven Health, where your health journey begins with
                trust, compassion, and excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="contact"
        className="flex flex-col gap-16 bg-card text-card-foreground rounded-3xl px-4 max-w-screen-lg mx-auto"
      >
        <div className="bg-card text-card-foreground rounded-3xl px-8 py-12">
          <div>
            <h2 className="text-3xl font-bold text-center">Contact Us</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="flex flex-col gap-4 mx-auto px-4 md:col-span-1">
              <div className="flex flex-row gap-4">
                <MapPin className="size-6" />
                <a
                  href="https://maps.app.goo.gl/akyyouqaHcVawgiR6"
                  target="_blank"
                  rel="noopener, noreferrer"
                  className="hover:underline"
                >
                  <p className="text-pretty">123 Main St., Islip, NY 11751</p>
                </a>
              </div>
              <div className="flex flex-row gap-4">
                <Phone className="size-6" />
                <a href="tel:6315555555" className="hover:underline">
                  <p className="text-pretty">(631) 555-5555</p>
                </a>
              </div>
              <div className="flex flex-row gap-4">
                <Clock className="size-6" />
                <div className="flex flex-col">
                  <p className="text-pretty">Monday - Saturday</p>
                  <p className="text-pretty">9AM - 5PM</p>
                </div>
              </div>
              <div className="flex flex-row gap-2">
                <Footprints className="size-6" />
                <div className="flex flex-col">
                  <p className="text-pretty">Walk-Ins</p>
                  <p className="text-pretty">9AM - 12PM</p>
                </div>
              </div>
            </div>
            <div id="map" className="md:col-span-2 md:px-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12093.524681257835!2d-73.23059610218785!3d40.73163749225007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e8338c078e3efb%3A0xc616688e9560cfd0!2sIslip%2C%20NY!5e0!3m2!1sen!2sus!4v1753375360833!5m2!1sen!2sus"
                className="w-full aspect-square md:aspect-2/1"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
