import React from "react"
import classNames from "classnames"

interface H2Props {
  children: React.ReactNode
  className?: string
}

const H2: React.FC<H2Props> = ({ children, className }) => {
  const baseClasses = "text-2xl font-bold text-gray-900"
  const combinedClasses = classNames(baseClasses, className)

  return <h2 className={combinedClasses}>{children}</h2>
}

export default H2
