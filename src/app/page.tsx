import CallToAction from '@/components/shared/CallToAction'
import Faqs from '@/components/shared/FAQs'
import Features from '@/components/shared/Features'
import Footer from '@/components/shared/Footer'
import Hero from '@/components/shared/Hero'
import Integrations from '@/components/shared/Integrations'
import Introduction from '@/components/shared/Introduction'
import LogoTicker from '@/components/shared/LogoTicker'
import Navbar from '@/components/shared/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoTicker />
      <Introduction />
      <Features />
      <Integrations />
      <Faqs />
      <CallToAction />
      <Footer />
    </>
  );
}
