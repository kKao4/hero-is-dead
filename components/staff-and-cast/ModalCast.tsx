import Modal from "../Modal";
import Image from "next/image";

export default function ModalCast({ castDetail, handleOnClose, img }: { castDetail: string, handleOnClose: any, img: any }) {
  return (
    <Modal isOpen={castDetail.length > 0} handleOnClose={handleOnClose}>
      <div className="flex h-full w-full justify-center items-center">
        <div className="w-full bg-root-white flex justify-center items-center">
          <div className="max-w-[820px] h-[80vh] lg:h-2/3 overflow-y-auto mx-auto font-vn px-6 py-8">
            <div className="grow">
              <p className="font-bold md:text-xl text-third-brown">Vai trò của Ethel Borgnine</p>
              <p className="font-bold text-2xl md:text-3xl">Sayaka Ohara</p>
              <div className="w-[240px] lg:hidden block mx-auto my-6">
                <Image src={img} alt="" quality={75} priority={false} placeholder="blur" />
              </div>
              <p className="font-medium md:text-lg leading-7 md:leading-9">Tôi sẽ đóng vai người cố vấn của Touka, Ethel.
                Có nhiều cảnh anh ấy tỏ ra là một nhân vật mạnh mẽ, ngầu và hoàn hảo, đồng thời anh ấy thể hiện những biểu cảm bất ngờ, và tôi cảm thấy rất vui khi các diễn viên có thể tận hưởng trọn vẹn sự cân bằng tinh tế giữa nghiêm túc và hài hước trong suốt tác phẩm.
                Xin hãy chờ đợi nó được phát sóng...♪</p>
            </div>
            <div className="w-1/3 aspect-auto shrink-0 lg:block hidden">
              <Image src={castOhara} alt="Sayaka Ohara" quality={75} priority={false} placeholder="blur" />
            </div>
            {/* hihi */}
          </div>
        </div>
      </div>
    </Modal>
  )
}