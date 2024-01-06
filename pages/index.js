import AnnouncementBar from "@/components/AnnouncementBar"
import Data from "@/components/Data"
import ElevatingCard from "@/components/ElevatingCard"
import Feature from "@/components/Feature"
import HeroSection from "@/components/HeroSection"
import LogoCloud from "@/components/LogoCloud"
import NavBar from "@/components/NavBar"
import Testimonial from "@/components/Testimonial"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })
import styled from "styled-components"
const MainCont = styled.div`
  font: inter;
`

export default function Home() {
  return (
    <MainCont>
      <AnnouncementBar />
      <NavBar />
      <HeroSection />
      <LogoCloud />
      <Feature />
      <ElevatingCard />
      <Data />
      <Testimonial />
    </MainCont>
  )
}
