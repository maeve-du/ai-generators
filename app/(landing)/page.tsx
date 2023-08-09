import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const LandingPage = () => {
  return (
    <div className='ml-20 mt-20'>
      Landing Page (unprotected)
      <div className='flex gap-8 mt-10'>
        <Button asChild>
          <Link href='/sign-in'>Login</Link>
        </Button>
        <Button asChild>
          <Link href='/sign-up'>Register</Link>
        </Button>
        <Button asChild>
          <Link href='/dashboard'>Dashboard</Link>
        </Button>
      </div>
    </div>
  )
}

export default LandingPage
