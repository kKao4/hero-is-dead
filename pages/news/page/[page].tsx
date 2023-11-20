import Title from "@/components/Title";
import dbConnect from "@/lib/dbConnect";
import New, { NewType } from "@/models/new";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next/types";
import { parseISO, format } from "date-fns"
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NormalRevealWrapper from "@/components/NormalRevealWrapper";
import OctagonalBox from "@/components/OctagonalBox";
import Paginate from "@/components/news/Paginate";
import Container from "@/components/Container";

export const getStaticProps: GetStaticProps<{ newsData: NewType[], pages: number }> = async (context) => {
  await dbConnect();
  const page = context.params?.page
  let news = await New.find({}).sort({ updatedAt: "desc" });
  const pages = Math.ceil(news.length / 10)
  news = news.slice(0 + 10 * (Number(page) - 1), 10 + 10 * (Number(page) - 1))
  const newsData = JSON.parse(JSON.stringify(news));
  return { props: { newsData, pages }, revalidate: 30 }
}

export const getStaticPaths: GetStaticPaths = async () => {
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
}

export default function Page({ newsData, pages }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  const [page, setPage] = useState<string>("1")
  useEffect(() => {
    setPage(router.query.page as string)
  }, [router.query.page])
  return (
    <>
      <Container>
        <NormalRevealWrapper>
          <Title>
            <p className="mx-2 text-4xl leading-none text-center sm:text-5xl tracking-root md:text-7xl">Ne<span className="text-root-brown">w</span>s</p>
            <p className="-ml-4 text-xs font-bold leading-none capitalize tracking-wide text-center font-vn md:-mt-1 md:text-lg">Thông tin mới nhất</p>
          </Title>
        </NormalRevealWrapper>
        <NormalRevealWrapper>
          <OctagonalBox
            boxClassName="mt-10 mb-20 md:mb-28 xl:px-10 md:mt-14 font-vn font-bold"
            contentClassName="relative flex flex-col items-center justify-center px-4 pt-12 pb-20 md:px-10 lg:px-16 gap-y-8"
            bigTriangleWidth="border-12"
            smallTriangleWidth="border-11"
            borderSmallTriangleColor="border-root-white"
            element={<Paginate page={page} pages={pages} />}
          >
            {newsData && (
              <>
                {newsData.map((newData) => {
                  return (
                    <Link href={`/news/archives/${newData._id}`} key={newData.title} className="flex flex-row items-start w-full gap-x-4 lg:gap-x-7">
                      <div className="order-last flex flex-col md:flex-row items-start px-2.5 transition-colors ease-out gap-x-4 lg:gap-x-8 hover:bg-black hover:text-white peer">
                        <p className="font-normal transition-colors ease-out md:text-lg">{format(parseISO(newData.createdAt as unknown as string), "uuuu/MM/dd")}</p>
                        <p className="text-xl transition-colors ease-out md:text-2xl ">{newData.title} {newData.title} {newData.title}</p>
                      </div>
                      <svg className="order-first mt-1 md:mt-0.5 h-4 md:h-5 fill-black peer-hover:fill-root-brown shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" /></svg>
                    </Link>
                  )
                })}
              </>
            )}
          </OctagonalBox>
        </NormalRevealWrapper>
      </Container>
    </>
  )
}