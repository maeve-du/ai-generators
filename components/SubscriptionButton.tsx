'use client'

import { Zap } from 'lucide-react'
import { Button } from './ui/button'
import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-hot-toast'

const SubscriptionButton = ({ isPro = false }: { isPro: boolean }) => {
  const [loading, setLoading] = useState(false)

  const onClick = async () => {
    try {
      setLoading(true)
      const res = await axios.get('/api/stripe')
      window.location.href = res.data.url
    } catch (error) {
      toast.error('Something went wrong, please try again later')
      // console.log('BILLING ERROR', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button variant={isPro ? 'default' : 'premium'} onClick={onClick} disabled={loading}>
      {!isPro && <Zap className="w-4 h-4 mr-2 fill-white" />}
      {isPro ? `Manage Subscription` : 'Upgrade'}
    </Button>
  )
}

export default SubscriptionButton
