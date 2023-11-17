export default function LearnMoreButton({ handleOnClick }: { handleOnClick: any }) {
  return (
    <button
      className="w-6 h-6 md:w-7 md:h-7 text-root-white bg-root-brown rotate-45 flex hover:bg-black duration-300 ease-out"
      onClick={handleOnClick}
    >
      <div className="-rotate-45 justify-center items-center ml-1 -mt-0.5 md:m-0">
        <span className="md:mx-0.5">.</span>
        <span className="md:mx-0.5">.</span>
        <span className="md:mx-0.5">.</span>
      </div>
    </button>
  )
}