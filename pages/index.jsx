import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Head from 'next/head';

// Import CSS styles
import '/styles/global.css';
import '/styles/components.css';

const Home = () => (
  <div>
    <Head>
      {/* Head content */}
    </Head>
    <Header />
    <Hero />
    <Footer />
  </div>
);

export default Home;




