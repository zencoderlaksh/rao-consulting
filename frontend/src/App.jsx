import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import ScrollToTop from "./components/ScrollToTop";
import AuthModal from "./components/AuthModal";
import BookingModal from "./components/BookingModal";
import LeafletModal from "./components/LeafletModal";
import FomoNotification from "./components/FomoNotification";
import { AppAuthProvider } from "./context/AuthContext";

import Home from "./pages/Home";
import Workshops from "./pages/Workshops";
import CorporateTraining from "./pages/CorporateTraining";
import Clients from "./pages/Clients";
import Collabs from "./pages/Collabs";
import SaasPlatform from "./pages/SaasPlatform";
import About from "./pages/About";
import Contact from "./pages/Contact";

function MainApp() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingTrack, setBookingTrack] = useState("Placement Accelerator Workshop");

  const [leafletOpen, setLeafletOpen] = useState(false);
  const [leafletData, setLeafletData] = useState(null);

  const handleOpenBooking = (track = "Placement Accelerator Workshop") => {
    setBookingTrack(track);
    setBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingOpen(false);
  };

  const handleOpenLeaflet = (data) => {
    setLeafletData(data);
    setLeafletOpen(true);
  };

  const handleCloseLeaflet = () => {
    setLeafletOpen(false);
    setLeafletData(null);
  };

  return (
    <>
      <ScrollProgress />
      <Navbar onOpenBooking={handleOpenBooking} />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                onOpenBooking={handleOpenBooking}
                onOpenLeaflet={handleOpenLeaflet}
              />
            }
          />
          <Route
            path="/workshops"
            element={
              <Workshops
                onOpenBooking={handleOpenBooking}
                onOpenLeaflet={handleOpenLeaflet}
              />
            }
          />
          <Route
            path="/corporate-training"
            element={
              <CorporateTraining
                onOpenBooking={handleOpenBooking}
                onOpenLeaflet={handleOpenLeaflet}
              />
            }
          />
          <Route
            path="/clients"
            element={
              <Clients
                onOpenBooking={handleOpenBooking}
                onOpenLeaflet={handleOpenLeaflet}
              />
            }
          />
          <Route
            path="/collabs"
            element={
              <Collabs
                onOpenBooking={handleOpenBooking}
                onOpenLeaflet={handleOpenLeaflet}
              />
            }
          />
          <Route
            path="/saas"
            element={
              <SaasPlatform
                onOpenBooking={handleOpenBooking}
                onOpenLeaflet={handleOpenLeaflet}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />

      {/* Global Modals, Floating Notifications & Controls */}
      <AuthModal />
      <BookingModal
        isOpen={bookingOpen}
        onClose={handleCloseBooking}
        defaultTrack={bookingTrack}
      />
      <LeafletModal
        isOpen={leafletOpen}
        onClose={handleCloseLeaflet}
        data={leafletData}
      />
      <FomoNotification />
      <ScrollToTop />
    </>
  );
}

function App() {
  return (
    <AppAuthProvider>
      <MainApp />
    </AppAuthProvider>
  );
}

export default App;
