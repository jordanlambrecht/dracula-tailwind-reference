import DraculaCard from "@/components/DraculaCard"
import { H1, H2, Subheader } from "@/components/typography/typography"
import draculaColors from "@/data/draculaColors"
import { usePlausible } from "next-plausible"
import Link from "next/link"

const Dracula = () => {
  const plausible = usePlausible()
  return (
    <main className='min-h-screen px-6 py-16 lg:px-12 lg:py-32 bg-dracula-darker-900'>
      <div className='mx-auto max-w-8xl'>
        <div className='mb-16'>
          <H1 className='mb-2 text-dracula'>Dracula for Tailwind</H1>
          <Subheader className='mb-12 italic text-yellow'>
            A Quick-Reference Color Chart Guide
          </Subheader>
          <Link
            href='https://draculatheme.com/tailwind'
            className='text-lg underline duration-75 text-dracula-green hover:text-dracula-green-100'
            target='_blank'
          >
            <p> View the official documentation→</p>
          </Link>
        </div>
        <div className='flex flex-col items-center justify-center py-2 space-y-12 overflow-x-hidden '>
          {Object.keys(draculaColors).map((colorCategory, i) => {
            return (
              <div className='w-full overflow-hidden' key={i}>
                <H2 className={`mb-3 text-pink-50`}>{colorCategory}</H2>
                <div
                  className={`overflow-y-hidden relative flex flex-row w-full h-auto p-4 border-aro outline-r-8 border-r-8 gap-x-4 overflow-x-scroll  rounded-lg shadow-sm bg-aro scrollbar lg:scrollbar-thin scrollbar-thumb-dracula scrollbar-track-aro scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-w-12`}
                >
                  {Object.entries(draculaColors[colorCategory])
                    .sort(([keyA], [keyB]) =>
                      keyA === "DEFAULT" ? -1 : keyB === "DEFAULT" ? 1 : 0
                    )
                    .map(([shade, hex], index) => (
                      <div
                        key={shade}
                        className={`${
                          index === 0 ? " md:sticky left-0 z-20 " : "snap-start"
                        }`}
                      >
                        {index === 0 ? (
                          <div className='bottom-0 hidden md:block md:absolute w-72 -left-4 -top-4 -z-10 bg-aro bg-clip-content'></div>
                        ) : (
                          ""
                        )}
                        <DraculaCard
                          color={colorCategory}
                          shade={shade}
                          hex={hex}
                        />
                      </div>
                    ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <footer className='flex flex-col items-center justify-center w-full py-12'>
        <p className='text-yellow'>
          Made w/ ❤️ in {new Date().getFullYear()} by{" "}
          <Link
            href={"https://jordanlambrecht.com"}
            className='underline text-green'
          >
            Jordan Lambrecht
          </Link>
        </p>
      </footer>
    </main>
  )
}

export default Dracula
