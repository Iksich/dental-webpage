import '../styles/globals.css'; // Import global styles
import App from '../components/App'; // Import your main App component
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // If you want to measure performance, you can do so here
    // For example: reportWebVitals(console.log)
  }, []);

  return (
    <App>
      <Component {...pageProps} />
    </App>
  );
}

export default MyApp;
