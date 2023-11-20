export default function RedHeader({ content }: { content: string }) {
  return (
    <div className="py-0.5 pl-4 text-lg font-bold border-l-4 border-red-700 mt-7 md:mt-11">
      {content}
    </div>
  )
}