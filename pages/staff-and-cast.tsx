import OctagonalBox from "@/components/OctagonalBox";
import Title from "@/components/Title";
import Container from "@/components/Container";
import LearnMoreButton from "@/components/staff-and-cast/LearnMoreButton";
import RowCast from "@/components/staff-and-cast/RowCast";
import RowStaff from "@/components/staff-and-cast/RowStaff";
import { useState } from "react";
import dynamic from "next/dynamic";
import NormalRevealWrapper from "@/components/NormalRevealWrapper";
import { casts } from "@/data";
const DynamicModalCast = dynamic(() => import("@/components/staff-and-cast/ModalCast"))

export default function Page() {
  const [openingCastDetail, setOpeningCastDetail] = useState<string>("")
  const handleCloseCastDetail = () => {
    setOpeningCastDetail("")
  }
  return (
    <>
      <Container>
        <NormalRevealWrapper>
          <Title>
            <p className="mx-2 text-4xl leading-none text-center sm:text-5xl tracking-root md:text-7xl">St<span className="text-third-brown">a</span>ff&<span className="text-third-brown">C</span>ast</p>
            <p className="-ml-4 text-xs font-bold leading-none tracking-wide text-center capitalize font-vn md:-mt-1 md:text-lg">Nhân viên và diễn viên</p>
          </Title>
        </NormalRevealWrapper>
        <div className="lg:mx-20">
          {/* ====== Staff ====== */}
          <NormalRevealWrapper>
            <OctagonalBox
              boxClassName="mt-14 mb-6 md:mt-14 font-vn font-bold relative"
              contentClassName="relative grid grid-cols-1 md:grid-cols-3 justify-center px-4 py-10 md:py-14 md:px-10 lg:px-16 md:gap-y-6"
              bigTriangleWidth="border-12"
              smallTriangleWidth="border-11"
              borderSmallTriangleColor="border-root-white"
              element={
                <OctagonalBox
                  boxClassName="absolute top-0 left-9 md:left-12 -translate-y-1/2 bg-root-white"
                  contentClassName="px-1 py-3 md:py-4 font-medium w-[150px]"
                  bigTriangleWidth="border-7.5"
                  smallTriangleWidth="border-6"
                  borderSmallTriangleColor="border-root-white"
                >
                  <div className="flex flex-row items-center gap-x-2">
                    <div className="w-3 h-3 rotate-45 bg-black" />
                    Nhân viên
                  </div>
                </OctagonalBox>
              }
            >
              <RowStaff leftContent="Tác phẩm gốc" rightContent="&#34;The legendary hero is dead!&#34;Subaruichi">
                <p className="font-medium">Xuất bản nhiều kỳ Shogakukan &#34;Manga One&#34;</p>
              </RowStaff>
              <RowStaff leftContent="Giám đốc" rightContent="Rion Kugi" />
              <RowStaff leftContent="Thiết kế nhân vật" rightContent="Yosuke Yabumoto" />
              <RowStaff leftContent="Thiết kế quái vật" rightContent="Akito Fujiwara" />
              <RowStaff leftContent="Nghệ thuật" rightContent="Hiroyuki Oyama">
                <span className="inline ml-1 md:text-lg">(Phòng thiết kế Barnstorm)</span>
              </RowStaff>
              <RowStaff leftContent="Giám đốc nghệ thuật" rightContent="Takayoshi Fukushima" />
              <RowStaff leftContent="Thiết kế màu sắc" rightContent="Mineyo Onishi" />
              <RowStaff leftContent="Đạo diễn hình ảnh" rightContent="Yusaku Murakami" />
              <RowStaff leftContent="Biên tập" rightContent="Yusaku Murakami" />
              <RowStaff leftContent="Giám đốc âm thanh" rightContent="Hiroshi Shimizu" />
              <RowStaff leftContent="Âm nhạc" rightContent="Utatane Kana, Yuki Nara, yamazo, MOKA☆" />
              <RowStaff leftContent="Sản xuất âm thanh" rightContent="Tohokushinsha" />
              <RowStaff leftContent="Sản xuất" rightContent="WOWMAX" />
            </OctagonalBox>
          </NormalRevealWrapper>
          {/* ====== Cast ====== */}
          <NormalRevealWrapper>
            <OctagonalBox
              boxClassName="mt-12 mb-16 md:mb-24 md:mt-16 font-vn font-bold relative"
              contentClassName="relative grid grid-cols-1 md:grid-cols-2 justify-center px-4 py-10 md:py-14 md:px-10 lg:px-16 md:gap-y-6"
              bigTriangleWidth="border-12"
              smallTriangleWidth="border-11"
              borderSmallTriangleColor="border-root-white"
              element={
                <OctagonalBox
                  boxClassName="absolute top-0 left-12 -translate-y-1/2 bg-root-white"
                  contentClassName="px-1 py-3 md:py-4 font-medium w-[150px]"
                  bigTriangleWidth="border-7.5"
                  smallTriangleWidth="border-6"
                  borderSmallTriangleColor="border-root-white"
                >
                  <div className="flex flex-row items-center gap-x-2">
                    <div className="w-3 h-3 rotate-45 bg-black" />
                    Diễn viên
                  </div>
                </OctagonalBox>
              }
            >
              {/* cast items */}
              {casts.map(cast => {
                return (
                  <RowCast key={cast.character} character={cast.character} cast={cast.name}>
                    {cast.id && (
                      <LearnMoreButton handleOnClick={() => setOpeningCastDetail(cast.id)} />
                    )}
                  </RowCast>
                )
              })}
            </OctagonalBox>
          </NormalRevealWrapper>
        </div>
      </Container>
      {/* cast detail modal */}
      {casts.map(cast => {
        if (cast.id && cast.content) {
          return (
            <DynamicModalCast
              key={cast.id}
              isOpen={openingCastDetail === cast.id}
              img={cast.img}
              character={cast.character}
              cast={cast.name}
              content={cast.content}
              handleOnClose={handleCloseCastDetail}
            />
          )
        }
      })}
    </>
  )
}