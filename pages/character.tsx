import Title from "@/components/global/Title/Title";
import Container from "@/components/global/Container";
import { useState } from "react";
import CharacterThumb from "@/components/character/CharacterThumb";
import CharacterDetail from "@/components/character/CharacterDetail";
import { characters } from "@/data";
import NormalRevealWrapper from "@/components/global/revealWrapper/NormalRevealWrapper";

export default function Page() {
  const [openingCharacter, setOpeningCharacter] = useState<string>("touka")
  return (
    <>
      <Container>
        <NormalRevealWrapper>
          <Title>
            <p className="mx-2 text-4xl leading-none text-center sm:text-5xl tracking-root md:text-7xl">Cha<span className="text-third-brown">r</span>acter</p>
            <p className="-ml-4 text-xs font-bold leading-none tracking-wide text-center capitalize font-vn md:-mt-1 md:text-lg">Nhân vật</p>
          </Title>
        </NormalRevealWrapper>
      </Container>
      <Container style={{ maxWidth: "1280px" }} className="pt-6 pb-32 sm:pt-9">
        {/* Ảnh thu nhỏ nhân vật */}
        <div className="flex flex-row flex-wrap justify-center gap-6 mx-auto sm:gap-7 md:gap-10 max-w-fit">
          {characters.map((character, i) => {
            return (
              <NormalRevealWrapper key={character.id} delay={100 + i * 40}>
                <CharacterThumb
                  isActive={openingCharacter === character.id}
                  img={character.thumbImg}
                  handleOnClick={() => setOpeningCharacter(character.id)}
                />
              </NormalRevealWrapper>
            )
          })}
        </div>
      </Container>
      <NormalRevealWrapper bottom={0}>
        {/* Chi tiết giới thiệu nhân vật */}
        <div className="bg-second-brown pt-[390px] sm:pt-[540px] lg:pt-24 xl:pt-40 pb-12 lg:pb-28 xl:pb-44 px-4">
          <div className="relative w-fit mx-auto -translate-x-0 lg:-translate-x-[8%]">
            {characters.map((character, i) => {
              return (
                <CharacterDetail
                  key={character.id}
                  isOpen={openingCharacter === character.id}
                  isFirst={i === 0}
                  img={character.visualImg}
                  character={character.name}
                  cv={character.cv}
                  content={character.description}
                />
              )
            })}
          </div>
        </div>
      </NormalRevealWrapper>
    </>
  )
}