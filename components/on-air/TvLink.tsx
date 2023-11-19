import OctagonalBox from "../OctagonalBox";

export default function TvLink({ href, content, colSpan }: { href: string, content: string, colSpan?: string }) {
  return (
    <button className={`${colSpan ?? "md:col-span-2 col-span-full"} group text-start`} onClick={() => window.open(href, "_blank")}>
      <OctagonalBox
        boxClassName="group-hover:bg-black transition-colors ease-out"
        contentClassName="w-full px-6 py-4"
        bigTriangleWidth="border-8"
        smallTriangleWidth="border-7.5"
        borderSmallTriangleColor="border-root-white"
      >
        <p className="text-xl font-medium transition-colors ease-out font-vn group-hover:text-white">{content}</p>
      </OctagonalBox>
    </button>
  )
} 