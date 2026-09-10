import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BookingProvider } from '@/components/booking/BookingProvider';
import { BookingModal } from '@/components/booking/BookingModal';
import { HomePage } from '@/pages/HomePage';
import { StyleGuide } from '@/pages/StyleGuide';
import { NotFound } from '@/pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <BookingProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/style-guide" element={<StyleGuide />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <BookingModal />
      </BookingProvider>
    </BrowserRouter>
  );
}
