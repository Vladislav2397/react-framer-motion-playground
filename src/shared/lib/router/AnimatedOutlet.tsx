import { AnimatePresence } from "framer-motion"
import React from "react"
import { useLocation, useOutlet } from "react-router-dom"

/**
 * Using the element from the useOutlet hook 
 * we can render the pages as direct children with their unique keys
 */
export const AnimatedOutlet: React.FC<{ keyValue?: string }> = ({ keyValue }) => {
    const location = useLocation()
    const element = useOutlet()
  
    return (
      <AnimatePresence mode="wait" initial={true}>
        {element && React.cloneElement(element, { key: keyValue ?? location.pathname })}
      </AnimatePresence>
    )
  }