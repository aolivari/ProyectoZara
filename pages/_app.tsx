import '../styles/globals.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BagProvider } from '../src/context/BagContext';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BagProvider>
        <Component {...pageProps} />
      </BagProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
