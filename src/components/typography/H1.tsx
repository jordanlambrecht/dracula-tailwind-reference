import classNames from "classnames"

interface H1Props {
  children: React.ReactNode
  className?: string
}

const H1 = ({ children, className }: H1Props) => {
  const baseClasses = "text-6xl lg:text-8xl font-extrabold ml-0 pl-0"
  const combinedClasses = classNames(baseClasses, className)

  return <h1 className={combinedClasses}>{children}</h1>
}

export default H1
