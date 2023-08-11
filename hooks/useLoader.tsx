import { useEffect, useState } from 'react'

function useLoader() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    return () => setIsMounted(false)
  }, [])

  return isMounted
}

export default useLoader
