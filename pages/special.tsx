import Container from "@/components/Container";
import Title from "@/components/Title";
import radioThumb from "@/assets/thumb_radio.webp";
import Item from "@/components/special/Item";
import { imagesLightBox, specialModalItems, specialLightBoxItems } from "@/data";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import NextJsImage from "@/components/NextJsImage";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import NormalRevealWrapper from "@/components/NormalRevealWrapper";
const DynamicModalVideo = dynamic(() => import("@/components/ModalVideo"))

export default function Page() {
  const [openingLightBox, setOpeningLightBox] = useState<string>("")
  const [index, setIndex] = useState<number>(-1)
  useEffect(() => {
    if (index >= 0) {
      document.documentElement.style.overflow = "hidden"
    } else {
      document.documentElement.style.overflow = "auto"
    }
  }, [index])
  return (
    <>
      {/* ====== Modal Video ====== */}
      {specialModalItems.map(item => {
        return (
          <DynamicModalVideo
            key={item.id}
            url={item.url}
            isOpenVideoLightBox={openingLightBox === item.id}
            handleCloseModal={() => setOpeningLightBox("")}
          />
        )
      })}
      <Container>
        <NormalRevealWrapper>
          <Title>
            <p className="mx-2 text-4xl leading-none text-center sm:text-5xl tracking-root md:text-7xl">S<span className="text-third-brown">p</span>ecial</p>
            <p className="-ml-4 text-xs font-bold leading-none tracking-wide text-center capitalize font-vn md:-mt-1 md:text-lg">Đặc biệt</p>
          </Title>
        </NormalRevealWrapper>
        <NormalRevealWrapper>
          <div className="grid grid-cols-2 px-8 pt-6 pb-24 gap-x-16 gap-y-12">
            <Item img={radioThumb} title="Radio về người anh hùng đã chết của Wataru Kato và Junichi Toki" handleOnClick={() => window.open("https://www.onsen.ag/program/heroisdead", "_blank")} />
            {/* modal items */}
            {specialModalItems.map((item, i) => {
              return <Item key={i} img={item.src} title={item.title} isVideo={true} handleOnClick={() => setOpeningLightBox(item.id)} />
            })}
            {/* light box items */}
            {specialLightBoxItems.map((item, i) => {
              return <Item key={i} img={item.src} title={item.title} handleOnClick={() => setIndex(item.index)} />
            })}
          </div>
        </NormalRevealWrapper>
        {/* ====== Light Box ====== */}
        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={imagesLightBox}
          render={{ slide: NextJsImage }}
          controller={{ closeOnBackdropClick: true }}
          plugins={[Fullscreen, Zoom]}
        />
      </Container>
    </>
  )
}