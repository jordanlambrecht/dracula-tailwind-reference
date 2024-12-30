import classNames from "classnames"

interface SubheadingProps {
  children: React.ReactNode
  className?: string
}

const Subheading = ({ children, className }: SubheadingProps) => {
  const baseClasses = "text-xl ml-0 pl-0 lg:text-2xl font-medium text-gray-700"
  const combinedClasses = classNames(baseClasses, className)

  return <p className={combinedClasses}>{children}</p>
}

export default Subheading
