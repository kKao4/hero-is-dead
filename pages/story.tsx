import Container from "@/components/Container";
import Title from "@/components/Title";

export default function Page() {
  return (
    <>
      <Container>
        <Title>
          <p className="mx-2 text-4xl leading-none text-center sm:text-5xl tracking-root md:text-7xl">S<span className="text-third-brown">t</span>ory</p>
          <p className="-ml-4 text-xs font-bold leading-none tracking-wide text-center capitalize font-vn md:-mt-1 md:text-lg">Cốt Truyện</p>
        </Title>
      </Container>
      <div className="h-[40vh]" />
    </>
  )
}