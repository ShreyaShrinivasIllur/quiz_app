import '../styles/App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** import components */
import CategorySelection from './CategorySelection';
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';
import ErrorBoundary from './ErrorBoundary';
import { CheckUserExist } from '../helper/helper';

// ScrollToTop component to handle page navigation scrolling
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // First try immediate scroll without smooth behavior
    window.scrollTo(0, 0);
    
    // Then force scroll using multiple techniques
    setTimeout(() => {
      // Method 1: Standard scrollTo
      window.scrollTo(0, 0);
      
      // Method 2: ScrollTo with options
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto'
      });
      
      // Method 3: Set scrollTop directly on both document elements
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 5);
  }, [pathname]);

  return null;
}


// Layout component that includes ScrollToTop
function Layout({ children }) {
  // Force scroll position on initial render
  useEffect(() => {
    // Reset scroll position immediately
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <>
      <ScrollToTop />
      {children}
    </>
  );
}

/** react routes */
const router = createBrowserRouter([
  {
    path : '/',
    element : <Layout><CategorySelection></CategorySelection></Layout>
  },
  {
    path : '/main',
    element : <Layout><Main></Main></Layout>
  },
  {
    path : '/quiz',
    element : <Layout><CheckUserExist><Quiz /></CheckUserExist></Layout>
  },
  {
    path : '/result',
    element : <Layout><CheckUserExist><Result /></CheckUserExist></Layout>
  },
])

function App() {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

export default App;