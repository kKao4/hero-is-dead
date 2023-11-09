import Image from "next/image";
import bluRayImage from "@/assets/onair_03.svg"
import type { InferGetStaticPropsType, GetStaticProps } from 'next'
import New, { NewType } from "@/models/new";
import dbConnect from "@/lib/dbConnect";
import { useEffect, useState } from "react";
import ReactPlayer from 'react-player/lazy'
import ModalVideo from "@/components/home/ModalVideo";
import RootImage from "@/components/home/RootImage";
import News from "@/components/home/News";
import image1 from "@/assets/futomomo_01.jpg"
import image2 from "@/assets/futomomo_02.jpg"
import image3 from "@/assets/futomomo_03.jpg"
import image4 from "@/assets/futomomo_04.jpg"
import image5 from "@/assets/futomomo_05.jpg"
import image6 from "@/assets/futomomo_06.jpg"
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import Lightbox from "yet-another-react-lightbox";
import NextJsImage from "../components/NextJsImage";
import Title from "@/components/Title";
import BoxTitle from "@/components/BoxTitle";
import SockImage from "@/components/home/SockImage";
import NormalRevealWrapper from "@/components/NormalRevealWrapper";

export const getStaticProps: GetStaticProps<{ newData: NewType }> = async () => {
  await dbConnect();
  const news = await New.find({}).sort({ updatedAt: "desc" });
  const newData = JSON.parse(JSON.stringify(news[0]));
  return { props: { newData }, revalidate: 30 }
}

export default function Page({ newData }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [isOpenVideoLightBox, setIsOpenVideoLightBox] = useState<boolean>(false)
  const [hasWindow, setHasWindow] = useState(false);
  const [index, setIndex] = useState<number>(-1)
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);
  return (
    <>
      <ModalVideo isOpenVideoLightBox={isOpenVideoLightBox} hasWindow={hasWindow} handleCloseModal={() => {
        setIsOpenVideoLightBox(false)
      }}
      />
      <div className="max-w-full sm:max-w-[1160px] sm:px-4 lg:px-14 xl:px-0 pt-4 mx-auto">
        {/* Root Image */}
        <RootImage />
        <NormalRevealWrapper>
          {/* Blu-ray Box */}
          <div className="">
            <Image src={bluRayImage} alt="" className="py-4 mx-auto" quality={100} />
          </div>
        </NormalRevealWrapper>
      </div>
      {/* News */}
      <News data={newData} />
      <NormalRevealWrapper>
        <div
          className="relative flex items-center justify-center w-full overflow-hidden h-[240px] md:h-[300px] xl:h-[400px] cursor-pointer group"
          onClick={() => {
            setIsOpenVideoLightBox(true)
          }}
        >
          {hasWindow && (
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
            <p className="text-3xl tracking-widest capitalize text-neutral-100 md:text-5xl">Trailer</p>
            <svg className="mx-auto transition-colors h-11 md:h-16 fill-neutral-100 group-hover:fill-neutral-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z" /></svg>
          </div>
        </div>
      </NormalRevealWrapper>
      {/* Twitter */}
      <div className="px-2 max-w-[580px] mx-auto py-10 pb-20 md:pb-28">
        <NormalRevealWrapper>
          {/*  */}
          <div className="flex flex-row items-center gap-x-2">
            <p className="self-end text-5xl capitalize tracking-root mb-7 "><span className="text-6xl">T</span><span className="text-third-brown">W</span>ITTER</p>
            <div className="w-full h-px bg-black" />
            <div className="w-2 h-2 rotate-45 border-2 border-black shrink-0" />
          </div>
          {/*  */}
          <div className="relative flex flex-row">
            <div className="relative z-10 w-6 mx-auto h-72">
              <div className="absolute top-0 left-0 w-0 border-transparent border-12 border-t-black border-l-black" />
              <div className="absolute top-0 left-0 w-0 border-transparent border-11 border-t-root-white border-l-root-white" />
              <div className="absolute bottom-0 left-0 w-0 border-transparent border-12 border-b-black border-l-black" />
              <div className="absolute bottom-0 left-0 w-0 border-transparent border-11 border-b-root-white border-l-root-white" />
              <div className="w-full h-full border-r-0 border-black border-3"></div>
            </div>
            <div className="relative flex items-center justify-center w-full -mx-2 border-3 border-t-black border-b-black border-x-transparent">
              <a className="twitter-timeline" data-height="262" data-chrome="	noheader, nofooter, noborders, transparent, noscrollbar" data-width="100%" data-lang="vi" href="https://twitter.com/yuusyagasinda?ref_src=twsrc%5Etfw">Tweets by yuusyagasinda</a>
            </div>
            <div className="relative z-10 w-6 mx-auto h-72">
              <div className="absolute top-0 right-0 w-0 border-transparent border-12 border-t-black border-r-black" />
              <div className="absolute top-0 right-0 w-0 border-transparent border-11 border-t-root-white border-r-root-white" />
              <div className="absolute bottom-0 right-0 w-0 border-transparent border-12 border-b-black border-r-black" />
              <div className="absolute bottom-0 right-0 w-0 border-transparent border-11 border-b-root-white border-r-root-white" />
              <div className="w-full h-full border-l-0 border-black border-3"></div>
            </div>
            {/* button */}
            <button
              className="absolute -bottom-8 left-8 w-[220px] py-4 sm:py-4.5 border-3 items-center border-black bg-white rounded-xl flex flex-row px-2 justify-evenly group hover:bg-black transition-colors"
              onClick={() => window.open("https://twitter.com/yuusyagasinda", "_blank")}
            >
              <svg className="h-6 transition-colors fill-black group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" /></svg>
              <span className="transition-colors group-hover:text-white normal-font-vn">Twitter chính thức</span>
            </button>
          </div>
        </NormalRevealWrapper>
      </div>
      <BoxTitle>
        <NormalRevealWrapper>
          <Title>
            <div className="title-main">Thigh high socks</div>
            <p className="title-second">Tất Quá Gối</p>
          </Title>
        </NormalRevealWrapper>
        <div className="grid justify-between grid-cols-6 gap-y-4">
          <SockImage src={image1} handleOnClick={() => setIndex(0)} />
          <SockImage src={image2} handleOnClick={() => setIndex(1)} />
          <SockImage src={image3} handleOnClick={() => setIndex(2)} />
          <SockImage src={image4} handleOnClick={() => setIndex(3)} />
          <SockImage src={image5} handleOnClick={() => setIndex(4)} />
          <SockImage src={image6} handleOnClick={() => setIndex(5)} />
        </div>
        <div className="h-8 md:h-10" />
      </BoxTitle>
      <Lightbox
        index={index}
        slides={[image1, image2, image3, image4, image5, image6]}
        open={index >= 0}
        close={() => setIndex(-1)}
        controller={{ closeOnBackdropClick: true }}
        plugins={[Fullscreen, Zoom]}
        render={{ slide: NextJsImage }}
      />
    </>
  )
}

