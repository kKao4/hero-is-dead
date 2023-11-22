import ReactPlayer from "react-player/lazy";
import Modal from "./Modal";
import { useRef } from "react";
import { useOnClickOutside, useIsClient } from 'usehooks-ts'

export default function ModalVideo({ handleCloseModal, isOpenVideoLightBox, url }: { handleCloseModal: any, isOpenVideoLightBox: boolean, url: string }) {
  const isClient = useIsClient()
  const videoRef = useRef<any>(null)
  useOnClickOutside(videoRef, handleCloseModal)
  return (
    <Modal isOpen={isOpenVideoLightBox} handleOnClose={handleCloseModal}>
      <div className="flex items-center justify-center w-full h-full">
        <div ref={videoRef} className="aspect-video w-4/5 lg:w-auto lg:h-[540px] xl:h-[600px]">
          {isClient && isOpenVideoLightBox && (
            <ReactPlayer
              url={url}
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