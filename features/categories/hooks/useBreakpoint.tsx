import { useState, useEffect } from "react"

const useBreakpoint = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const updateScreenSize = () => {
      setIsMobile(window.innerWidth < 768) // Mobile breakpoint is < 768px (Tailwind's md breakpoint)
    }

    updateScreenSize() // Initial check
    window.addEventListener("resize", updateScreenSize)

    return () => window.removeEventListener("resize", updateScreenSize)
  }, [])

  return isMobile
}

export default useBreakpoint
