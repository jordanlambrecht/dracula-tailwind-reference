import React, { useState, useEffect } from "react"
import classNames from "classnames"

interface FadeInOutDivProps {
  isVisible: boolean
  children: React.ReactNode
}

const FadeInOutDiv = ({ isVisible, children }: FadeInOutDivProps) => {
  const [show, setShow] = useState(isVisible)

  useEffect(() => {
    if (isVisible) {
      setShow(true)
    } else {
      const timeout = setTimeout(() => setShow(false), 500)
      return () => clearTimeout(timeout)
    }
  }, [isVisible])

  return show || isVisible ? (
    <div
      className={classNames(
        "transition-opacity duration-500",
        isVisible ? "animate-fadeIn" : "animate-fadeOut"
      )}
    >
      {children}
    </div>
  ) : null
}

export default FadeInOutDiv
