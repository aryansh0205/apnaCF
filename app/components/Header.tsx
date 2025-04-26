"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Logo from "../Asset/logo.png";
import {
  FiMenu,
  FiX,
  FiUser,
  FiSearch,
  FiChevronDown,
  FiMapPin,
  FiBell,
  FiShoppingBag,
  FiHeart,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";
interface User {
  name?: string;
  email?: string;
}

// User Sidebar Component
const UserSidebar = ({
  isOpen,
  onClose,
  user,
}: {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: "easeInOut" }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                  <FiUser className="text-red-600" />
                </div>
                <div>
                  <h3 className="font-medium">{user?.name || "Welcome!"}</h3>
                  <p className="text-sm text-gray-500">
                    {user?.email || "Guest"}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <FiX />
              </button>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6">
              {/* Account Section */}
              <div>
                <h4 className="text-xs uppercase text-gray-500 font-medium mb-3 px-2">
                  Account
                </h4>
                <div className="space-y-1">
                  <SidebarItem icon={<FiUser />} text="Profile" />
                  <SidebarItem icon={<FiSettings />} text="Settings" />
                </div>
              </div>

              {/* Activity Section */}
              <div>
                <h4 className="text-xs uppercase text-gray-500 font-medium mb-3 px-2">
                  Activity
                </h4>
                <div className="space-y-1">
                  <SidebarItem
                    icon={<FiBell />}
                    text="Notifications"
                    badge={3}
                  />
                  <SidebarItem icon={<FiShoppingBag />} text="Your Orders" />
                </div>
              </div>

              {/* Saved Items Section */}
              <div>
                <h4 className="text-xs uppercase text-gray-500 font-medium mb-3 px-2">
                  Saved Items
                </h4>
                <div className="space-y-1">
                  <SidebarItem icon={<FiHeart />} text="Saved Offers" />
                  <SidebarItem icon={<FiMapPin />} text="Saved Places" />
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t">
              {user ? (
                <button className="w-full flex items-center justify-center space-x-2 text-red-600 hover:bg-red-50 py-2 px-4 rounded-lg">
                  <FiLogOut />
                  <span>Sign Out</span>
                </button>
              ) : (
                <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700">
                  Sign In
                </button>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const SidebarItem = ({
  icon,
  text,
  badge,
}: {
  icon: React.ReactNode;
  text: string;
  badge?: number;
}) => (
  <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 transition-colors">
    <div className="flex items-center space-x-3">
      <span className="text-gray-700">{icon}</span>
      <span>{text}</span>
    </div>
    {badge && (
      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
        {badge}
      </span>
    )}
  </button>
);

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [showCityPopup, setShowCityPopup] = useState(false);
  const [isDetectingLocation, setIsDetectingLocation] = useState(false);
  const [locationError, setLocationError] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const user = null; //use State

  const cities = [
    { name: "Kanpur", available: true },
    { name: "Delhi", available: false },
    { name: "Mumbai", available: false },
    { name: "Bangalore", available: false },
    { name: "Hyderabad", available: false },
    { name: "Chennai", available: false },
    { name: "Kolkata", available: false },
    { name: "Pune", available: false },
  ];

  useEffect(() => {
    // Check if city is already selected in localStorage
    const savedCity = localStorage.getItem("selectedCity");
    if (savedCity) {
      setSelectedCity(savedCity);
    } else {
      setShowCityPopup(true);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const detectLocation = () => {
    setIsDetectingLocation(true);
    setLocationError(null);

    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by your browser");
      setIsDetectingLocation(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const data = await response.json();
          const city = data.address?.city || data.address?.town;

          if (city) {
            const foundCity = cities.find(
              (c) => c.name.toLowerCase() === city.toLowerCase()
            );
            if (foundCity) {
              selectCity(foundCity.name);
            } else {
              setLocationError(
                `We'll soon come to ${city}! Currently only available in Kanpur.`
              );
            }
          } else {
            setLocationError("Could not determine your city");
          }
        } catch (e) {
          setLocationError("Error fetching location data");
          console.log(e);
        } finally {
          setIsDetectingLocation(false);
        }
      },
      () => {
        setLocationError("Unable to retrieve your location");
        setIsDetectingLocation(false);
      }
    );
  };

  const selectCity = (city: string) => {
    const selected = cities.find((c) => c.name === city);
    if (selected) {
      setSelectedCity(city);
      localStorage.setItem("selectedCity", city);
      setShowCityPopup(false);
    }
  };

  const toggleCityPopup = () => {
    setShowCityPopup(!showCityPopup);
    setLocationError(null);
  };

  const isKanpurSelected = selectedCity === "Kanpur";

  return (
    <>
      {/* Main Header */}
      <header
        className={`fixed w-full top-0 z-40 bg-white shadow-sm transition-all duration-300 ${
          isScrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        {/* Primary Header */}
        <div className="border-b border-gray-100">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2">
                <Image src={Logo} alt="Logo" width={32} height={32} />
                <span className="text-lg font-semibold text-red-600">
                  Apna City
                </span>
              </Link>

              {/* City Selector and other elements */}
              <div className="hidden md:flex items-center space-x-4">
                {/* Search Bar - Desktop */}
                <div className="flex mx-4">
                  <div className="relative w-[400px]">
                    <input
                      type="text"
                      placeholder="Search for places, offers..."
                      className="w-full px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-1 focus:ring-red-500 text-sm"
                    />
                    <FiSearch className="absolute right-3 top-2.5 text-gray-400" />
                  </div>
                </div>
                {/* City Selector */}
                <div className="relative">
                  <button
                    onClick={toggleCityPopup}
                    className="flex items-center gap-1 text-gray-600 hover:text-red-600 text-sm"
                  >
                    <FiMapPin className="text-red-500" />
                    <span>{selectedCity || "Select City"}</span>
                    <FiChevronDown
                      className={`transition-transform ${
                        showCityPopup ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Show other elements only if Kanpur is selected */}
                {isKanpurSelected && (
                  <>
                    {/* Login Button - Now triggers sidebar */}
                    <button
                      onClick={() => setIsSidebarOpen(true)}
                      className="flex items-center space-x-1 text-gray-600 hover:text-red-600 text-sm"
                    >
                      <FiUser className="w-4 h-4" />
                      <span>Login</span>
                    </button>
                  </>
                )}
              </div>

              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <FiX className="w-5 h-5 text-gray-700" />
                ) : (
                  <FiMenu className="w-5 h-5 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* City Selection Popup */}
        <AnimatePresence>
          {showCityPopup && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg z-50 border border-gray-200 px-4 py-3"
            >
              <div className="mb-3">
                <button
                  onClick={detectLocation}
                  disabled={isDetectingLocation}
                  className="w-[300px] flex items-center justify-start gap-2  py-2 cursor-pointer rounded-lg text-sm text-gray-700"
                >
                  {isDetectingLocation ? (
                    "Detecting your location..."
                  ) : (
                    <>
                      <FiMapPin className="text-red-600" />
                      <div className="text-red-600"> Detect My Location </div>
                    </>
                  )}
                </button>
                {locationError && (
                  <p className="mt-2 text-sm text-red-500 text-center">
                    {locationError}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <p className="text-xs text-gray-500 uppercase tracking-wider">
                  Available Cities
                </p>
                {cities
                  .filter((c) => c.available)
                  .map((city) => (
                    <button
                      key={city.name}
                      onClick={() => selectCity(city.name)}
                      className="w-full text-left px-4 py-2 hover:bg-red-50 text-sm rounded-md flex justify-between items-center"
                    >
                      {city.name}
                    </button>
                  ))}

                <p className="text-xs text-gray-500 uppercase tracking-wider mt-3">
                  Coming Soon
                </p>
                {cities
                  .filter((c) => !c.available)
                  .map((city) => (
                    <button
                      key={city.name}
                      disabled
                      className="w-full text-left px-4 py-2 text-sm rounded-md flex justify-between items-center opacity-60 cursor-not-allowed"
                    >
                      {city.name}
                      <span className="text-xs bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">
                        Soon
                      </span>
                    </button>
                  ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Secondary Header - Only show if Kanpur is selected */}
        {isKanpurSelected && (
          <div className="hidden md:block border-b border-gray-100">
            <div className="container mx-auto px-4">
              <nav className="flex items-center space-x-8">
                <Link
                  href="/under-construction"
                  className="py-3 text-gray-600 hover:text-red-600 text-sm transition-colors"
                >
                  Places
                </Link>
                <Link
                  href="/offers"
                  className="py-3 text-gray-600 hover:text-red-600 text-sm transition-colors"
                >
                  Offers
                </Link>
                <Link
                  href="/creators"
                  className="py-3 text-gray-600 hover:text-red-600 text-sm transition-colors"
                >
                  Creators
                </Link>
                <Link
                  href="/under-construction"
                  className="py-3 text-gray-600 hover:text-red-600 text-sm transition-colors"
                >
                  Events
                </Link>
                <Link
                  href="/ContactUs"
                  className="py-3 text-gray-600 hover:text-red-600 text-sm transition-colors"
                >
                  Post Offer
                </Link>
                <Link
                  href="/AboutUs"
                  className="py-3 text-gray-600 hover:text-red-600 text-sm transition-colors"
                >
                  About Us
                </Link>
              </nav>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden fixed inset-0 top-16 bg-white pt-4 px-4 z-40 overflow-y-auto"
            >
              {/* City Selector - Mobile */}
              <div className="mb-4">
                <button
                  onClick={toggleCityPopup}
                  className="w-full flex justify-between items-center px-4 py-2 border border-gray-200 rounded-lg text-sm"
                >
                  <div className="flex items-center gap-2">
                    <FiMapPin className="text-red-500" />
                    <span>{selectedCity || "Select City"}</span>
                  </div>
                  <FiChevronDown
                    className={`transition-transform ${
                      showCityPopup ? "rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {/* Show other elements only if Kanpur is selected */}
              {isKanpurSelected && (
                <>
                  {/* Search Bar - Mobile */}
                  <div className="mb-4">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Search..."
                        className="w-full px-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-1 focus:ring-red-500 text-sm"
                      />
                      <FiSearch className="absolute right-3 top-2.5 text-gray-400" />
                    </div>
                  </div>

                  {/* Mobile Nav Items */}
                  <nav className="flex flex-col space-y-2 mb-4">
                    <Link
                      href="/under-construction"
                      className="py-2 px-2 text-gray-600 hover:bg-gray-50 rounded-md text-sm"
                    >
                      Places
                    </Link>
                    <Link
                      href="/offers"
                      className="py-2 px-2 text-gray-600 hover:bg-gray-50 rounded-md text-sm"
                    >
                      Offers
                    </Link>
                    <Link
                      href="/creators"
                      className="py-2 px-2 text-gray-600 hover:bg-gray-50 rounded-md text-sm"
                    >
                      Creators
                    </Link>
                    <Link
                      href="/under-construction"
                      className="py-2 px-2 text-gray-600 hover:bg-gray-50 rounded-md text-sm"
                    >
                      Events
                    </Link>
                    <Link
                      href="/ContactUs"
                      className="py-2 px-2 text-gray-600 hover:text-red-600 text-sm transition-colors"
                    >
                      Post Offer
                    </Link>
                    <Link
                      href="/AboutUs"
                      className="py-2 px-2 text-gray-600 hover:text-red-600 text-sm transition-colors"
                    >
                      About Us
                    </Link>
                  </nav>

                  {/* Login Button - Mobile - Now triggers sidebar */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <button
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsSidebarOpen(true);
                      }}
                      className="flex items-center space-x-2 text-gray-600 text-sm"
                    >
                      <FiUser className="w-4 h-4" />
                      <span>Login</span>
                    </button>
                  </div>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* User Sidebar */}
      <UserSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        user={user}
      />

      {/* Coming Soon Overlay for non-Kanpur cities */}
      {selectedCity && !isKanpurSelected && (
        <div className="fixed inset-0 bg-white bg-opacity-90 z-30 flex flex-col items-center justify-center p-6 text-center mt-16">
          <div className="max-w-md">
            <FiMapPin className="mx-auto text-red-500 text-4xl mb-4" />
            <h2 className="text-2xl font-medium mb-4">
              Coming Soon to {selectedCity}!
            </h2>
            <p className="text-gray-600 mb-6">
              We&#39;re currently only available in Kanpur. We&#39;ll be
              expanding to your city soon!
            </p>

            <button
              onClick={() => {
                localStorage.removeItem("selectedCity");
                setSelectedCity(null);
                setShowCityPopup(true);
              }}
              className="px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
            >
              Change City
            </button>
          </div>
        </div>
      )}
    </>
  );
}
