import { H1, Subheader } from "@/components/typography/typography"
import Link from "next/link"
import { useEffect } from "react"
import PlausibleProvider, { usePlausible } from "next-plausible"

const NotFound = () => {
  const plausible = usePlausible()
  useEffect(() => {
    plausible("Page Not Found", {
      props: { page: document.location.pathname },
    })
  }, [plausible])
  return (
    <main className='min-h-screen px-6 lg:px-12 py-16 lg:py-32 bg-dracula-darker-900 text-center'>
      <div className='mx-auto max-w-8xl'>
        <div className='mb-16'>
          <H1 className='mb-2 text-dracula'>404</H1>
          <Subheader className='text-yellow italic mb-12'>
            Sorry friend, page not found.
          </Subheader>
          <Link href='/' className='text-dracula-light hover:underline'>
            Go back to the homepage
          </Link>
        </div>
      </div>
    </main>
  )
}

export default NotFound
