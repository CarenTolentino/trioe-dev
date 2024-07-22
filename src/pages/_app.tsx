// src/pages/_app.tsx
import '../styles/global.css'; // Adjust path as needed

import type { AppProps } from 'next/app'; // Import the AppProps type from Next.js
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  // Apply the AppProps type here
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src =
      'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';
    document.head.appendChild(script);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
