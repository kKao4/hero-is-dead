import Image from "next/image";
import bluRayImage from "@/assets/onair_03.svg"
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import New, { NewType } from "@/models/new";
import dbConnect from "@/lib/dbConnect";
import { useEffect, useState } from "react";
import ReactPlayer from 'react-player/lazy'
import rootImage from "@/assets/visual_04_chara.webp"
import logo from "@/assets/logo_1line.svg"
import Title from "@/components/global/Title/Title";
import BoxNews from "@/components/home/BoxNews";
import SockImage from "@/components/home/SockImage";
import NormalRevealWrapper from "@/components/global/revealWrapper/NormalRevealWrapper";
import OctagonalBox from "@/components/global/octagonalBox/OctagonalBox";
import ButtonTwitter from "@/components/home/ButtonTwitter";
import { RevealWrapper } from "next-reveal";
import Script from "next/script";
import { useIsClient } from "usehooks-ts";
import { sockImages } from "@/data"
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import Lightbox from "yet-another-react-lightbox";
import NextJsImage from "@/components/NextJsImage";
import dynamic from "next/dynamic";
const DynamicModalVideo = dynamic(() => import("@/components/global/modal/ModalVideo"), {
  ssr: false
})

export const getStaticProps: GetStaticProps<{ newData: NewType }> = async () => {
  await dbConnect();
  const news = await New.find({}).sort({ updatedAt: "desc" });
  const newData = JSON.parse(JSON.stringify(news[0]));
  return { props: { newData }, revalidate: 30 }
}

