import React from "react"
import classNames from "classnames"

interface SubheadingProps {
  children: React.ReactNode
  className?: string
}

const Subheading: React.FC<SubheadingProps> = ({ children, className }) => {
  const baseClasses = "text-2xl font-medium text-gray-700"
  const combinedClasses = classNames(baseClasses, className)

  return <p className={combinedClasses}>{children}</p>
}

export default Subheading
