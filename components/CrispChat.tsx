'use client'

import { ChatboxColors, Crisp } from 'crisp-sdk-web'
import { useEffect } from 'react'

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure('44bc0961-1f88-4fba-8f91-b531d98453ed')
    Crisp.setColorTheme(ChatboxColors.Blue)
  }, [])

  return null
}
