import React, { useEffect, useState } from "react"
import classNames from "classnames"
import { H1, H2, H3, Subheader } from "@/components/typography/typography"
import FadeInOutDiv from "@/components/FadeInOutDiv"
import hexRgb from "hex-rgb"
import { CopyToClipboard } from "react-copy-to-clipboard"
import Icon_Copy from "@/components/icons/Icon_Copy"
interface DraculaCardProps {
  className?: string
  color: string
  shade: string
  hex: string
}

const DraculaCard: React.FC<DraculaCardProps> = ({
  className,
  color,
  shade,
  hex,
}) => {
  const defaultClasses = "w-full h-full aspect-square rounded"
  const combinedClasses = classNames(defaultClasses, className)

  const [isCopied, setIsCopied] = useState<boolean | false>(false)

  const CopyButton = () => {
    return (
      <button className='mr-1 duration-150 hover:scale-105 text-dracula-darker-500 hover:text-dracula-green'>
        <Icon_Copy className='w-4 -mb-1' />
      </button>
    )
  }
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
    <div className='flex flex-col w-auto h-full p-2 rounded-lg shadow-sm snap-start bg-blue-50'>
      <div className={combinedClasses} style={{ backgroundColor: hex }}>
        <FadeInOutDiv isVisible={isCopied}>
          <div className='inline-block w-auto p-2 m-4 text-sm rounded shadow-sm bg-dracula text-dracula-light'>
            📄 Copied!
          </div>
        </FadeInOutDiv>
      </div>
      <div className='flex flex-col justify-between w-full px-2 pt-2 h-1/3'>
        <H3 className='leading-none'>
          {shade != "DEFAULT" ? `${lastWord}-${shade}` : shade}
        </H3>

        <div className='flex flex-row justify-between text-sm text-dracula'>
          <div className='flex flex-row items-center'>
            <CopyToClipboard text={hex} onCopy={() => setIsCopied(true)}>
              <span>
                <CopyButton />
              </span>
            </CopyToClipboard>
            {hex}
          </div>
          <div className='flex flex-row items-center '>
            <CopyToClipboard text={rgb} onCopy={() => setIsCopied(true)}>
              <span>
                <CopyButton />
              </span>
            </CopyToClipboard>
            <span className='py-0 my-0 leading-none'>{rgb}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DraculaCard
