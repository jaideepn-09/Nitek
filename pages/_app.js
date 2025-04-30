// pages/_app.js
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import '../app/globals.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      offset: 50,
    });
    console.log('AOS initialized'); // Check the browser console
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;