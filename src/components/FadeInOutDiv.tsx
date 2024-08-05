import React, { useState, useEffect } from "react"
import styled, { keyframes } from "styled-components"

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

const StyledDiv = styled.div<{ isVisible: boolean }>`
  animation: ${({ isVisible }) => (isVisible ? fadeIn : fadeOut)} 0.5s
    ease-in-out forwards;
`

interface FadeInOutDivProps {
  isVisible: boolean
  children: React.ReactNode
}

const FadeInOutDiv: React.FC<FadeInOutDivProps> = ({ isVisible, children }) => {
  const [show, setShow] = useState(isVisible)

  useEffect(() => {
    if (isVisible) {
      setShow(true)
    } else {
      const timeout = setTimeout(() => setShow(false), 500) // Match this duration with animation duration
      return () => clearTimeout(timeout)
    }
  }, [isVisible])

  return show || isVisible ? (
    <StyledDiv isVisible={isVisible}>{children}</StyledDiv>
  ) : null
}

export default FadeInOutDiv
