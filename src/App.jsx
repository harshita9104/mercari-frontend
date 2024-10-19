import { Routes, Route, useLocation } from 'react-router-dom';

import { PageFooter, PageHeader, PageNavigation } from './layouts';
import { Categories } from './components';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

export default function App() {
  const location = useLocation();
  return (
    <div>
      <div className="sticky top-0 z-10 bg-white">
        <PageHeader />
        {location.pathname !== '/women' && <Categories />}
      </div>
      <main className="container mx-auto max-w-screen-xl p-5 lg:p-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/women" />
          {/* Add more routes as needed */}
        </Routes>
      </main>
      <PageFooter />
      <PageNavigation />
    </div>
  );
}
