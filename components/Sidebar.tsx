'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Montserrat } from 'next/font/google'
import { usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon
} from 'lucide-react'
import FreeCounter from '@/components/FreeCounter'

const montserrat = Montserrat({
  weight: '600',
  subsets: ['latin']
})

// Dashboard route list for the sidebar
const dashboardRoutes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: 'text-sky-500'
  },
  {
    label: 'Conversation',
    icon: MessageSquare,
    href: '/conversation',
    color: 'text-violet-500'
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    color: 'text-pink-700',
    href: '/image'
  },
  {
    label: 'Video Generation',
    icon: VideoIcon,
    color: 'text-orange-700',
    href: '/video'
  },
  {
    label: 'Music Generation',
    icon: Music,
    color: 'text-emerald-500',
    href: '/music'
  },
  {
    label: 'Code Generation',
    icon: Code,
    color: 'text-green-700',
    href: '/code'
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/settings'
  }
]

const routeCategoryBaseClasses =
  'text-sm group flex p-3 w-full justify-start font-medium cursor-pointer text-zinc-400 hover:text-white hover:bg-white/10 rounded-lg transition'

interface Props {
  apiLimitCount: number
  isPro: boolean
}
const Sidebar = ({ apiLimitCount = 0, isPro }: Props) => {
  const pathName = usePathname()

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image
              fill
              src="/logo.png"
              alt="Logo"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <h1 className={cn('text-2xl font-bold', montserrat.className)}>Genius</h1>
        </Link>

        <div className="space-y-0">
          {dashboardRoutes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                routeCategoryBaseClasses,
                pathName === route.href && 'text-white bg-white/10'
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn('h-5 w-5 mr-3', route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <FreeCounter isPro={isPro} apiLimitCount={apiLimitCount} />
    </div>
  )
}

export default Sidebar
