import '../globals.css'

import type { Metadata } from 'next'

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'Next.js and Supabase Starter Kit',
  description: 'The fastest way to build apps with Next.js and Supabase',
}

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}

// export default function LoginLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body>{children}</body>
//     </html>
//   )
// }

// export default function Appointment() {
//   return <p>This is the create an appointment page</p>
// }

// export default function AppointmentLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body>{children}</body>
//     </html>
//   )
// }

// export default function Dashboard() {
//   return <p>This the is the provider dashboard page</p>
// }

// export default function DashboardLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body>{children}</body>
//     </html>
//   )
// }

// export default function IntakeLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body>{children}</body>
//     </html>
//   )
// }

// export default function IntakeForm() {
//   return <p>This the is intake form page</p>
// }

// export default function Login() {
//   return <p>This is the login page</p>
// }
