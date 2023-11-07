import Title from "@/components/Title";
import dbConnect from "@/lib/dbConnect";
import New, { NewType } from "@/models/new";
import { GetStaticProps, InferGetStaticPropsType } from "next/types";

export const getStaticProps: GetStaticProps<{ newsData: NewType[] }> = async () => {
  await dbConnect();
  const news = await New.find({}).sort({ updatedAt: "desc" });
  const newsData = JSON.parse(JSON.stringify(news));
  return { props: { newsData }, revalidate: 30 }
}
export default function News({ newsData }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <div className="max-w-full sm:max-w-[1160px] sm:px-4 lg:px-14 xl:px-0 pt-12 mx-auto">
        <Title>
          <p className="title-main">Ne<span className="text-root-brown">w</span>s</p>
          <p className="title-second">Thông tin mới nhất</p>
        </Title>
        <div className="flex flex-row px-10 mt-14">
          <div className="relative z-10 w-6 mx-auto">
            <div className="absolute top-0 left-0 w-0 border-transparent border-12 border-t-black border-l-black" />
            <div className="absolute top-0 left-0 w-0 border-transparent border-11 border-t-root-white border-l-root-white" />
            <div className="absolute bottom-0 left-0 w-0 border-transparent border-12 border-b-black border-l-black" />
            <div className="absolute bottom-0 left-0 w-0 border-transparent border-11 border-b-root-white border-l-root-white" />
            <div className="w-full h-full border-black border-3 border-r-0"></div>
          </div>
          <div className="relative flex flex-col gap-y-8 items-center px-16 pt-12 pb-20 justify-center w-full -mx-2 border-3 border-t-black border-b-black border-x-transparent">
            <div className="flex flex-row w-full items-center gap-x-8">
              <svg className="h-5 fill-black transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" /></svg>
              <div className="flex flex-row grow text-xl gap-x-8">
                <p>2023/10/05</p>
                <p>Thông tin sản phẩm xổ số ngôi sao</p>
              </div>
            </div>
            {newsData.map((newData) => {
              return (
                <div key={newData.title} className="flex flex-row w-full items-center gap-x-8">
                  <svg className="h-5 fill-black transition-colors" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" /></svg>
                  <div className="flex flex-row grow text-xl gap-x-8">
                    <p>2023/10/05</p>
                    <p>{newData.title}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="relative z-10 w-6 mx-auto">
            <div className="absolute top-0 right-0 w-0 border-transparent border-12 border-t-black border-r-black" />
            <div className="absolute top-0 right-0 w-0 border-transparent border-11 border-t-root-white border-r-root-white" />
            <div className="absolute bottom-0 right-0 w-0 border-transparent border-12 border-b-black border-r-black" />
            <div className="absolute bottom-0 right-0 w-0 border-transparent border-11 border-b-root-white border-r-root-white" />
            <div className="w-full h-full border-black border-3 border-l-0"></div>
          </div>
        </div>
      </div>
    </>
  )
}