import AboutSection from './AboutSection'
import ContactSection from './ContactSection'
import HeroSection from './HeroSection'
import Navbar from './Navbar'
import PortfolioSection from './PortfolioSection'

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ContactSection />
      </main>
    </>
  )
}

export default HomePage
