import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { ReactNode } from 'react'

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='h-full relative'>
      <div className='hidden h-full md:flex md:flex-col md:w-72  md:fixed md:inset-y-0 bg-gray-900  z-[80]'>
        <Sidebar />
      </div>
      <main className='md:pl-72'>
        <Navbar />
        {children}
      </main>
    </div>
  )
}

export default DashboardLayout
