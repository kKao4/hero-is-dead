import { NewType } from "@/models/new";
import Title from "../Title";
import BoxTitle from "../BoxTitle";
import NormalRevealWrapper from "../NormalRevealWrapper";

export default function News({ data }: { data: NewType }) {
  return (
    <BoxTitle>
      <NormalRevealWrapper>
        {/* News */}
        <Title>
          <p className="title-main">Ne<span className="text-root-brown">w</span>s</p>
          <p className="title-second">Thông tin mới nhất</p>
        </Title>
      </NormalRevealWrapper>
      {/* Content */}
      <NormalRevealWrapper>
        <div className="flex flex-row">
          <div className="relative z-10 w-6 h-16 mx-auto md:h-24">
            <div className="absolute top-0 left-0 w-0 border-transparent border-12 border-t-black border-l-black" />
            <div className="absolute top-0 left-0 w-0 border-transparent border-11 border-t-second-brown border-l-second-brown" />
            <div className="absolute bottom-0 left-0 w-0 border-transparent border-12 border-b-black border-l-black" />
            <div className="absolute bottom-0 left-0 w-0 border-transparent border-11 border-b-second-brown border-l-second-brown" />
            <div className="w-full h-full border-black border-3 border-r-0"></div>
          </div>
          <div className="relative flex items-center justify-center w-full -mx-2 border-3 border-t-black border-b-black border-x-transparent">
            <p className="text-xl text-center md:text-3xl">{data.title}</p>
          </div>
          <div className="relative z-10 w-6 h-16 mx-auto md:h-24">
            <div className="absolute top-0 right-0 w-0 border-transparent border-12 border-t-black border-r-black" />
            <div className="absolute top-0 right-0 w-0 border-transparent border-11 border-t-second-brown border-r-second-brown" />
            <div className="absolute bottom-0 right-0 w-0 border-transparent border-12 border-b-black border-r-black" />
            <div className="absolute bottom-0 right-0 w-0 border-transparent border-11 border-b-second-brown border-r-second-brown" />
            <div className="w-full h-full border-black border-3 border-l-0"></div>
          </div>
        </div>
      </NormalRevealWrapper>
    </BoxTitle>
  )
}