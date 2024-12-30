import { useEffect, useState } from "react"
import { H3 } from "@/components/typography/typography"
import FadeInOutDiv from "@/components/FadeInOutDiv"
import hexRgb from "hex-rgb"
import { CopyToClipboard } from "react-copy-to-clipboard"
import Icon_Copy from "@/components/icons/Icon_Copy"

interface DraculaCardProps {
  color: string
  shade: string
  hex: string
}

const DraculaCard = ({ color, shade, hex }: DraculaCardProps) => {
  const [isCopied, setIsCopied] = useState<boolean | false>(false)

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false)
      }, 2000) // 2 seconds
      return () => clearTimeout(timer)
    }
  }, [isCopied])

  const rgb = hexRgb(hex, { format: "css" })

  const lastWord = color.trim().split(" ").pop()
  return (
    <div className='relative flex flex-col justify-between p-2 w-48 md:w-64 rounded-lg shadow-sm snap-start bg-blue-50'>
      <FadeInOutDiv isVisible={isCopied}>
        <div className='absolute top-6 left-6 w-auto px-4 py-2 text-sm  bg-dracula text-dracula-light font-semibold rounded shadow'>
          📄 Copied!
        </div>
      </FadeInOutDiv>

      <div
        className='w-full aspect-square'
        style={{ backgroundColor: hex }}
      ></div>

      <div className='flex-shrink w-full px-2 pt-2 flex-nowrap text-nowrap'>
        <H3 className='leading-none'>
          {shade !== "DEFAULT" ? `${lastWord}-${shade}` : shade}
        </H3>

        <div>
          <CopyToClipboard text={hex} onCopy={() => setIsCopied(true)}>
            <button className='inline mr-1 duration-150 hover:scale-105 text-dracula-darker-500 hover:text-dracula-green'>
              <Icon_Copy className='w-4 -mb-1 inline-block' />
              <span className='ml-1 text-sm py-0 my-0 leading-none'>{hex}</span>
            </button>
          </CopyToClipboard>
        </div>
        <div>
          <CopyToClipboard text={rgb} onCopy={() => setIsCopied(true)}>
            <button className='inline mr-1 duration-150 hover:scale-105 text-dracula-darker-500 hover:text-dracula-green'>
              <Icon_Copy className='w-4 -mb-1 inline-block' />
              <span className='ml-1 text-sm py-0 my-0 leading-none'>{rgb}</span>
            </button>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  )
}

export default DraculaCard
