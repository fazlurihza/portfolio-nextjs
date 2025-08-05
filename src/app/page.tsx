'use client'

import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

import HeroSection from "./home/page"
import Page from "./about/page"
import Experience from "./experience/experience"
import Projects from "./projects/projects"
import Skills from "./skills/Skills"
import Testimonials from "./testimonials/testimonials"
import Contact from "./contact/contact"
import ScrollToTop from "./scroll/scroll"

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
    })
  }, [])

  return (
    <>
      <HeroSection />
      <Page />
      <Experience />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
      <ScrollToTop />
    </>
  )
}
