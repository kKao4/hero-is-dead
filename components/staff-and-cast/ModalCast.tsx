import Modal from "../Modal";
import Image from "next/image";

export default function ModalCast({ isOpen, handleOnClose, img, content, character, voiceActor }: { isOpen: boolean, handleOnClose: any, img: any, content: string, character: string, voiceActor: string }) {
  return (
    <Modal isOpen={isOpen} handleOnClose={handleOnClose}>
      <div className="flex h-full w-full justify-center items-center">
        <div className="w-full bg-root-white" onClick={(e) => e.stopPropagation()}>
          <div className="max-w-[820px] max-h-[80vh] lg:h-2/3 overflow-y-auto mx-auto font-vn px-6 py-8 md:py-12">
            <div className="flex flex-row gap-x-8 items-start">
              <div className="grow">
                <p className="font-bold text-lg md:text-xl text-third-brown mb-1">Vai <span className="capitalize">{character}</span></p>
                <p className="font-bold text-2xl md:text-3xl capitalize">{voiceActor}</p>
                <div className="w-[240px] lg:hidden block mx-auto my-6">
                  <Image src={img} alt="" quality={75} priority={false} placeholder="blur" />
                </div>
                <p className="font-medium md:text-lg leading-7 md:leading-9 mt-6">
                  {content}
                </p>
              </div>
              <div className="w-1/3 aspect-auto shrink-0 lg:block hidden">
                <Image src={img} alt="" quality={75} priority={false} placeholder="blur" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}