import classNames from "classnames"

interface H3Props {
  children: React.ReactNode
  className?: string
}

const H3 = ({ children, className }: H3Props) => {
  const baseClasses = "text-lg font-semibold text-gray-800"
  const combinedClasses = classNames(baseClasses, className)

  return <h3 className={combinedClasses}>{children}</h3>
}

export default H3
