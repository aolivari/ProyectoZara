import { NavBar } from '../src/_components/NavBar';
import { PageModule } from './pageModule';
import { BagProvider } from '../src/context/BagContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const Home = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* Tu aplicación */}
        <BagProvider>
          <NavBar />
          <PageModule />
        </BagProvider>
      </QueryClientProvider>
    </>
  );
};

export default Home;
