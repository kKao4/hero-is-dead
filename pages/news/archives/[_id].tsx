import dbConnect from "@/lib/dbConnect"
import { NewType } from "@/models/new"
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next"
import New from "@/models/new"
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { parseISO, format } from "date-fns"
import decoTop from "@/assets/deco_center_top.svg"
import decoBottom from "@/assets/deco_center_bottom.svg"
import Image from "next/image"
import NormalRevealWrapper from "@/components/NormalRevealWrapper"
import Link from "next/link"
import OctagonalBox from "@/components/OctagonalBox"

export const getStaticProps: GetStaticProps<{ newData: NewType }> = async (context) => {
  await dbConnect()
  const _id = context.params?._id
  let newData = await New.findById(_id)
  newData = JSON.parse(JSON.stringify(newData))
  return { props: { newData }, revalidate: 60 * 60 * 2 }
}

export const getStaticPaths: GetStaticPaths = async () => {
  await dbConnect()
  const newsData = await New.find({})
  // console.log("🚀 ~ file: [_id].tsx:17 ~ constgetStaticPaths:GetStaticPaths= ~ newsData:", newsData)
  const paths = newsData.map((newData) => {
    return {
      params: {
        _id: newData._id.toString()
      }
    }
  })
  return {
    paths,
    fallback: "blocking"
  }
}

export default function Page({ newData }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <NormalRevealWrapper>
        <div className="flex flex-col py-6 mx-auto lg:py-12 w-fit gap-y-2 md:gap-y-4">
          <Image src={decoTop} alt="" className="h-10 lg:h-14" />
          <div className="">
            <p className="text-lg font-normal text-center font-vn">{format(parseISO(newData.createdAt as unknown as string), "uuuu/MM/dd")}</p>
            <p className="text-3xl font-bold text-center font-vn text-third-brown">{newData.title}</p>
          </div>
          <Image src={decoBottom} alt="" className="h-10 lg:h-14" />
        </div>
      </NormalRevealWrapper>
      <div className="py-8 pb-16 bg-second-brown lg:py-12 lg:pb-24">
        <NormalRevealWrapper>
          <Markdown className="font-medium pb-8 lg:pb-12 font-vn prose max-w-full prose-strong:font-bold w-[1000px] px-4 mx-auto" remarkPlugins={[remarkGfm]}>
            {newData.content}
          </Markdown>
          <Link href={"/news/page/1"} className="relative flex flex-row mx-auto w-fit group">
            <OctagonalBox
              smallBoxClassName="h-16 transition-colors ease-out bg-white group-hover:bg-black"
              bigTriangleWidth="border-8"
              smallTriangleWidth="border-7.5"
              contentClassName="relative flex items-center justify-center px-4 capitalize transition-colors ease-out bg-white group-hover:bg-black gap-x-4 w-fit font-vn font-bold"
              borderSmallTriangleColor="border-second-brown"
           >
              <svg className="h-6 transition-colors ease-out fill-black group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" /></svg>
              <span className="transition-colors ease-out group-hover:text-white">Tất cả tin tức</span>
            </OctagonalBox>
          </Link>
        </NormalRevealWrapper>
      </div>
    </>
  )
}