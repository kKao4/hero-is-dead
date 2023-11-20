import Container from "@/components/Container";
import HeaderDecoTopBottom from "@/components/HeaderDecoTopBottom";
import ProductTitle from "@/components/product/ProductTitle";
import Image from "next/image";
import kaminokuni from "@/assets/kaminokuni.jpg"
import Comic from "@/components/product/Comic";
import { comics } from "@/data";

export default function Page() {
  return (
    <>
      <Container>
        <ProductTitle />
        <div className="pb-6 md:pb-12">
          <HeaderDecoTopBottom>
            <div className="md:space-y-1.5">
              <p className="md:text-xl font-medium text-center font-vn uppercase">Book</p>
              <p className="text-2xl md:text-3xl font-bold text-center text-third-brown font-vn">Truyện tranh gốc</p>
            </div>
          </HeaderDecoTopBottom>
        </div>
        <p className="font-vn text-2xl md:text-3xl lg:text-4xl font-bold text-third-brown text-center mb-1.5">&#34;Anh hùng đã chết! Phiên bản đất nước của Chúa&#34;</p>
        <p className="font-vn text-xl md:text-2xl lg:text-3xl font-bold text-center mb-4 sm:mb-6">Hiện đang được đăng nhiều kỳ trên Shogakukan “ Manga One”</p>
        <div className="max-w-[712px] mb-4 sm:mb-6 mx-auto hover:opacity-70 transition-opacity duration-300 ease-out cursor-pointer" onClick={() => window.open("https://manga-one.com/", "_blank")}>
          <Image className="w-full" src={kaminokuni} alt="" placeholder="blur" quality={100} priority={true} />
        </div>
        <p className="font-bold sm:text-lg md:text-xl text-center font-vn max-w-[920px] mx-auto mb-8 sm:mb-12">Một năm rưỡi sau. Một loạt phim ngoại truyện miêu tả Touka và những người bạn của anh đã lấy lại được cuộc sống thường ngày “khỏe mạnh”!</p>
        <p className="font-vn text-third-brown text-2xl md:text-3xl text-center font-bold">Tất cả 20 tập truyện tranh gốc hiện đang được bán.</p>
      </Container>
      <Container style={{ maxWidth: "980px" }} className="pt-4 sm:pt-6 pb-14 sm:pb-18">
        <div className="grid grid-cols-4 md:grid-cols-6 gap-x-3 sm:gap-x-4 gap-y-4 sm:gap-y-5">
          {comics.map((comic, i) => {
            return <Comic key={i} img={comic.src} href={comic.href} volume={(i + 1).toString()} />
          })}
        </div>
      </Container>
    </>
  )
}