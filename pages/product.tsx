import Container from "@/components/Container";
import bdboxImg from "@/assets/bdbox.jpg"
import opImg from "@/assets/op.jpg"
import comic1Img from "@/assets/comic_01.jpg"
import Product from "@/components/product/Product";
import ProductTitle from "@/components/product/ProductTitle";

export default function Page() {
  return (
    <>
      {/* TODO: add reveal for character page and scroll to top btn */}
      <Container>
        <ProductTitle />
        <div className="grid justify-between pt-2 pb-16 md:px-8 md:grid-cols-3 lg:pb-24 gap-y-10 lg:gap-y-12 xl:gap-y-16 gap-x-6 lg:gap-x-10 xl:gap-x-14">
          <Product href="/" img={bdboxImg} title="Anh hùng đã chết! Blu-ray BOX" />
          <Product href="/product/music-op" img={opImg} title="Chủ đề OP &#34;Chết!&#34; Masayoshi Oishi" />
          <Product href="/" img={comic1Img} title="Truyện tranh gốc" />
          <Product href="/" img={bdboxImg} title="Anh hùng đã chết! Blu-ray BOX" />
        </div>
      </Container>
    </>
  )
}