import { useEffect, useState } from "react";

export function useDetectDirectionScroll() {
  const [directionScroll, setDirectionScroll] = useState<"up" | "down">()
  const [prevScrollPosition, setPrevScrollPosition] = useState<number>(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = document.documentElement.scrollTop
      if (currentScrollPosition > prevScrollPosition) {
        setDirectionScroll("down")
      } else {
        setDirectionScroll("up")
      }
      setPrevScrollPosition(currentScrollPosition)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollPosition])
  return directionScroll
}