import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ReactNode } from 'react'

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex flex-col items-center justify-center h-full gap-20'>
      {children}
      <Button asChild variant={'link'}>
        <Link href='/'>Back to Homepage {'>'}</Link>
      </Button>
    </div>
  )
}

export default AuthLayout
