import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../frontend/components/navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const publicRoutes = ['/login', '/register', '/forgotPassword'];
  const adminRoutes = [
    '/table', '/users', '/progress', '/faqs', '/addTraining', '/addFAQ',
    '/editTraining/[id]', '/editFAQ/[id]', '/editUser/[id]',
  ];

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token && !publicRoutes.includes(router.pathname)) {
      router.replace('/login');
      return;
    }
    if (adminRoutes.includes(router.pathname) && localStorage.getItem('role') !== 'admin') {
      router.replace('/training');
    }
  }, [router]);

  const showNavbar = !publicRoutes.includes(router.pathname) && router.pathname !== '/evaluation';

  return (
    <>
      {showNavbar && <Navbar />}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;