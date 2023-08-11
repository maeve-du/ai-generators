'use client'

import { useAuth } from '@clerk/nextjs'
import { Montserrat } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

const font = Montserrat({
  weight: '600',
  subsets: ['latin']
})

const LandingNavbar = () => {
  const { isSignedIn } = useAuth()

  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex item-center">
        <div className="relative h-8 w-8 mr-4">
          <Image fill alt="Logo" src="/logo.png" />
        </div>
        <h1 className={cn('text-2xl h-10 font-bold pt-1 text-white', font.className)}>Genius</h1>
      </Link>
      <div className="flex itemsc  gap-x-2">
        <Link href={isSignedIn ? '/dashboard' : '/signup'}>
          <Button variant={'outline'} className="rounded-full">
            Get Started
          </Button>
        </Link>
      </div>
    </nav>
  )
}

export default LandingNavbar
