import Title from "../global/Title/Title";

export default function ProductTitle() {
  return (
    <Title>
      <p className="mx-2 text-4xl leading-none text-center sm:text-5xl tracking-root md:text-7xl">Pr<span className="text-third-brown">o</span>duct</p>
      <p className="-ml-4 text-xs font-bold leading-none tracking-wide text-center capitalize font-vn md:-mt-1 md:text-lg">Sản Phẩm</p>
    </Title>
  )
}