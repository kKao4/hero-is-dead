export default function ButtonTwitter() {
  return (
    <button
      className="absolute -bottom-8 left-8 w-[220px] py-4 sm:py-4.5 border-3 items-center border-black bg-white rounded-xl flex flex-row px-2 justify-evenly group hover:bg-black transition-colors ease-out"
      onClick={() => window.open("https://twitter.com/yuusyagasinda", "_blank")}
    >
      <svg className="h-6 transition-colors ease-out fill-black group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" /></svg>
      <span className="transition-colors ease-out group-hover:text-white font-vn font-bold">Twitter chính thức</span>
    </button>
  )
}