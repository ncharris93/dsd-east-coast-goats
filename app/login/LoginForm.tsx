'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { loginAction } from './loginActions'

type LoginInputs = {
  email: string
  password: string
}

export default function LoginForm() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const form = useForm<LoginInputs>()

  const onSubmit: SubmitHandler<LoginInputs> = async ({ email, password }) => {
    setLoading(true)
    const success = await loginAction({ email, password })
    setLoading(false)

    if (success) {
      setTimeout(() => router.push('/'), 4000)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-background">
      <div className="w-full max-w-md bg-card p-6 rounded-lg shadow-md border border-border">
        <div className="flex justify-center mb-4">
          <Image
            src="/icons/logo.svg"
            alt="Haven Health Hub"
            width={120}
            height={120}
            className="mx-auto mb-4"
          />
        </div>

        <h1 className="text-2xl font-bold mb-6 text-center text-foreground">
          Log In
        </h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="email"
              rules={{ required: 'Email is required' }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-muted-foreground">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      className="bg-input border border-border text-foreground"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              rules={{ required: 'Password is required' }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-muted-foreground">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      className="bg-input border border-border text-foreground"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Log In'}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}
