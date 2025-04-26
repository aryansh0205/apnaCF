"use client";
import { useState, useEffect } from "react";
import { FiCheck, FiArrowRight, FiPlus, FiMinus } from "react-icons/fi";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MembershipPage() {
  const [selectedTier, setSelectedTier] = useState<"hero" | "champion" | null>(
    null
  );
  const [showAddons, setShowAddons] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 19,
    minutes: 45,
    seconds: 30,
  });

  // Additional services
  const [selectedServices, setSelectedServices] = useState<
    Record<string, boolean>
  >({
    "Professional Banner Design": false,
    "Additional Image Slots": false,
    "Review Management": false,
    "Featured Listing Boost": false,
  });

  // Pricing data
  const pricing = {
    original: {
      hero: 999,
      champion: 2499,
    },
    discounted: {
      hero: 399,
      champion: 999,
    },
    services: {
      "Professional Banner Design": 499,
      "Additional Image Slots": 199,
      "Review Management": 799,
      "Featured Listing Boost": 299,
    },
    discounts: {
      hero: Math.round(((999 - 399) / 999) * 100),
      champion: Math.round(((2499 - 999) / 2499) * 100),
    },
  };

  // Calculate total
  const calculateTotal = () => {
    let total = 0;
    if (selectedTier) {
      total += pricing.discounted[selectedTier];
    }

    Object.entries(selectedServices).forEach(([service, isSelected]) => {
      if (isSelected) {
        total += pricing.services[service as keyof typeof pricing.services];
      }
    });

    return total;
  };

  // Toggle service selection
  const toggleService = (service: string) => {
    setSelectedServices((prev) => ({
      ...prev,
      [service]: !prev[service],
    }));
  };

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const newSeconds = prev.seconds - 1;
        const newMinutes = newSeconds < 0 ? prev.minutes - 1 : prev.minutes;
        const newHours = newMinutes < 0 ? prev.hours - 1 : prev.hours;

        return {
          hours: newHours < 0 ? 0 : newHours,
          minutes: newMinutes < 0 ? 59 : newMinutes,
          seconds: newSeconds < 0 ? 59 : newSeconds,
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handlePurchase = () => {
    // Handle purchase logic here
    const purchaseData = {
      tier: selectedTier,
      services: Object.entries(selectedServices)
        .filter(([, isSelected]) => isSelected)
        .map(([service]) => service),
      total: calculateTotal(),
    };
    console.log("Purchase data:", purchaseData);
    // Redirect to payment page or show payment modal
  };

  return (
    <div>
      <Header />
      <div className="max-w-6xl mx-auto px-4 md:py-38 py-24">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Business Growth Plans
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose your membership and add powerful services to boost your
            visibility
          </p>
        </div>

        {/* Limited Time Offer */}
        <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-lg p-4 mb-8 max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-3 md:mb-0">
              <h2 className="text-lg font-bold mb-1">LIMITED TIME OFFER</h2>
              <p className="text-sm opacity-90">
                Special launch discounts ending soon
              </p>
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-md font-medium">
              <span className="text-lg">
                {timeLeft.hours.toString().padStart(2, "0")}:
                {timeLeft.minutes.toString().padStart(2, "0")}:
                {timeLeft.seconds.toString().padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>

        {/* Membership Tiers */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Free Tier */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Basic
              </h2>
              <p className="text-gray-600 mb-4">Essential listing features</p>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-gray-900">₹0</span>
                <span className="text-gray-500 ml-1">/month</span>
              </div>
              <ul className="space-y-3 mb-6">
                <FeatureItem text="Business listing in directory" />
                <FeatureItem text="Appear in map searches" />
                <FeatureItem text="Basic contact information" />
                <FeatureItem text="1 profile image" />
                <FeatureItem text="Standard support" />
              </ul>
            </div>
            <button className="w-full py-3 px-6 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Get Started
            </button>
          </div>

          {/* Local Hero */}
          <div
            className={`bg-white rounded-xl shadow-md border-2 ${
              selectedTier === "hero"
                ? "border-orange-500"
                : "border-transparent"
            } p-6 relative`}
          >
            {selectedTier === "hero" && (
              <div className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-xs font-bold">
                SELECTED
              </div>
            )}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Local Hero
              </h2>
              <p className="text-gray-600 mb-4">Enhanced visibility</p>
              <div className="text-center mb-6">
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold text-orange-600">
                    ₹399
                  </span>
                  <span className="text-gray-500 ml-1">/month</span>
                  <span className="ml-3 text-sm text-gray-500 line-through">
                    ₹999
                  </span>
                </div>
                <p className="text-sm text-green-600 mt-1">
                  Save {pricing.discounts.hero}%
                </p>
              </div>
              <ul className="space-y-3 mb-6">
                <FeatureItem text="All Basic features" />
                <FeatureItem text="1 active offer promotion" />
                <FeatureItem text="Up to 5 business images" />
                <FeatureItem text="3 social media links" />
                <FeatureItem text="Respond to reviews" />
                <FeatureItem text="Basic analytics" />
                <FeatureItem text="Priority email support" />
              </ul>
            </div>
            <button
              onClick={() => setSelectedTier("hero")}
              className={`w-full py-3 px-6 rounded-lg font-medium ${
                selectedTier === "hero"
                  ? "bg-orange-600 text-white hover:bg-orange-700"
                  : "bg-orange-100 text-orange-800 hover:bg-orange-200"
              } transition-colors`}
            >
              {selectedTier === "hero" ? "Selected" : "Choose Plan"}
            </button>
          </div>

          {/* Kanpur Champion */}
          <div
            className={`bg-white rounded-xl shadow-md border-2 ${
              selectedTier === "champion"
                ? "border-red-500"
                : "border-transparent"
            } p-6 relative`}
          >
            <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 rounded-bl-lg rounded-tr-lg text-xs font-bold">
              MOST POPULAR
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                City Champion
              </h2>
              <p className="text-gray-600 mb-4">Maximum exposure</p>
              <div className="text-center mb-6">
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold text-red-600">₹999</span>
                  <span className="text-gray-500 ml-1">/month</span>
                  <span className="ml-3 text-sm text-gray-500 line-through">
                    ₹2499
                  </span>
                </div>
                <p className="text-sm text-green-600 mt-1">
                  Save {pricing.discounts.champion}%
                </p>
              </div>
              <ul className="space-y-3 mb-6">
                <FeatureItem text="All Local Hero features" />
                <FeatureItem text="Up to 5 active offers" />
                <FeatureItem text="Embed 3 videos" />
                <FeatureItem text="5 social media links" />
                <FeatureItem text="Highlight favorite reviews" />
                <FeatureItem text="Advanced analytics" />
                <FeatureItem text="Dedicated phone support" />
                <FeatureItem text="Free banner design" />
              </ul>
            </div>
            <button
              onClick={() => setSelectedTier("champion")}
              className={`w-full py-3 px-6 rounded-lg font-medium ${
                selectedTier === "champion"
                  ? "bg-red-600 text-white hover:bg-red-700"
                  : "bg-red-100 text-red-800 hover:bg-red-200"
              } transition-colors`}
            >
              {selectedTier === "champion" ? "Selected" : "Choose Plan"}
            </button>
          </div>
        </div>

        {/* Additional Services */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              Additional Growth Services
            </h2>
            <button
              onClick={() => setShowAddons(!showAddons)}
              className="text-red-600 font-medium flex items-center"
            >
              {showAddons ? "Hide Services" : "View Services"}
              {showAddons ? (
                <FiMinus className="ml-2" />
              ) : (
                <FiPlus className="ml-2" />
              )}
            </button>
          </div>

          {showAddons && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <ServiceCard
                title="Professional Banner Design"
                price="₹499"
                description="Custom banner for your business profile"
                isSelected={selectedServices["Professional Banner Design"]}
                onToggle={() => toggleService("Professional Banner Design")}
              />
              <ServiceCard
                title="Additional Image Slots"
                price="₹199"
                description="5 extra images for your listing"
                isSelected={selectedServices["Additional Image Slots"]}
                onToggle={() => toggleService("Additional Image Slots")}
              />
              <ServiceCard
                title="Review Management"
                price="₹799/month"
                description="Monitor and respond to reviews"
                isSelected={selectedServices["Review Management"]}
                onToggle={() => toggleService("Review Management")}
              />
              <ServiceCard
                title="Featured Listing Boost"
                price="₹299"
                description="7-day premium placement"
                isSelected={selectedServices["Featured Listing Boost"]}
                onToggle={() => toggleService("Featured Listing Boost")}
              />
            </div>
          )}
        </div>

        {/* Purchase Section */}
        {(selectedTier || Object.values(selectedServices).some((v) => v)) && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="mb-6 md:mb-0">
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  Your Selection
                </h2>

                {selectedTier && (
                  <div className="mb-4">
                    <p className="font-medium">
                      {selectedTier === "hero"
                        ? "Local Hero"
                        : "Kanpur Champion"}
                      Plan
                    </p>
                    <p className="text-gray-600">
                      ₹{pricing.discounted[selectedTier]}/month
                      <span className="ml-2 text-sm text-green-600">
                        (Save {pricing.discounts[selectedTier]}%)
                      </span>
                    </p>
                  </div>
                )}

                {Object.entries(selectedServices)
                  .filter(([isSelected]) => isSelected)
                  .map(([service]) => (
                    <div key={service} className="mb-2">
                      <p className="font-medium">{service}</p>
                      <p className="text-gray-600">
                        ₹
                        {
                          pricing.services[
                            service as keyof typeof pricing.services
                          ]
                        }
                      </p>
                    </div>
                  ))}

                <div className="mt-4 pt-4 border-t">
                  <p className="font-semibold">
                    Total:
                    <span className="text-2xl font-bold text-red-600">
                      ₹{calculateTotal()}
                    </span>
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Offer ends in {timeLeft.hours}h {timeLeft.minutes}m
                    {timeLeft.seconds}s
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="px-6 py-3 border border-gray-300 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                  onClick={() => {
                    setSelectedTier(null);
                    setSelectedServices({
                      "Professional Banner Design": false,
                      "Additional Image Slots": false,
                      "Review Management": false,
                      "Featured Listing Boost": false,
                    });
                  }}
                >
                  Clear Selection
                </button>
                <button
                  onClick={handlePurchase}
                  className="px-6 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors flex items-center justify-center"
                  disabled={
                    !selectedTier &&
                    !Object.values(selectedServices).some((v) => v)
                  }
                >
                  Proceed to Payment <FiArrowRight className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <li className="flex items-start">
      <FiCheck className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
      <span className="text-gray-700">{text}</span>
    </li>
  );
}

function ServiceCard({
  title,
  price,
  description,
  isSelected,
  onToggle,
}: {
  title: string;
  price: string;
  description: string;
  isSelected: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`border rounded-lg p-4 cursor-pointer transition-all ${
        isSelected
          ? "border-red-500 bg-red-50"
          : "border-gray-200 hover:border-gray-300"
      }`}
      onClick={onToggle}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-medium text-gray-900">{title}</h3>
        <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded">
          {price}
        </span>
      </div>
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      <button
        className={`w-full py-2 px-4 rounded-md text-sm font-medium ${
          isSelected
            ? "bg-red-600 text-white hover:bg-red-700"
            : "text-red-600 border border-red-600 hover:bg-red-50"
        } transition-colors`}
      >
        {isSelected ? "Added to Cart" : "Add Service"}
      </button>
    </div>
  );
}
