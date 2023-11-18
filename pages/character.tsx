import Title from "@/components/Title";
import Container from "@/components/Container";
import toukaThumb from "@/assets/touka_thumb.png"
import anriThumb from "@/assets/anli_thumb.png"
import yunaThumb from "@/assets/yuna_thumb.png"
import sionThumb from "@/assets/sion_thumb.png"
import malgritThumb from "@/assets/malgrit_thumb.png"
import kaliThumb from "@/assets/kail_thumb.png"
import eselThumb from "@/assets/esel_thumb.png"
import belarcoThumb from "@/assets/belarco_thumb.png"
import isaacThumb from "@/assets/isaac_thumb.png"
import lelandThumb from "@/assets/leland_thumb.png"
import friedrichThumb from "@/assets/friedrich_thumb.png"
import diegoThumb from "@/assets/diego_thumb.png"
import milyThumb from "@/assets/mily_thumb.png"
import CharacterThumb from "@/components/character/CharacterThumb";
import { useState } from "react";
import CharacterDetail from "@/components/character/CharacterDetail";
import toukaVisual from "@/assets/touka_visual_1.png"
import anriVisual from "@/assets/anli_visual_1.png"
import belarcoVisual from "@/assets/belarco_visual_1.png"
import friedrichVisual from "@/assets/friedrich_visual_1.png"

export default function Page() {
  const [openingCharacter, setOpeningCharacter] = useState<string>("touka")
  return (
    <>
      <Container>
        <Title>
          <p className="mx-2 text-5xl leading-none text-center tracking-root md:text-7xl">Cha<span className="text-third-brown">r</span>acter</p>
          <p className="-ml-4 text-xs font-bold leading-none tracking-wide text-center font-vn md:-mt-1 md:text-lg">Nhân vật</p>
        </Title>
      </Container>
      <Container maxWidth="1280px" className="pt-9 pb-36">
        <div className="flex flex-row flex-wrap px-4 gap-x-10 mx-auto max-w-fit">
          <CharacterThumb isActive={openingCharacter === "touka"} img={toukaThumb} handleOnClick={() => setOpeningCharacter("touka")} />
          <CharacterThumb isActive={openingCharacter === "anri"} img={anriThumb} handleOnClick={() => setOpeningCharacter("anri")} />
          <CharacterThumb isActive={openingCharacter === ""} img={yunaThumb} handleOnClick={() => setOpeningCharacter("")} />
          <CharacterThumb isActive={openingCharacter === ""} img={sionThumb} handleOnClick={() => setOpeningCharacter("")} />
          <CharacterThumb isActive={openingCharacter === ""} img={malgritThumb} handleOnClick={() => setOpeningCharacter("")} />
          <CharacterThumb isActive={openingCharacter === ""} img={kaliThumb} handleOnClick={() => setOpeningCharacter("")} />
          <CharacterThumb isActive={openingCharacter === ""} img={eselThumb} handleOnClick={() => setOpeningCharacter("")} />
          <CharacterThumb isActive={openingCharacter === ""} img={belarcoThumb} handleOnClick={() => setOpeningCharacter("")} />
          <CharacterThumb isActive={openingCharacter === ""} img={isaacThumb} handleOnClick={() => setOpeningCharacter("")} />
          <CharacterThumb isActive={openingCharacter === ""} img={lelandThumb} handleOnClick={() => setOpeningCharacter("")} />
          <CharacterThumb isActive={openingCharacter === ""} img={friedrichThumb} handleOnClick={() => setOpeningCharacter("")} />
          <CharacterThumb isActive={openingCharacter === ""} img={diegoThumb} handleOnClick={() => setOpeningCharacter("")} />
          <CharacterThumb isActive={openingCharacter === ""} img={milyThumb} handleOnClick={() => setOpeningCharacter("")} />
        </div>
      </Container>
      <div className="bg-second-brown pt-32 pb-60 pl-72">
        <CharacterDetail
          isOpen={openingCharacter === "touka"}
          img={toukaVisual}
          character="touka scott"
          cv="Dân làng: Wataru Kato / Anh hùng: Junichi Toki"
          content="Một nông dân sống ở làng Cheza. Cô ấy có một tính cách dâm đãng và đặc biệt bị ám ảnh bởi cây sim. Nỗi ám ảnh của anh ấy mạnh mẽ đến mức anh ấy thậm chí còn coi củ cải mà anh ấy lớn lên như lông tơ và bắt anh ấy phải đi tất. Bạn thời thơ ấu của Yuna. Mặc dù trình độ phép thuật của anh ấy chỉ ở mức của một đứa trẻ nhưng anh ấy rất tháo vát nhờ kinh nghiệm trong quá khứ. Vì lý do nào đó, linh hồn của anh được chuyển vào cơ thể của anh hùng Shion."
        />
        {/* TODO: dynamic import other details and add nprogress for website */}
        <CharacterDetail
          isOpen={openingCharacter === "anri"}
          img={anriVisual}
          character="anri hazeworth"
          cv="Ayana Taketatsu"
          content="Một cô gái chiêu hồn từng tham gia cuộc phiêu lưu cùng anh hùng Shion. Khi còn sống, anh nghe thấy Shion nói: “Khi tôi chết, tôi muốn người khác chiếm lấy cơ thể này”, nên anh đã chuyển linh hồn của Touka vào cơ thể của Shion. Thuật chiêu hồn được coi là một nghệ thuật bị cấm và bị người dân bức hại."
        />
      </div>
    </>
  )
}