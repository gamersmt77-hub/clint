import React, { useState } from "react";
import { Header } from "./components/Header";
import { ClientPitchBar } from "./components/ClientPitchBar";
import { Hero } from "./components/Hero";
import { ServicesSection } from "./components/ServicesSection";
import { RefurbishedLaptops } from "./components/RefurbishedLaptops";
import { BeforeAfterGallery } from "./components/BeforeAfterGallery";
import { LocationSection } from "./components/LocationSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { Footer } from "./components/Footer";
import { FloatingActions } from "./components/FloatingActions";

import { AiDiagnosticsModal } from "./components/AiDiagnosticsModal";
import { CustomPcBuilder } from "./components/CustomPcBuilder";
import { RepairTrackerModal } from "./components/RepairTrackerModal";
import { BookingModal } from "./components/BookingModal";
import { ServiceItem, ProductItem } from "./types";

export default function App() {
  // Modal states
  const [diagnosticOpen, setDiagnosticOpen] = useState(false);
  const [diagnosticSymptom, setDiagnosticSymptom] = useState("");

  const [pcBuilderOpen, setPcBuilderOpen] = useState(false);
  const [trackerOpen, setTrackerOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  // Search and Category filters for MD Computers style catalog
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Booking pre-fills
  const [bookingService, setBookingService] = useState("General Repair / Diagnostic Checkup");
  const [bookingDevice, setBookingDevice] = useState("");
  const [bookingIssue, setBookingIssue] = useState("");

  const handleOpenDiagnostic = (symptom = "") => {
    setDiagnosticSymptom(symptom);
    setDiagnosticOpen(true);
  };

  const handleSelectCategory = (cat: string) => {
    setSelectedCategory(cat);
    const elem = document.getElementById("products-catalog-section");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectService = (service: ServiceItem) => {
    setBookingService(service.title);
    setBookingIssue(`Interested in ${service.title} (${service.startingPrice})`);
    setBookingOpen(true);
  };

  const handleInquireProduct = (product: ProductItem) => {
    setBookingService(`In-Store Demo: ${product.name}`);
    setBookingDevice(product.name);
    setBookingIssue(`Inquire stock & in-store testing for ${product.name} at offer price ${product.offerPrice}`);
    setBookingOpen(true);
  };

  const handleOrderPcBuild = (buildName: string, budget: string) => {
    setBookingService(`Custom PC Assembly: ${buildName}`);
    setBookingIssue(`Requested custom build with budget ${budget}`);
    setBookingOpen(true);
  };

  const handleBookWithDetails = (details: { device: string; issue: string; estimatedPrice: string }) => {
    setBookingService("AI Estimated Repair Appointment");
    setBookingDevice(details.device);
    setBookingIssue(`${details.issue} (Est: ${details.estimatedPrice})`);
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F0F0F0] font-sans selection:bg-blue-500 selection:text-white">
      
      {/* Demo Pitch Header for Pitching to Next Gen Computer Owner */}
      <ClientPitchBar />

      {/* Main MD Computers Style Header */}
      <Header
        onOpenDiagnostic={() => handleOpenDiagnostic()}
        onOpenTracker={() => setTrackerOpen(true)}
        onOpenBooking={() => setBookingOpen(true)}
        onOpenPcBuilder={() => setPcBuilderOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={handleSelectCategory}
      />

      {/* Main Page Sections */}
      <main>
        {/* High-Converting Hero with Multi-Banner Carousel & Category Grid */}
        <Hero
          onOpenDiagnostic={(symptom) => handleOpenDiagnostic(symptom)}
          onOpenPcBuilder={() => setPcBuilderOpen(true)}
          onOpenBooking={() => setBookingOpen(true)}
          onOpenTracker={() => setTrackerOpen(true)}
          onSelectCategory={handleSelectCategory}
        />

        {/* MD Computers Style Product & Hardware Catalog */}
        <RefurbishedLaptops
          onInquireProduct={handleInquireProduct}
          onOpenPcBuilder={() => setPcBuilderOpen(true)}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchQuery={searchQuery}
        />

        {/* Full Services & Repair Grid */}
        <ServicesSection
          onSelectService={handleSelectService}
          onOpenDiagnostic={(symptom) => handleOpenDiagnostic(symptom)}
        />

        {/* Before & After Proof of Craftsmanship */}
        <BeforeAfterGallery
          onOpenBooking={() => setBookingOpen(true)}
        />

        {/* Location & Navigation Section for Hariniwas Complex Patna */}
        <LocationSection />

        {/* Reviews from Patna Customers & FAQs */}
        <ReviewsSection />
      </main>

      {/* Comprehensive Footer */}
      <Footer
        onOpenDiagnostic={() => handleOpenDiagnostic()}
        onOpenPcBuilder={() => setPcBuilderOpen(true)}
        onOpenBooking={() => setBookingOpen(true)}
        onOpenTracker={() => setTrackerOpen(true)}
      />

      {/* Floating Call & WhatsApp Action Buttons */}
      <FloatingActions
        onOpenDiagnostic={() => handleOpenDiagnostic()}
      />

      {/* Interactive AI Diagnostic & Price Estimator Modal */}
      <AiDiagnosticsModal
        isOpen={diagnosticOpen}
        onClose={() => setDiagnosticOpen(false)}
        initialSymptom={diagnosticSymptom}
        onBookWithDetails={handleBookWithDetails}
      />

      {/* Interactive Custom PC Builder & FPS Configurator Modal */}
      <CustomPcBuilder
        isOpen={pcBuilderOpen}
        onClose={() => setPcBuilderOpen(false)}
        onOrderBuild={handleOrderPcBuild}
      />

      {/* Live Repair Job Status Tracker Modal */}
      <RepairTrackerModal
        isOpen={trackerOpen}
        onClose={() => setTrackerOpen(false)}
      />

      {/* Quick Booking / Appointment Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultService={bookingService}
        defaultDevice={bookingDevice}
        defaultIssue={bookingIssue}
      />

    </div>
  );
}
