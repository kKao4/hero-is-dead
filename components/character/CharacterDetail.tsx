import OctagonalBox from "../OctagonalBox";
import Image from "next/image";

export default function CharacterDetail({ img, character, cv, content, isOpen }: { img: any, character: string, cv: string, content: string, isOpen: boolean }) {
  return (
    <div className={`${isOpen ? "block" : "hidden"} transition-opacity ease-out`}>
      <OctagonalBox
        boxClassName="mt-8 md:mt-14 mb-6 w-[820px] relative"
        contentClassName="relative pl-3 pb-8 pt-12 pr-56  md:pl-10 lg:pl-8 font-vn font-bold"
        bigTriangleWidth="border-12"
        smallTriangleWidth="border-11"
        borderSmallTriangleColor="border-second-brown"
        element={
          <OctagonalBox
            boxClassName="absolute top-0 -translate-y-1/2 left-12 bg-second-brown"
            contentClassName="px-4 py-4 uppercase text-2xl"
            bigTriangleWidth="border-7.5"
            smallTriangleWidth="border-6"
            borderSmallTriangleColor="border-second-brown"
          >
            {character}
          </OctagonalBox>
        }
      >
        <span className="font-medium mr-2">cv</span>
        <span className="text-xl">{cv}</span>
        <p className="font-medium mt-4">{content}</p>
        <Image className="absolute -right-1/2 z-20 top-1/4 -translate-y-1/2 scale-80" src={img} alt="" quality={100} placeholder="blur" />
      </OctagonalBox>
    </div>
  )
}