export default function Page({ newData }: InferGetStaticPropsType<typeof getStaticProps>) {
  const isClient = useIsClient()
  const [isOpenVideoLightBox, setIsOpenVideoLightBox] = useState<boolean>(false)
  const [index, setIndex] = useState<number>(-1)
  const handleCloseLightBox = () => {
    setIndex(-1)
  }
  return (
    <>
      <Script src="https://platform.twitter.com/widgets.js" />
      {/* ========= Modal Video ========= */}
      <DynamicModalVideo
        url="https://www.youtube.com/embed/nQmCf8JE0G8"
        isOpenVideoLightBox={isOpenVideoLightBox}
        handleCloseModal={() => setIsOpenVideoLightBox(false)}
      />
      <div className="max-w-full sm:max-w-[1160px] sm:px-4 lg:px-14 xl:px-0 pt-4 mx-auto">
        <RevealWrapper className="load-hidden" distance="24px" duration={800} easing="ease-out" delay={200}>
          <div className="hidden sm:flex flex-row gap-x-2.5">
            <div className="w-3 h-3 rotate-45 border-gray-500 border-3" />
            <div className="w-full mt-1.5 border-t border-gray-700" />
            <div className="w-3 h-3 rotate-45 border-gray-500 border-3" />
          </div>
        </RevealWrapper>
        {/* ========= Root Image ========= */}
        <div className="relative -mt-1 overflow-hidden sm:mx-9">
          <RevealWrapper className="load-hidden" scale={1.2} duration={1000} distance="0" easing="ease-out" delay={200}>
            <Image src={rootImage} alt="" priority={true} quality={100} />
          </RevealWrapper>
          <RevealWrapper className="load-hidden" scale={1.2} duration={1000} distance="0" easing="ease-out" delay={0}>
            <Image src={logo} quality={100} priority={true} alt="" className="absolute scale-90 -translate-x-1/2 bottom-6 sm:bottom-14 xl:bottom-24 title sm:scale-110 lg:scale-125 xl:scale-165 left-1/2" />
          </RevealWrapper>
        </div>
        {/* ========= Blu-ray ========= */}
        <NormalRevealWrapper>
          <div className="">
            <Image src={bluRayImage} alt="" className="py-4 mx-auto" quality={50} />
          </div>
        </NormalRevealWrapper>
      </div>
      {/* ========= News ========= */}
      <BoxNews>
        <NormalRevealWrapper>
          <Title>
            <p className="mx-2 text-4xl leading-none text-center sm:text-5xl tracking-root md:text-7xl">Ne<span className="text-root-brown">w</span>s</p>
            <p className="-ml-4 text-xs font-bold leading-none tracking-wide text-center capitalize font-vn md:-mt-1 md:text-lg">Thông tin mới nhất</p>
          </Title>
        </NormalRevealWrapper>
        <NormalRevealWrapper>
          <OctagonalBox
            contentClassName="relative flex items-center justify-center"
            bigTriangleWidth="border-12"
            smallTriangleWidth="border-11"
            smallBoxClassName="h-16 md:h-24"
            borderSmallTriangleColor="border-second-brown"
          >
            <p className="text-xl font-bold text-center md:text-3xl font-vn">{newData.title}</p>
          </OctagonalBox>
        </NormalRevealWrapper>
      </BoxNews>
      {/* ========= Trailer ========= */}
      <NormalRevealWrapper>
        <div
          className="relative flex items-center justify-center w-full overflow-hidden h-[240px] md:h-[300px] xl:h-[400px] cursor-pointer group"
          onClick={() => setIsOpenVideoLightBox(true)}
        >
          {isClient && (
            <ReactPlayer
              className="scale-[2.4] aspect-video"
              url="https://www.youtube.com/embed/nQmCf8JE0G8?disablekb=1"
              playing={true}
              loop={true}
              controls={false}
              volume={1}
              muted={true}
              width="100%"
              config={{
                youtube: {
                  playerVars: {
                    disablekb: 1,
                    rel: 0,
                    iv_load_policy: 3,
                    playlist: "nQmCf8JE0G8"
                  }
                }
              }}
            />
          )}
          <div className="absolute w-full h-full bg-[url('../assets/pattern_dot_bold.png')]" />
          <div className="absolute w-full h-full bg-[rgba(51,51,51,.5)]" />
          <div className="absolute flex flex-col -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 gap-y-1 md:gap-y-2">
            <p className="text-3xl capitalize tracking-root text-neutral-100 md:text-5xl">Trailer</p>
            <svg className="h-10 mx-auto transition-colors ease-out md:h-14 fill-neutral-100 group-hover:fill-neutral-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z" /></svg>
          </div>
        </div>
      </NormalRevealWrapper>
      {/* ========= Twitter ========= */}
      <div className="px-2 max-w-[580px] mx-auto py-10 pb-20 md:pb-28">
        <NormalRevealWrapper>
          <div className="flex flex-row items-center gap-x-2">
            <p className="self-end text-5xl capitalize md:text-6xl tracking-root mb-7 ">T<span className="text-third-brown">w</span>itter</p>
            <div className="w-full h-px bg-black" />
            <div className="w-2 h-2 rotate-45 border-2 border-black shrink-0" />
          </div>
          <OctagonalBox
            contentClassName="relative flex items-center justify-center"
            bigTriangleWidth="border-12"
            smallTriangleWidth="border-11"
            borderSmallTriangleColor="border-root-white"
            smallBoxClassName="h-72"
            element={<ButtonTwitter />}
          >
            <a className="font-bold twitter-timeline font-vn" data-height="262" data-chrome="noheader, nofooter, noborders, transparent, noscrollbar" data-width="100%" data-lang="vi" href="https://twitter.com/yuusyagasinda?ref_src=twsrc%5Etfw">Tweets by yuusyagasinda</a>
          </OctagonalBox>
        </NormalRevealWrapper>
      </div>
      {/* ========= Thigh High Socks Gallery ========= */}
      <BoxNews>
        <NormalRevealWrapper>
          <Title>
            <div className="mx-2 text-4xl leading-none text-center sm:text-5xl tracking-root md:text-7xl">Thigh high socks</div>
            <p className="-ml-4 text-xs font-bold leading-none tracking-wide text-center capitalize font-vn md:-mt-1 md:text-lg">Tất Quá Gối (Cat Edition)</p>
          </Title>
        </NormalRevealWrapper>
        <NormalRevealWrapper>
          <div className="grid justify-between grid-cols-6 gap-y-4">
            {sockImages.map((sockImage, i) => {
              return <SockImage key={i} src={sockImage} handleOnClick={() => setIndex(i)} />
            })}
          </div>
        </NormalRevealWrapper>
        <div className="h-8 md:h-10" />
      </BoxNews>
      {/* ========= Light Box ========= */}
      <Lightbox
        index={index}
        slides={sockImages}
        open={index >= 0}
        close={handleCloseLightBox}
        controller={{ closeOnBackdropClick: true }}
        plugins={[Fullscreen, Zoom]}
        render={{ slide: NextJsImage }}
      />
    </>
  )
}

