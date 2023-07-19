import 'focus-visible'
import '@/styles/tailwind.css'
import {useState, useEffect} from 'react';
import Router from 'next/router';
import Preloader from '@/components/Preloader';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {

  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    Router.events.on('routeChangeStart', () => setIsLoading(true));
    Router.events.on('routeChangeComplete', () => setIsLoading(false));
    Router.events.on('routeChangeError', () => setIsLoading(false));
    return () => {
      Router.events.off('routeChangeStart', () => setIsLoading(true));
      Router.events.off('routeChangeComplete', () => setIsLoading(false));
      Router.events.off('routeChangeError', () => setIsLoading(false));
    };
  }, [Router.events]);

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      document.getElementById("root").classList.add("debug-screens");
    }
  }, []);

  return <>
    {
      isLoading
      ?
        <Preloader/>
      :
        <>
          <Component {...pageProps} />
          <ToastContainer
            position="bottom-right"
            className="z-[999999]"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </>
    }
  </>
}
