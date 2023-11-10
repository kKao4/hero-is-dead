import Link from "next/link"
import NormalRevealWrapper from "../NormalRevealWrapper"

export default function Paginate({ page, pages }: { page: string, pages: number }) {
  return (
    <NormalRevealWrapper bottom={80} className="absolute bottom-0 flex flex-row -translate-x-1/2 translate-y-1/2 left-1/2 gap-x-7">
      {(Array.from({ length: pages }, (_, i) => i + 1)).map(p => {
        return (
          <Link
            href={`/news/page/${p}`}
            key={p}
            className={`${page === p.toString() ? "bg-black text-white" : "bg-root-white hover:bg-black hover:text-white"} flex items-center justify-center h-11 w-11 md:w-12 md:h-12 transition-colors ease-out rotate-45 border-black border-3`}
          >
            <span className="text-2xl -rotate-45 font-vn font-bold">{p}</span>
          </Link>
        )
      })}
      {Number(page) + 1 <= pages && (
        <Link href={`/news/page/${Number(page) + 1}`} className="flex items-center justify-center order-last transition-colors ease-out rotate-45 border-black w-11 h-11 md:w-12 md:h-12 border-3 bg-root-white hover:bg-black group">
          <span className="text-2xl -rotate-45 font-vn font-bold">
            <svg className="h-6 -mt-0.5 group-hover:fill-root-white transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
          </span>
        </Link>
      )}
      {Number(page) - 1 >= 1 && (
        <Link href={`/news/page/${Number(page) - 1}`} className="flex items-center justify-center order-first transition-colors ease-out rotate-45 border-black w-11 h-11 md:w-12 md:h-12 border-3 bg-root-white hover:bg-black group">
          <span className="text-2xl -rotate-45 font-vn font-bold">
            <svg className="h-6 -mt-0.5 group-hover:fill-root-white transition-colors ease-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
          </span>
        </Link>
      )}
    </NormalRevealWrapper>
  )
}