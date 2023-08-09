'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

import Sidebar from '@/components/Sidebar'

const MobileSidebar = ({ apiLimitCount = 0 }: { apiLimitCount: number }) => {
  // const [isMounted, setIsMounted] = useState(false)

  // useEffect(() => {
  //   setIsMounted(true)
  // }, [])

  // if (!isMounted) return null

  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        {/* <Button variant={'ghost'} size='icon' className='md:hidden'>
          <Menu />
        </Button> */}
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar apiLimitCount={apiLimitCount} />
      </SheetContent>
    </Sheet>
  )
}

export default MobileSidebar
