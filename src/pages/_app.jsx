import 'focus-visible'
import '@/styles/tailwind.css'
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      document.getElementById("root").classList.add("debug-screens");
    }
  }, []);
  return <Component {...pageProps} />
}
