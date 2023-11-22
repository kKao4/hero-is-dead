import Modal from "../Modal";
import Image from "next/image";

export default function ModalCast({ isOpen, handleOnClose, img, content, character, cast }: { isOpen: boolean, handleOnClose: any, img: any, content: string, character: string, cast: string }) {
  return (
    <Modal isOpen={isOpen} handleOnClose={handleOnClose}>
      <div className="flex items-center justify-center w-full h-full">
        <div className="w-full bg-root-white" onClick={(e) => e.stopPropagation()}>
          <div className="max-w-[820px] max-h-[80vh] lg:h-2/3 overflow-y-auto mx-auto font-vn px-6 py-8 md:py-12">
            <div className="flex flex-row items-start gap-x-8">
              <div className="grow">
                <p className="mb-1 text-lg font-bold md:text-xl text-third-brown">Vai <span className="capitalize">{character}</span></p>
                <p className="text-2xl font-bold capitalize md:text-3xl">{cast}</p>
                <div className="w-[240px] lg:hidden block mx-auto my-6">
                  <Image src={img} alt="" quality={75} priority={false} placeholder="blur" />
                </div>
                <p className="mt-6 font-medium leading-7 md:text-lg md:leading-9">
                  {content}
                </p>
              </div>
              <div className="hidden w-1/3 aspect-auto shrink-0 lg:block">
                <Image src={img} alt="" quality={75} priority={false} placeholder="blur" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}