import { useEffect, useState } from "react"
import { useLockedBody } from "usehooks-ts"

export default function Modal({ children, handleOnClose, isOpen }: { children?: React.ReactNode, handleOnClose: any, isOpen: boolean }) {
  const [translate, setTranslate] = useState<string>("-translate-x-full")
  const [locked, setLocked] = useLockedBody(false, "root")
  useEffect(() => {
    if (isOpen) {
      setTranslate("translate-x-0")
    }
  }, [isOpen])
  // lock scroll
  useEffect(() => {
    setLocked(isOpen)
  }, [isOpen, setLocked])
  return (
    <div
      className={`${translate} ${isOpen ? "opacity-100" : "opacity-0"} transition-opacity duration-400 ease-out fixed top-0 w-full bg-black/[0.82] z-50`}
      style={{ height: "100dvh" }}
      onTransitionEnd={() => {
        if (!isOpen) {
          setTranslate("-translate-x-full")
        }
      }}
      onClick={handleOnClose}
    >
      <div className="absolute top-2 right-4" onClick={() => {
        handleOnClose()
      }}>
        <svg className="h-12 transition-colors ease-out cursor-pointer fill-root-white hover:fill-red-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
      </div>
      {children}
    </div>
  )
}