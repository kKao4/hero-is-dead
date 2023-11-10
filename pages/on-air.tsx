import Title from "@/components/Title";
import OctagonalBox from "@/components/OctagonalBox";
import TvRow from "@/components/on-air/TvRow";
import Container from "@/components/news/Container";
import DecoTitle from "@/components/on-air/DecoTitle";
import TvLink from "@/components/on-air/TvLink";

export default function Page() {
  return (
    <Container>
      <Title>
        <p className="mx-2 text-5xl leading-none text-center tracking-root md:text-7xl">On<span className="text-third-brown">A</span>ir</p>
        <p className="-ml-4 text-xs font-bold leading-none tracking-wide text-center font-vn md:-mt-1 md:text-lg">Thông tin phát sóng</p>
      </Title>
      <div className="xl:px-10">
        <DecoTitle>
          <p className="text-4xl md:text-7xl tracking-root">T<span className="text-third-brown">V</span></p>
        </DecoTitle>
        <div className="pt-4 mx-auto space-y-2 text-xl font-bold text-center md:pt-8 md:text-3xl w-fit font-vn text-root-brown">
          <p>Từ Tháng 4 Năm 2023</p>
          <p>Phát Sóng Trên TOKYO MX, BS11!</p>
        </div>
        <OctagonalBox
          boxClassName="mt-8 md:mt-10 mb-6 md:mt-14 font-vn font-bold"
          contentClassName="relative flex flex-col items-center justify-center px-3 md:px-4 p-6 md:p-14 md:px-10 lg:px-16 gap-y-8"
          bigTriangleWidth="border-12"
          smallTriangleWidth="border-11"
          borderSmallTriangleColor="border-root-white"
        >
          <TvRow first="TOKYO MX" second="Thứ năm ngày 6 tháng 4 năm 2023" third="25:00 thứ năm hàng tuần" />
          <TvRow first="BS11" second="Thứ năm ngày 6 tháng 4 năm 2023" third="25:00 thứ năm hàng tuần" />
          <TvRow first="Hokkaido TV" second="Thứ ba ngày 11 tháng 4 năm 2023" third="26:35 thứ ba hàng tuần" />
          <TvRow first="Rạp hát" second="Thứ năm ngày 27 tháng 4 năm 2023" third="25:00 thứ năm hàng tuần" />
        </OctagonalBox>
        <p className="-mt-2 font-medium text-center font-vn md:mt-0">*Thời gian phát sóng có thể thay đổi.</p>
        <div className="pt-8 pb-2 md:pt-12 md:pb-6">
          <Title />
        </div>
        <DecoTitle>
          <p className="text-4xl md:text-7xl tracking-root">S<span>trea<span className="text-third-brown">m</span>ing</span></p>
        </DecoTitle>
        <p className="mt-4 mb-1 text-xl font-bold text-center md:mt-8 md:text-3xl font-vn text-root-brown">Chiếu trước trên “Anime Store”, “DMM TV” và “U-NEXT”!</p>
        <p className="text-xl font-bold text-center md:text-3xl font-vn text-root-brown">Dự kiến ​​sẽ được chiếu trên các dịch vụ khác!</p>
        <p className="mt-8 mb-1 text-2xl font-bold text-center uppercase md:mb-3 md:mt-10 md:text-4xl font-vn text-root-brown">Công chiếu trước</p>

        <p className="text-xl font-bold text-center md:text-3xl font-vn text-root-brown">Chiếu vào 2:00 thứ năm(sáu) hàng tuần</p>
        <div className="grid grid-cols-6 pt-3 md:pt-7 gap-x-7 gap-y-4 md:gap-y-6">
          <TvLink href="https://www.dmm.com/" content="DMM TV" />
          <TvLink href="https://animestore.docomo.ne.jp/animestore/ci_pc?workId=26328" content="Some Text" />
          <TvLink href="https://video.unext.jp/title/SID0080286" content="U-NEXT" />
        </div>
        <p className="mt-8 mb-1 text-2xl font-bold text-center uppercase md:mb-3 md:mt-10 md:text-4xl font-vn text-root-brown">Xem không giới hạn</p>
        <p className="text-xl font-bold text-center md:text-3xl font-vn text-root-brown">Chiếu vào 0:00 thứ tư hàng tuần</p>
        <div className="grid grid-cols-6 py-3 md:py-7 gap-x-7 gap-y-4 md:gap-y-6">
          <TvLink href="https://abema.tv/video/title/189-49" content="ABEMA" />
          <TvLink href="https://www.amazon.co.jp/%E7%AC%AC1%E8%A9%B1-%E5%8B%87%E8%80%85%E3%81%8C%E6%AD%BB%E3%82%93%E3%81%A0%EF%BC%81%EF%BC%9F/dp/B0B66HRQL5/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=2KC15HGKUX0C1&keywords=%E5%8B%87%E8%80%85%E3%81%8C%E6%AD%BB%E3%82%93%E3%81%A0%EF%BC%81&qid=1681226530&s=instant-video&sprefix=%E5%8B%87%E8%80%85%E3%81%8C%E6%AD%BB%E3%82%93%E3%81%A0+%2Cinstant-video%2C324&sr=1-1" content="Amazon Video" />
          <TvLink href="https://animefesta.iowl.jp/?tid=1080" content="AnimeFesta" />
          <TvLink href="https://pass.auone.jp/main/" content="au Smart Pass" />
          <TvLink href="https://www.b-ch.com/titles/8094/" content="Bandai Chanel" />
          <TvLink href="https://fod.fujitv.co.jp/title/g9lc/" content="FOD" />
          <TvLink href="https://www.hulu.jp/the-legendary-hero-is-dead" content="Hulu" />
          <TvLink href="https://linkvod.myjcom.jp/video/sr00178945?type=series" content="JCOM Stream" />
          <TvLink href="https://lemino.docomo.ne.jp/search/subgenre/2-1-101/detail/2-1-101?crid=Y3JpZDovL3BsYWxhLmlwdHZmLmpwL2dyb3VwL2IxMDA0MTM%3D" content="Lemino" />
        </div>
        <div className="grid w-full grid-cols-6 mx-auto md:w-2/3 gap-x-7 gap-y-4 md:gap-y-6">
          <TvLink href="https://front.milplus.jp/pg/10048599" colSpan="col-span-full md:col-span-3" content="milplus" />
          <TvLink href="https://www.telasa.jp/series/13547" colSpan="col-span-full md:col-span-3" content="telasa" />
        </div>
        <p className="mt-8 mb-1 text-2xl font-bold text-center uppercase md:text-4xl md:mb-3 md:mt-10 font-vn text-root-brown">Dịch vụ lưu trữ</p>
        <p className="text-xl font-bold text-center md:text-3xl font-vn text-root-brown">Chiếu vào 0:00 thứ tư hàng tuần</p>
        <div className="grid w-full grid-cols-6 pt-3 mx-auto md:w-2/3 gap-x-7 md:pt-7 gap-y-4 md:gap-y-6">
          <TvLink href="https://www.amazon.co.jp/%E7%AC%AC1%E8%A9%B1-%E5%8B%87%E8%80%85%E3%81%8C%E6%AD%BB%E3%82%93%E3%81%A0%EF%BC%81%EF%BC%9F/dp/B0B66HRQL5/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=2KC15HGKUX0C1&keywords=%E5%8B%87%E8%80%85%E3%81%8C%E6%AD%BB%E3%82%93%E3%81%A0%EF%BC%81&qid=1681226530&s=instant-video&sprefix=%E5%8B%87%E8%80%85%E3%81%8C%E6%AD%BB%E3%82%93%E3%81%A0+%2Cinstant-video%2C324&sr=1-1" colSpan="col-span-full md:col-span-3" content="Amazon Video" />
          <TvLink href="https://www.videomarket.jp/title/03597X" colSpan="col-span-full md:col-span-3" content="Video Market" />
        </div>
        <p className="mt-8 mb-1 text-2xl font-bold text-center uppercase md:text-4xl md:mt-10 md:mb-3 font-vn text-root-brown">Dịch vụ xem miễn phí</p>
        <p className="text-xl font-bold text-center md:text-3xl font-vn text-root-brown">Chiếu vào 0:00 thứ tư hàng tuần</p>
        <div className="grid w-full grid-cols-6 pt-3 mx-auto md:w-1/3 gap-x-7 md:pt-7">
          <TvLink href="https://video.unext.jp/title/SID0080286" content="U-NEXT" colSpan="col-span-full" />
        </div>
        <p className="mt-4 text-xl font-bold text-center md:text-3xl md:mt-6 font-vn text-root-brown">Chiếu vào 2:00 thứ tư hàng tuần</p>
        <div className="grid w-full grid-cols-6 pt-3 mx-auto md:w-1/3 md:pt-7 gap-x-7">
          <TvLink href="https://abema.tv/video/title/189-49" content="ABEMA" colSpan="col-span-full" />
        </div>
        <p className="mt-4 font-medium text-center font-vn">*Thời gian chiếu có thể bị thay đổi.</p>
      </div>
      <div className="h-16 md:h-24" />
    </Container>
  )
}