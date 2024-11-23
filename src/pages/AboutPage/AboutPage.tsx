import React from "react"
import { PageFadeLayout } from "../../shared/layouts/PageFadeLayout"
import { Link, useLocation, useOutlet } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

export const AboutPage: React.FC = () => {
    return (
        <PageFadeLayout>
            <h1>AboutPage</h1>
            <Link to={'/about/contacts'}>Contacts</Link>
            <AnimatePresence>
                <AnimatedOutlet />
            </AnimatePresence>
        </PageFadeLayout>
    )
}


// Using the element from the useOutlet hook 
// we can render the pages as direct children with their unique keys
const AnimatedOutlet = (): React.JSX.Element => {
    const location = useLocation()
    const element = useOutlet()
  
    return (
      <AnimatePresence mode="wait" initial={true}>
        {element && React.cloneElement(element, { key: location.pathname })}
      </AnimatePresence>
    )
  }