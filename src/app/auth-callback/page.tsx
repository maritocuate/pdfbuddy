'use client'

import { useEffect } from 'react'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components'
import { Loader2 } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { trpc } from '@/app/_trpc/client'

const Page = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const origin = searchParams.get('origin')

  const { data, error } = trpc.authCallback.useQuery(undefined, {
    retry: true,
    retryDelay: 10000,
  })

  useEffect(() => {
    if (data) {
      const origin = searchParams.get('origin')
      router.push(origin ? `/${origin}` : '/dashboard')
    }

    if (error) {
      router.push('/sign-in')
    }
  }, [data, error, router, searchParams])

  return (
    <div className="w-full mt-24 flex justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-800" />
        <h3 className="font-semibold text-xl">Setting up your account...</h3>
        <p>You will be redirected automatically.</p>
        <LogoutLink> Sign out</LogoutLink>
      </div>
    </div>
  )
}

export default Page
