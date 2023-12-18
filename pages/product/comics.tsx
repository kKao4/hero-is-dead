import Container from "@/components/global/Container";
import HeaderDecoTopBottom from "@/components/global/header/HeaderDecoTopBottom";
import ProductTitle from "@/components/product/ProductTitle";
import Image from "next/image";
import kaminokuni from "@/assets/kaminokuni.jpg"
import Comic from "@/components/product/Comic";
import { comics } from "@/data";
import NormalRevealWrapper from "@/components/global/revealWrapper/NormalRevealWrapper";

export default function Page() {
  return (
    <>
      <Container>
        <NormalRevealWrapper>
          <ProductTitle />
        </NormalRevealWrapper>
        <div className="pb-6 md:pb-12">
          <NormalRevealWrapper>
            <HeaderDecoTopBottom>
              <div className="md:space-y-1.5">
                <p className="font-medium text-center uppercase md:text-xl font-vn">Book</p>
                <p className="text-2xl font-bold text-center md:text-3xl text-third-brown font-vn">Truyện tranh gốc</p>
              </div>
            </HeaderDecoTopBottom>
          </NormalRevealWrapper>
        </div>
        <NormalRevealWrapper bottom={0}>
          <p className="font-vn text-2xl md:text-3xl lg:text-4xl font-bold text-third-brown text-center mb-1.5">&#34;Anh hùng đã chết! Phiên bản đất nước của Chúa&#34;</p>
          <p className="mb-4 text-xl font-bold text-center font-vn md:text-2xl lg:text-3xl sm:mb-6">Hiện đang được đăng nhiều kỳ trên Shogakukan “ Manga One”</p>
          <div className="max-w-[712px] mb-4 sm:mb-6 mx-auto hover:opacity-70 transition-opacity duration-300 ease-out cursor-pointer" onClick={() => window.open("https://manga-one.com/", "_blank")}>
            <Image className="w-full" src={kaminokuni} alt="" placeholder="blur" quality={100} priority={true} />
          </div>
          <p className="font-bold sm:text-lg md:text-xl text-center font-vn max-w-[920px] mx-auto mb-8 sm:mb-12">Một năm rưỡi sau. Một loạt phim ngoại truyện miêu tả Touka và những người bạn của anh đã lấy lại được cuộc sống thường ngày “khỏe mạnh”!</p>
          <p className="text-2xl font-bold text-center font-vn text-third-brown md:text-3xl">Tất cả 20 tập truyện tranh gốc hiện đang được bán.</p>
        </NormalRevealWrapper>
      </Container>
      <Container style={{ maxWidth: "980px" }} className="pt-4 sm:pt-6 pb-14 sm:pb-18">
        <NormalRevealWrapper>
          <div className="grid grid-cols-4 md:grid-cols-6 gap-x-3 sm:gap-x-4 gap-y-4 sm:gap-y-5">
            {/* mangas volume items */}
            {comics.map((comic, i) => {
              return (
                <Comic key={i} img={comic.src} href={comic.href} volume={(i + 1).toString()} />
              )
            })}
          </div>
        </NormalRevealWrapper>
      </Container>
    </>
  )
}