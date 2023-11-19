import OctagonalBox from "../OctagonalBox";
import Image from "next/image";

export default function CharacterDetail({ img, character, cv, content, isOpen, isFirst = false }: { img: any, character: string, cv: string, content: string, isOpen: boolean, isFirst?: boolean }) {
  return (
    <div className={`${isOpen ? "opacity-100 delay-300" : "opacity-0"} transition-opacity ease-out ${isFirst ? "" : "absolute"} duration-300 top-0 left-0 w-full`}>
      <OctagonalBox
        boxClassName="max-w-[720px] xl:max-w-[820px] relative mx-auto"
        contentClassName="relative pb-6 sm:pb-8 pt-10 xl:pt-12 lg:pr-52 xl:pr-56 px-4 sm:px-8 font-vn font-bold"
        bigTriangleWidth="border-12"
        smallTriangleWidth="border-11"
        borderSmallTriangleColor="border-second-brown"
        element={
          <OctagonalBox
            boxClassName="absolute top-0 -translate-y-1/2 left-8 sm:left-12 bg-second-brown"
            contentClassName="p-3 xl:p-4"
            bigTriangleWidth="border-7.5"
            smallTriangleWidth="border-6"
            borderSmallTriangleColor="border-second-brown"
          >
            <p className="text-lg uppercase lg:text-2xl">{character}</p>
          </OctagonalBox>
        }
      >
        <span className="mr-2 font-medium">cv</span>
        <span className="text-lg xl:text-xl">{cv}</span>
        <p className="mt-3 font-medium sm:mt-4 xl:text-lg">{content}</p>
        <Image className="absolute left-1/2 -translate-x-1/2 lg:-right-1/2 z-20 top-0 -translate-y-[108%] lg:-translate-y-[38%] lg:translate-x-[14%] aspect-auto max-w-[370px] sm:max-w-[480px] xl:max-w-[600px]" src={img} alt="" quality={100} placeholder="blur" priority={character.includes("touka")} />
      </OctagonalBox>
    </div>
  )
}