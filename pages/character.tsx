import Title from "@/components/Title";
import Container from "@/components/Container";
import toukaThumb from "@/assets/touka_thumb.png"
import anriThumb from "@/assets/anli_thumb.png"
import yunaThumb from "@/assets/yuna_thumb.png"
import sionThumb from "@/assets/sion_thumb.png"
import malgritThumb from "@/assets/malgrit_thumb.png"
import kyleThumb from "@/assets/kail_thumb.png"
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
import yunaVisual from "@/assets/yuna_visual_1.png"
import sionVisual from "@/assets/sion_visual_1.png"
import malgritVisual from "@/assets/malgrit_visual_1.png"
import kyleVisual from "@/assets/kail_visual_1.png"
import eselVisual from "@/assets/esel_visual_1.png"
import isaacVisual from "@/assets/isaac_visual_1.png"
import lelandVisual from "@/assets/leland_visual_1.png"
import diegoVisual from "@/assets/diego_visual_1.png"
import milyVisual from "@/assets/mily_visual_1.png"
import belarcoVisual from "@/assets/belarco_visual_1.png"
import friedrichVisual from "@/assets/friedrich_visual_1.png"

export default function Page() {
  const [openingCharacter, setOpeningCharacter] = useState<string>("touka")
  return (
    <>
      <Container>
        <Title>
          <p className="mx-2 text-4xl leading-none text-center sm:text-5xl tracking-root md:text-7xl">Cha<span className="text-third-brown">r</span>acter</p>
          <p className="-ml-4 text-xs font-bold leading-none tracking-wide capitalize text-center font-vn md:-mt-1 md:text-lg">Nhân vật</p>
        </Title>
      </Container>
      <Container style={{ maxWidth: "1280px" }} className="pt-6 pb-32 sm:pt-9">
        {/* TODO: refactoring the data into a map */}
        <div className="flex flex-row flex-wrap justify-center gap-6 mx-auto sm:gap-7 md:gap-10 max-w-fit">
          <CharacterThumb isActive={openingCharacter === "touka"} img={toukaThumb} handleOnClick={() => setOpeningCharacter("touka")} />
          <CharacterThumb isActive={openingCharacter === "anri"} img={anriThumb} handleOnClick={() => setOpeningCharacter("anri")} />
          <CharacterThumb isActive={openingCharacter === "yuna"} img={yunaThumb} handleOnClick={() => setOpeningCharacter("yuna")} />
          <CharacterThumb isActive={openingCharacter === "sion"} img={sionThumb} handleOnClick={() => setOpeningCharacter("sion")} />
          <CharacterThumb isActive={openingCharacter === "malgrit"} img={malgritThumb} handleOnClick={() => setOpeningCharacter("malgrit")} />
          <CharacterThumb isActive={openingCharacter === "kyle"} img={kyleThumb} handleOnClick={() => setOpeningCharacter("kyle")} />
          <CharacterThumb isActive={openingCharacter === "esel"} img={eselThumb} handleOnClick={() => setOpeningCharacter("esel")} />
          <CharacterThumb isActive={openingCharacter === "belarco"} img={belarcoThumb} handleOnClick={() => setOpeningCharacter("belarco")} />
          <CharacterThumb isActive={openingCharacter === "isaac"} img={isaacThumb} handleOnClick={() => setOpeningCharacter("isaac")} />
          <CharacterThumb isActive={openingCharacter === "leland"} img={lelandThumb} handleOnClick={() => setOpeningCharacter("leland")} />
          <CharacterThumb isActive={openingCharacter === "friedrich"} img={friedrichThumb} handleOnClick={() => setOpeningCharacter("friedrich")} />
          <CharacterThumb isActive={openingCharacter === "diego"} img={diegoThumb} handleOnClick={() => setOpeningCharacter("diego")} />
          <CharacterThumb isActive={openingCharacter === "mily"} img={milyThumb} handleOnClick={() => setOpeningCharacter("mily")} />
        </div>
      </Container>
      {/* TODO: refactoring the data into a map */}
      <div className="bg-second-brown pt-[390px] sm:pt-[540px] lg:pt-24 xl:pt-40 pb-12 lg:pb-28 xl:pb-44 px-4">
        <div className="relative w-fit mx-auto -translate-x-0 lg:-translate-x-[8%]">
          <CharacterDetail
            isFirst={true}
            isOpen={openingCharacter === "touka"}
            img={toukaVisual}
            character="touka scott"
            cv="Dân làng: Wataru Kato / Anh hùng: Junichi Toki"
            content="Một nông dân sống ở làng Cheza. Cô ấy có một tính cách dâm đãng và đặc biệt bị ám ảnh bởi cây sim. Nỗi ám ảnh của anh ấy mạnh mẽ đến mức anh ấy thậm chí còn coi củ cải mà anh ấy lớn lên như lông tơ và bắt anh ấy phải đi tất. Bạn thời thơ ấu của Yuna. Mặc dù trình độ phép thuật của anh ấy chỉ ở mức của một đứa trẻ nhưng anh ấy rất tháo vát nhờ kinh nghiệm trong quá khứ. Vì lý do nào đó, linh hồn của anh được chuyển vào cơ thể của anh hùng Shion."
          />
          <CharacterDetail
            isOpen={openingCharacter === "anri"}
            img={anriVisual}
            character="Anri Hazeworth"
            cv="Ayana Taketatsu"
            content="Một cô gái chiêu hồn từng tham gia cuộc phiêu lưu cùng anh hùng Shion. Khi còn sống, anh nghe thấy Shion nói: “Khi tôi chết, tôi muốn người khác chiếm lấy cơ thể này”, nên anh đã chuyển linh hồn của Touka vào cơ thể của Shion. Thuật chiêu hồn được coi là một nghệ thuật bị cấm và bị người dân bức hại."
          />
          <CharacterDetail
            isOpen={openingCharacter === "yuna"}
            img={yunaVisual}
            character="Yuna Yunis"
            cv="Hibiki Yamamura"
            content="Một cô gái sống ở làng Cheza và là bạn thời thơ ấu của Touka. Anh ấy có một phong cách lý tưởng cho Touka và thường được Futomomo nhắm đến. Cô được anh hùng Shion ngưỡng mộ từ ba năm trước, khi bị một con quỷ tấn công, cô đã được cứu. Cuối cùng anh ấy bắt đầu cuộc hành trình với Touka trong cơ thể của Shion. Sức mạnh phép thuật của anh ấy ở mức độ của một đứa trẻ, nhưng anh ấy đang học võ thuật."
          />
          <CharacterDetail
            isOpen={openingCharacter === "sion"}
            img={sionVisual}
            character="Sion Breydan"
            cv="Junichi Toki"
            content="Một anh hùng đã sử dụng thánh kiếm để phong ấn cánh cổng địa ngục và cứu thế giới ba năm trước. Anh ấy có tính cách tốt bụng và tốt bụng với mọi người. Anh ta nhận được sự ủng hộ to lớn nhờ khả năng chiến đấu phi thường, sức mạnh ma thuật và sức thu hút của mình. Tôi tình cờ ghé qua làng Cheza và gặp Yuna và Touka. Anh cứu anh ta khỏi con quỷ, nhưng sau đó rơi xuống một cái hố do Touka chuẩn bị và chết."
          />
          <CharacterDetail
            isOpen={openingCharacter === "malgrit"}
            img={malgritVisual}
            character="Marguerite Farom"
            cv="Yuryka Kubo"
            content="Công chúa thứ ba của Vương quốc Farom. Nhà vua nói với cô rằng cô sẽ kết hôn với một anh hùng, và ngay từ khi còn nhỏ cô đã được huấn luyện về mọi mặt, bao gồm học thuật, nghệ thuật, nghệ thuật và lễ nghi. Tuy nhiên, vì sự giáo dục này, anh ấy bị căng thẳng nội tâm và mắc một căn bệnh nào đó."
          />
          <CharacterDetail
            isOpen={openingCharacter === "kyle"}
            img={kyleVisual}
            character="Kyle Ozment"
            cv="Yuichi Nakamura"
            content="Một kiếm sĩ từng phiêu lưu cùng Shion. Anh là con trai cả của một trong những gia đình quý tộc nhất lục địa, có năng lực tuyệt vời, ngoại hình xinh đẹp và sức lôi cuốn, nhưng anh lại có mặc cảm tự ti và tình yêu méo mó dành cho Shion, người được chọn làm Thánh Kiếm."
          />
          <CharacterDetail
            isOpen={openingCharacter === "esel"}
            img={eselVisual}
            character="Esel Borgnine"
            cv="Sayaka Ohara"
            content="Một nữ tên trộm tiền thưởng. Anh gặp Touka ba năm trước. Anh ấy chuyên về chiến thuật sử dụng bẫy, và trong quá khứ Touka đã yêu cầu anh ấy trở thành người học việc của mình và anh ấy gọi anh ấy là &#34;Sư phụ&#34;. Anh ta đang âm mưu ám sát anh hùng."
          />
          <CharacterDetail
            isOpen={openingCharacter === "belarco"}
            img={belarcoVisual}
            character="Wataru Hatano"
            cv="Wataru Hatano"
            content="Nhà thám hiểm. Ông được công chúng biết đến là người đã chôn cất hơn 100 con quỷ trong trận chiến ba năm trước. Anh ta xuất hiện trong mọi cảnh trong cuộc phiêu lưu của Touka, nhưng sức mạnh thực sự của anh ta vẫn bị che giấu trong bí ẩn."
          />
          <CharacterDetail
            isOpen={openingCharacter === "isaac"}
            img={isaacVisual}
            character="Isaac Gardner"
            cv="Takashi Aoki"
            content="Nhà thám hiểm. Ông được công chúng biết đến là người đã chôn cất hơn 100 con quỷ trong trận chiến ba năm trước. Anh ta xuất hiện trong mọi cảnh trong cuộc phiêu lưu của Touka, nhưng sức mạnh thực sự của anh ta vẫn bị che giấu trong bí ẩn."
          />
          <CharacterDetail
            isOpen={openingCharacter === "leland"}
            img={lelandVisual}
            character="Isaac Gardner"
            cv="Chikahiro Kobayashi"
            content="Giám đốc một trại trẻ mồ côi. Một người đàn ông hiền lành đeo kính."
          />
          <CharacterDetail
            isOpen={openingCharacter === "friedrich"}
            img={friedrichVisual}
            character="Friedrich Norstein"
            cv="Kensho Ono"
            content="Thủ lĩnh của các Necromancer. Anh ta rất mong muốn trả thù con người."
          />
          <CharacterDetail
            isOpen={openingCharacter === "diego"}
            img={diegoVisual}
            character="Diego Valentine"
            cv="Shintaro Asanuma"
            content="Đối tác của Friedrich. Anh ta sẽ làm bất cứ điều gì cần thiết để đạt được mục tiêu của riêng mình và anh ta đã khuất phục lũ quỷ một cách ích kỷ."
          />
          <CharacterDetail
            isOpen={openingCharacter === "mily"}
            img={milyVisual}
            character="Milly Yunis"
            cv="Shinpuku Sakura"
            content="Một nhà thám hiểm và em gái của Yuna."
          />
        </div>
      </div>
    </>
  )
}