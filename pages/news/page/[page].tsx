import Title from "@/components/Title";
import dbConnect from "@/lib/dbConnect";
import New, { NewType } from "@/models/new";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next/types";
import { parseISO, format } from "date-fns"
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const getStaticProps: GetStaticProps<{ newsData: NewType[], pages: number }> = async (context) => {
  await dbConnect();
  const page = context.params?.page
  let news = await New.find({}).sort({ updatedAt: "desc" });
  const pages = Math.ceil(news.length / 10)
  news = news.slice(0 + 10 * (Number(page) - 1), 10 + 10 * (Number(page) - 1))
  const newsData = JSON.parse(JSON.stringify(news));
  return { props: { newsData, pages }, revalidate: 30 }
}

export const getStaticPaths = (async () => {
  await dbConnect();
  const newsLength = await New.countDocuments({})
  // console.log("🚀 ~ file: [page].tsx:22 ~ getStaticPaths ~ newsLength:", newsLength)
  const pages = Math.ceil(newsLength / 10)
  const array = Array.from({ length: pages }, (_, i) => i + 1)
  const paths = array.map(a => {
    return {
      params: {
        page: a.toString()
      }
    }
  })
  return {
    paths,
    fallback: "blocking"
  }
}) satisfies GetStaticPaths

export default function Page({ newsData, pages }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  const [page, setPage] = useState<string>("1")
  useEffect(() => {
    setPage(router.query.page as string)
  }, [router.query.page])
  return (
    <>
      <div className="max-w-full sm:max-w-[1160px] px-4 lg:px-14 xl:px-0 pt-12 mx-auto">
        <Title>
          <p className="title-main">Ne<span className="text-root-brown">w</span>s</p>
          <p className="title-second">Thông tin mới nhất</p>
        </Title>
        <div className="relative flex flex-row xl:px-10 mt-10 md:mt-14 mb-20 md:mb-28">
          <div className="relative z-10 w-6 mx-auto">
            <div className="absolute top-0 left-0 w-0 border-transparent border-12 border-t-black border-l-black" />
            <div className="absolute top-0 left-0 w-0 border-transparent border-11 border-t-root-white border-l-root-white" />
            <div className="absolute bottom-0 left-0 w-0 border-transparent border-12 border-b-black border-l-black" />
            <div className="absolute bottom-0 left-0 w-0 border-transparent border-11 border-b-root-white border-l-root-white" />
            <div className="w-full h-full border-r-0 border-black border-3"></div>
          </div>
          <div className="relative flex flex-col items-center justify-center w-full px-4 md:px-10 lg:px-16 pt-12 pb-20 -mx-2 gap-y-8 border-3 border-t-black border-b-black border-x-transparent">
            {newsData && (
              <>
                {newsData.map((newData) => {
                  return (
                    <Link href={`/news/archives/${newData._id}`} key={newData.title} className="flex flex-row items-start w-full gap-x-4 lg:gap-x-7">
                      <div className="order-last flex flex-col md:flex-row items-start px-2.5 transition-colors normal-font-vn gap-x-4 lg:gap-x-8 hover:bg-black hover:text-white peer">
                        <p className="md:text-lg font-normal transition-colors">{format(parseISO(newData.createdAt as unknown as string), "uuuu/MM/dd")}</p>
                        <p className="text-xl md:text-2xl transition-colors ">{newData.title} {newData.title} {newData.title}</p>
                      </div>
                      <svg className="order-first mt-1 md:mt-0.5 h-4 md:h-5 fill-black peer-hover:fill-root-brown shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" /></svg>
                    </Link>
                  )
                })}
              </>
            )}
          </div>
          <div className="relative z-10 w-6 mx-auto">
            <div className="absolute top-0 right-0 w-0 border-transparent border-12 border-t-black border-r-black" />
            <div className="absolute top-0 right-0 w-0 border-transparent border-11 border-t-root-white border-r-root-white" />
            <div className="absolute bottom-0 right-0 w-0 border-transparent border-12 border-b-black border-r-black" />
            <div className="absolute bottom-0 right-0 w-0 border-transparent border-11 border-b-root-white border-r-root-white" />
            <div className="w-full h-full border-l-0 border-black border-3"></div>
          </div>
          <div className="absolute bottom-0 flex flex-row -translate-x-1/2 translate-y-1/2 left-1/2 gap-x-7">
            {(Array.from({ length: pages }, (_, i) => i + 1)).map(p => {
              return (
                <Link
                  href={`/news/page/${p}`}
                  key={p}
                  className={`${page === p.toString() ? "bg-black text-white" : "bg-root-white hover:bg-black hover:text-white"} flex items-center justify-center h-11 w-11 md:w-12 md:h-12 transition-colors rotate-45 border-black border-3`}
                >
                  <span className="text-2xl -rotate-45 normal-font-vn">{p}</span>
                </Link>
              )
            })}
            {Number(page) + 1 <= pages && (
              <Link href={`/news/page/${Number(page) + 1}`} className="flex items-center justify-center order-last w-11 h-11 md:w-12 md:h-12 transition-colors rotate-45 border-black border-3 bg-root-white hover:bg-black group">
                <span className="text-2xl -rotate-45 normal-font-vn">
                  <svg className="h-6 -mt-0.5 group-hover:fill-root-white transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
                </span>
              </Link>
            )}
            {Number(page) - 1 >= 1 && (
              <Link href={`/news/page/${Number(page) - 1}`} className="flex items-center justify-center order-first w-11 h-11 md:w-12 md:h-12 transition-colors rotate-45 border-black border-3 bg-root-white hover:bg-black group">
                <span className="text-2xl -rotate-45 normal-font-vn">
                  <svg className="h-6 -mt-0.5 group-hover:fill-root-white transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  )
}