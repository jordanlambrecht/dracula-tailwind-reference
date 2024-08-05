import React from "react"
import classNames from "classnames"

interface H1Props {
  children: React.ReactNode
  className?: string
}

const H1: React.FC<H1Props> = ({ children, className }) => {
  const baseClasses = "text-8xl font-extrabold "
  const combinedClasses = classNames(baseClasses, className)

  return <h1 className={combinedClasses}>{children}</h1>
}

export default H1
