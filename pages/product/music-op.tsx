import Container from "@/components/Container";
import ProductTitle from "@/components/product/ProductTitle";
import Image from "next/image";
import opImg from "@/assets/op.jpg"
import RedHeader from "@/components/product/RedHeader";
import HeaderDecoTopBottom from "@/components/HeaderDecoTopBottom";
import NormalRevealWrapper from "@/components/NormalRevealWrapper";

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
              <div className="space-y-1.5">
                <p className="text-xl font-bold text-center md:text-2xl text-third-brown font-vn">Bài hát mở đầu</p>
                <p className="text-2xl font-bold text-center md:text-3xl text-third-brown font-vn">&#34;Anh ấy chết rồi!&#34; Masayoshi Oishi</p>
              </div>
            </HeaderDecoTopBottom>
          </NormalRevealWrapper>
        </div>
        <div className="md:px-4 pb-14 md:pb-20">
          <NormalRevealWrapper bottom={0}>
            <div className="flex flex-col md:flex-row gap-y-8">
              {/* left col */}
              <div className="basis-[44%] shrink-0 px-6 md:px-0">
                <Image className="w-[435px] mx-auto" src={opImg} alt="" priority={true} quality={100} placeholder="blur" />
              </div>
              {/* right col */}
              <div className="md:px-12 font-vn grow">
                <p className="text-lg font-bold md:text-xl">Ngày 7 tháng 4 năm 2023 Digital</p>
                <p className="text-lg font-bold md:text-xl">Ngày 31 tháng 5 năm 2023 CD</p>
                <p className="mt-6 font-bold md:mt-12 md:text-lg text-third-brown">Digital</p>
                <hr className="h-0.5 my-1 bg-black" />
                <button className="px-8 py-5 mt-3 font-medium text-white transition-colors duration-300 ease-out bg-black hover:bg-black/70" onClick={() => window.open("https://014014.lnk.to/SHINDA", "_blank")}>Bấm vào đây để nghe</button>
                <RedHeader content="Âm nhạc được ghi lại" />
                <ol className="mt-2 list-decimal md:mt-4 pl-9">
                  <li className="font-bold md:text-lg">Chết!</li>
                  <p className="mt-2 text-sm font-medium md:text-base">(Bài hát mở đầu cho anime truyền hình “The Brave Died!”)</p>
                </ol>
                <p className="mt-6 text-lg font-bold md:mt-12 text-third-brown">CD</p>
                <hr className="h-0.5 my-1 bg-black" />
                <p className="mt-3 font-medium tracking-wide md:mt-5 md:text-lg"><strong className="font-bold">Phiên bản giới hạn đầu tiên (CD + Blu-ray)</strong> : PCCG-02249 / ¥2.640 (thuế) <strong className="font-bold">Phiên bản thông thường (CHỈ CD)</strong> : PCCG-02250 / ¥1.540 (thuế)</p>
                <div className="mt-2 cursor-pointer group md:mt-4" onClick={() => window.open("https://www.014014.jp/", "_blank")}>
                  <svg className="inline w-4 mr-2 transition-colors duration-300 ease-out fill-red-600 group-hover:fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z" /></svg>
                  <p className="inline text-sm font-medium text-red-600 transition-colors duration-300 ease-out md:text-base group-hover:text-black">Để biết thông tin sản phẩm, vui lòng truy cập trang web chính thức</p>
                </div>
                <RedHeader content="Âm nhạc được ghi lại" />
                <p className="mt-3 font-medium md:mt-4 md:text-lg">Chết! Chứa 5 bài hát bao gồm kích thước TV và nhạc cụ.</p>
                <RedHeader content="Lưu ý" />
                <p className="mt-3 font-medium md:mt-4 md:text-lg">Tặng kèm Blu-ray “Chết!” Video nhạc và các bản ghi âm khác</p>
                <p className="mt-2 text-sm font-medium md:mt-4 md:text-base">*Chỉ phiên bản giới hạn đầu tiên</p>
              </div>
            </div>
          </NormalRevealWrapper>
        </div>
      </Container>
    </>
  )
}