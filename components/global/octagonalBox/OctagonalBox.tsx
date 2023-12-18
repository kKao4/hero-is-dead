export default function OctagonalBox({
  children, smallBoxClassName, boxClassName, contentClassName, element, bigTriangleWidth, smallTriangleWidth, borderSmallTriangleColor
}: {
  children: React.ReactNode,
  boxClassName?: string,
  smallBoxClassName?: string,
  contentClassName: string,
  element?: React.ReactNode,
  bigTriangleWidth: string,
  smallTriangleWidth: string,
  bigTriangleColor?: string,
  borderSmallTriangleColor: string
}) {
  return (
    <>
      <div className={`flex flex-row ${boxClassName}`}>
        <div className={`relative z-10 w-6 ${smallBoxClassName}`}>
          <div className={`absolute top-0 left-0 w-0 border-transparent ${bigTriangleWidth} border-t-black border-l-black`} />
          <div className={`absolute top-0 left-0 w-0 ${smallTriangleWidth} ${borderSmallTriangleColor} border-b-transparent border-r-transparent  `} />
          <div className={`absolute bottom-0 left-0 w-0 border-transparent ${bigTriangleWidth} border-b-black border-l-black`} />
          <div className={`absolute bottom-0 left-0 w-0 ${smallTriangleWidth} ${borderSmallTriangleColor} border-t-transparent border-r-transparent`} />
          <div className="w-full h-full border-r-0 border-black border-3"></div>
        </div>
        <div className={`${contentClassName} border-t-black border-b-black border-x-transparent w-full -mx-2 border-3`}>
          {children}
        </div>
        <div className={`relative z-10 w-6 ${smallBoxClassName}`}>
          <div className={`absolute top-0 right-0 w-0 border-transparent ${bigTriangleWidth} border-t-black border-r-black`} />
          <div className={`absolute top-0 right-0 w-0 ${smallTriangleWidth} ${borderSmallTriangleColor} border-b-transparent border-l-transparent`} />
          <div className={`absolute bottom-0 right-0 w-0 border-transparent ${bigTriangleWidth} border-b-black border-r-black`} />
          <div className={`absolute bottom-0 right-0 w-0 ${smallTriangleWidth} ${borderSmallTriangleColor} border-t-transparent border-l-transparent`} />
          <div className="w-full h-full border-l-0 border-black border-3"></div>
        </div>
        {element}
      </div>
    </>
  )
}