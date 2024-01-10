import AnnouncementBar from "@/components/AnnouncementBar"
import CallToAction from "@/components/CallToAction"
import Card from "@/components/Card"
import Data from "@/components/Data"
import ElevatingCard from "@/components/ElevatingCard"
import Feature from "@/components/Feature"
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import Loding from "@/components/Loding"
import LogoCloud from "@/components/LogoCloud"
import NavBar from "@/components/NavBar"
import Testimonial from "@/components/Testimonial"
import { Inter } from "next/font/google"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })
import styled from "styled-components"
const MainCont = styled.div`
  font: inter;
`

export default function Home() {
  return (
    <MainCont>
      <Suspense fallback={<Loding />}>
        <AnnouncementBar />
        <NavBar />
        <HeroSection />
        <LogoCloud />
        <Feature />
        <ElevatingCard />
        <Data />
        <Testimonial />
        <CallToAction />
        <Card />
        <Footer />
      </Suspense>
    </MainCont>
  )
}
