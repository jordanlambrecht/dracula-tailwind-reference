import DraculaCard from "@/components/DraculaCard"
import { H1, H2, H3, Subheader } from "@/components/typography/typography"
import draculaColors from "@/data/draculaColors"
import Link from "next/link"

const Dracula: React.FC = () => {
  // Sort entries to move "DEFAULT" to the front

  return (
    <main className='min-h-screen px-12 py-32 bg-dracula-darker-900'>
      <div className='mx-auto max-w-8xl'>
        <div className='mb-16'>
          <H1 className='mb-2 text-dracula'>Dracula for Tailwind</H1>
          <Subheader className='text-yellow italic mb-12'>
            A Quick-Reference Color Chart Guide
          </Subheader>
          <Link
            href='https://draculatheme.com/tailwind'
            className='text-lg duration-75 text-dracula-green hover:text-dracula-green-100 underline'
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
                  className={`relative flex flex-row w-full h-72 p-4 border-aro outline-r-8 border-r-8 space-x-4 overflow-x-scroll overflow-y-hidden rounded-lg shadow-sm bg-aro scrollbar-thin scrollbar-thumb-dracula scrollbar-track-aro scrollbar-thumb-rounded-full scrollbar-track-rounded-full `}
                >
                  {Object.entries(draculaColors[colorCategory])
                    .sort(([keyA], [keyB]) =>
                      keyA === "DEFAULT" ? -1 : keyB === "DEFAULT" ? 1 : 0
                    )
                    .map(([shade, hex], index) => (
                      <div
                        key={shade}
                        className={`${
                          index === 0 ? "lg:sticky left-0 z-20 " : "snap-start"
                        }`}
                      >
                        {index === 0 ? (
                          <div className='absolute w-64 -mb-4 -ml-6 h-72 -top-4 -z-10 bg-aro'></div>
                        ) : (
                          ""
                        )}
                        <DraculaCard
                          // className={`bg-${colorCategory}-${shade}`}
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
