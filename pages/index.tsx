// pages/index.tsx
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeatureSection from '../components/FeatureSection';
import Testimonials from '../components/Testimonials';
import BlogSection from '../components/BlogSection';
import FAQSection from '../components/FAQSection';
import TeamSection from '../components/TeamSection';
import NewsletterSection from '../components/NewsletterSection';
import ContactSection from '../components/ContactSection';
import MapSection from '../components/MapSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Dental Implants Website</title>
      </Head>
      <Header />
      <Hero />
      <FeatureSection />
      <Testimonials />
      <BlogSection />
      <FAQSection />
      <TeamSection />
      <NewsletterSection />
      <ContactSection />
      <MapSection />
      <Footer />
    </div>
  );
};

export default Home;





