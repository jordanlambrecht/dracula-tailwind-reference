import classNames from "classnames"

interface H2Props {
  children: React.ReactNode
  className?: string
}

const H2 = ({ children, className }: H2Props) => {
  const baseClasses = "text-2xl font-bold text-gray-900"
  const combinedClasses = classNames(baseClasses, className)

  return <h2 className={combinedClasses}>{children}</h2>
}

export default H2
