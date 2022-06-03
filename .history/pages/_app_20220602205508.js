import { ProviderAuth } from '../hooks/useAuth';
import '../src/styles/globals.css'
import MainLayout from '../layout/MainLayout';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <MainLayout>
      <Component {...pageProps}/>
    </MainLayout>
    </>
  );
}

export default MyApp
