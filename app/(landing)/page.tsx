import LandingContent from '@/components/LandingContent'
import LandingHero from '@/components/LandingHero'
import LandingNavbar from '@/components/LandingNavbar'
import Loader from '@/components/Loader'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const LandingPage = () => {
  return (
    <div className="h-full">
      {/* Landing Page (unprotected)
      <div className="flex gap-8 mt-10">
        <Button asChild>
          <Link href="/sign-in">Login</Link>
        </Button>
        <Button asChild>
          <Link href="/sign-up">Register</Link>
        </Button>
        <Button asChild>
          <Link href="/dashboard">Dashboard</Link>
        </Button>
      </div> */}
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
  )
}

export default LandingPage
