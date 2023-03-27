import '@/styles/globals.css'
import { useState } from 'react';

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>

      <Component darkMode={darkMode} setDarkMode={setDarkMode} {...pageProps} />
    </div>
  )
}
