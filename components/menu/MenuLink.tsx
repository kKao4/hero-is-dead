import { toggleOpenModalMenu } from "@/redux/globalSlice"
import Link from "next/link"
import { useDispatch } from "react-redux"
import { twMerge } from "tailwind-merge"

export default function MenuLink({ title_1, title_2, mobile, href, url, isActive }: { title_1: string, title_2: string, mobile: boolean, href?: string, url?: string, isActive: boolean }) {
  const dispatch = useDispatch()
  if (!url && href) {
    return (
      <Link
        href={href}
        className={`${mobile ? "mx-auto" : ""} flex flex-row items-center group gap-x-2`}
        onClick={() => {
          if (mobile) {
            dispatch(toggleOpenModalMenu())
          }
        }}
      >
        {!mobile && <div className="w-4 h-4 border-3.5 group-hover:border-6 transition-all duration-100 ease-linear border-root-brown rotate-45" />}
        <div className="flex flex-col">
          <p className={`text-2xl leading-none tracking-widest uppercase transition-all duration-100 ease-linear group-hover:text-root-brown ${isActive ? "text-root-brown" : ""}`}>
            {title_1}
          </p>
          <p className={`${mobile ? "text-center" : ""} text-[0.575rem] font-vn font-bold leading-none capitalize text-root-brown`}>{title_2}</p>
        </div>
      </Link>
    )
  } else {
    return (
      <div
        className={`${mobile ? "mx-auto" : ""} flex flex-row items-center group gap-x-2 cursor-pointer`}
        onClick={() => {
          window.open(url, "_blank")
          if (mobile) {
            dispatch(toggleOpenModalMenu())
          }
        }}
      >
        {!mobile && <div className="w-4 h-4 border-3.5 group-hover:border-6 transition-all duration-100 ease-linear border-root-brown rotate-45" />}
        <div className="flex flex-col">
          <p className="text-2xl leading-none tracking-widest uppercase transition-all duration-100 ease-linear group-hover:text-root-brown"
          >
            {title_1}
          </p>
          <p className={`${mobile ? "text-center" : ""} text-[0.575rem] font-vn font-bold leading-none capitalize text-root-brown`}>{title_2}</p>
        </div>
      </div>
    )
  }
}