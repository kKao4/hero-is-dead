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
  console.log("🚀 ~ file: [_id].tsx:17 ~ constgetStaticPaths:GetStaticPaths= ~ newsData:", newsData)
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
      <div className="flex flex-col py-12 w-fit mx-auto gap-y-4">
        <Image src={decoTop} alt="" className="h-14" />
        <div className="">
          <p className="normal-font-vn font-normal text-lg text-center">{format(parseISO(newData.createdAt as unknown as string), "uuuu/MM/dd")}</p>
          <p className="normal-font-vn text-third-brown text-3xl text-center">{newData.title}</p>
        </div>
        <Image src={decoBottom} alt="" className="h-14" />
      </div>
      <div className="bg-second-brown py-12 pb-24">
        <Markdown className="tracking-wide font-medium font-vn prose max-w-full prose-strong:font-bold w-[980px] mx-auto" remarkPlugins={[remarkGfm]}>
          {newData.content}
        </Markdown>
      </div>
    </>
  )
}