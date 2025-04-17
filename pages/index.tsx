import { NavBar } from '../src/_components/NavBar';

import { BagProvider } from '../src/context/BagContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SmartPhonesList } from '../src/views/SmartPhonesList';

const queryClient = new QueryClient();

const Home = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* Tu aplicación */}
        <BagProvider>
          <NavBar />
          <SmartPhonesList />
        </BagProvider>
      </QueryClientProvider>
    </>
  );
};

export default Home;
