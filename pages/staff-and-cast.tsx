import OctagonalBox from "@/components/OctagonalBox";
import Title from "@/components/Title";
import Container from "@/components/news/Container";
import LearnMoreButton from "@/components/staff-and-cast/LearnMoreButton";
import RowCast from "@/components/staff-and-cast/RowCast";
import RowStaff from "@/components/staff-and-cast/RowStaff";
import { useState } from "react";
import castOhara from "@/assets/cast_ohara.jpg"
import castNakamura from "@/assets/cast_nakamura.jpg"
import castHatano from "@/assets/cast_hatano.jpg"
import dynamic from "next/dynamic";
const DynamicModalCast = dynamic(() => import("@/components/staff-and-cast/ModalCast"))

export default function StaffAndCast() {
  const [openingCastDetail, setOpeningCastDetail] = useState<string>("")
  const handleCloseCastDetail = () => {
    setOpeningCastDetail("")
  }
  return (
    <>
      <Container>
        <Title>
          <p className="mx-2 text-3xl leading-none text-center tracking-root md:text-7xl">St<span className="text-third-brown">a</span>ff&<span className="text-third-brown">C</span>ast</p>
          <p className="-ml-4 text-xs font-bold leading-none tracking-wide text-center font-vn md:-mt-1 md:text-lg">Nhân viên và diễn viên</p>
        </Title>
        <div className="lg:mx-20">
          {/* ====== Staff ====== */}
          <OctagonalBox
            boxClassName="mt-12 mb-6 md:mt-14 font-vn font-bold relative"
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
              <span className="md:text-lg ml-1 inline">(Phòng thiết kế Barnstorm)</span>
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
          {/* ====== Cast ====== */}
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
            <RowCast character="Touka Scott" voiceActor="Wataru Kato/Junichi Toki" />
            <RowCast character="Sion Breydan" voiceActor="Junichi Toki" />
            <RowCast character="Henri Haysworth" voiceActor="Ayana Taketatsu" />
            <RowCast character="Yuna Yunis" voiceActor="Hibiki Yamamura" />
            <RowCast character="Marguerite Fallom" voiceActor="Yuryka Kubo" />
            <RowCast character="Kyle Ozment" voiceActor="Yuichi Nakamura">
              <LearnMoreButton handleOnClick={() => setOpeningCastDetail("Nakamura")} />
            </RowCast>
            <RowCast character="Ethel Borgnine" voiceActor="Sayaka Ohara">
              <LearnMoreButton handleOnClick={() => setOpeningCastDetail("Ohara")} />
            </RowCast>
            <RowCast character="Belarco" voiceActor="Wataru Hatano">
              <LearnMoreButton handleOnClick={() => setOpeningCastDetail("Belarco")} />
            </RowCast>
            <RowCast character="Isaac Gardner" voiceActor="Takashi Aoki">
              <LearnMoreButton handleOnClick={() => setOpeningCastDetail("1")} />
            </RowCast>
            <RowCast character="Leland Tolman" voiceActor="Chikahiro Kobayashi">
              <LearnMoreButton handleOnClick={() => setOpeningCastDetail("1")} />
            </RowCast>
            <RowCast character="Friedrich Norstein" voiceActor="Kensho Ono">
              <LearnMoreButton handleOnClick={() => setOpeningCastDetail("1")} />
            </RowCast>
            <RowCast character="Diego Valentine" voiceActor="Shintaro Asanuma">
              <LearnMoreButton handleOnClick={() => setOpeningCastDetail("1")} />
            </RowCast>
            <RowCast character="Milly Yunis" voiceActor="Shinpuku Sakura">
              <LearnMoreButton handleOnClick={() => setOpeningCastDetail("1")} />
            </RowCast>
            <RowCast character="Fieri Yunis" voiceActor="Hiroki Higashichi">
              <LearnMoreButton handleOnClick={() => setOpeningCastDetail("1")} />
            </RowCast>
          </OctagonalBox>
        </div>
      </Container>
      <DynamicModalCast
        isOpen={openingCastDetail === "Ohara"}
        handleOnClose={handleCloseCastDetail}
        img={castOhara}
        character="Ethel Borgnine"
        voiceActor="Sayaka Ohara"
        content="Tôi sẽ đóng vai người cố vấn của Touka, Ethel.Có nhiều cảnh anh ấy tỏ ra là một nhân vật mạnh mẽ, ngầu và hoàn hảo, đồng thời anh ấy thể hiện những biểu cảm bất ngờ, và tôi cảm thấy rất vui khi các diễn viên có thể tận hưởng trọn vẹn sự cân bằng tinh tế giữa nghiêm túc và hài hước trong suốt tác phẩm.Xin hãy chờ đợi nó được phát sóng...♪"
      />
      <DynamicModalCast
        isOpen={openingCastDetail === "Nakamura"}
        handleOnClose={handleCloseCastDetail}
        img={castNakamura}
        character="Kyle Ozment"
        voiceActor="Yuichi Nakamura"
        content="Người đàn ông mà tôi sẽ vào vai lần này là một người mạnh mẽ, lôi cuốn và là người mà bạn có thể rất kính trọng... nhưng con người luôn có một mặt ẩn giấu.
        Tôi hy vọng bạn mong muốn tìm hiểu xem anh ấy thực sự là người như thế nào!"
      />
      <DynamicModalCast
        isOpen={openingCastDetail === "Belarco"}
        handleOnClose={handleCloseCastDetail}
        img={castHatano}
        character="Belarco"
        voiceActor="Wataru Hatano"
        content="Tôi sẽ đảm nhận vai Belako.
        Được biết đến với cái tên Belako, &#34;Ngọn giáo song sinh&#34;, anh ta là một nhà thám hiểm lành nghề, người đã từng tiêu diệt hơn 100 con quỷ.
        Tôi thực sự rất vinh dự khi được đóng một vai ngầu và ngầu như vậy!
        Hãy chờ đợi sự thành công của Belako!"
      />
      {/* TODO: dynamic import  */}

    </>
  )
}