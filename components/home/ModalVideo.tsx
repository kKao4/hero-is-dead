import ReactPlayer from "react-player/lazy";
import Modal from "../Modal";
import { useRef } from "react";
import { useOnClickOutside } from 'usehooks-ts'

export default function ModalVideo({ handleCloseModal, hasWindow, isOpenVideoLightBox }: { handleCloseModal: any, hasWindow: boolean, isOpenVideoLightBox: boolean }) {
  const videoRef = useRef<any>(null)
  useOnClickOutside(videoRef, handleCloseModal)
  return (
    <Modal isOpen={isOpenVideoLightBox} handleOnClose={handleCloseModal}>
      <div className="flex items-center justify-center w-full h-full">
        <div ref={videoRef} className="aspect-video w-4/5 lg:w-auto lg:h-[540px] xl:h-[600px]">
          {hasWindow && isOpenVideoLightBox && (
            <ReactPlayer
              url="https://www.youtube.com/embed/nQmCf8JE0G8"
              width="100%"
              height="100%"
              controls={true}
              config={{
                youtube: {
                  playerVars: {
                    rel: 0
                  }
                }
              }}
            />
          )}
        </div>
      </div>
    </Modal>
  )
}