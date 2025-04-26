"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiInstagram,
  FiYoutube,
  FiTwitter,
} from "react-icons/fi";
import { FaLinkedinIn, FaSearch } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import { API } from "../utils/helpers";

const filterTabs = [
  { label: "This Week", value: "this_week" },
  { label: "Top Trending", value: "trending" },
  { label: "All Time", value: "all_time" },
  { label: "Top Rated", value: "top_rated" },
] as const;

type FilterTabValue = (typeof filterTabs)[number]["value"];

interface Creator {
  id: string;
  creatorName: string;
  creatorImage: string;
  category: string;
  rating: number;
  collaborations: number;
  phone: string;
  email: string;
  social: {
    instagram: string | null;
    youtube: string | null;
    tiktok: string | null;
    twitter: string | null;
    linkedin: string | null;
  };
}

export default function CreatorsListPage() {
  const [creators, setCreators] = useState<Creator[]>([]);
  const [filtered, setFiltered] = useState<Creator[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<FilterTabValue>("all_time");
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${API}/getCreators`);

        const processed: Creator[] =
          res.data?.processedCreators?.map((c: unknown) => {
            const creator = c as Record<string, unknown>;
            return {
              id: String(creator._id),
              creatorName: String(creator.creatorName),
              creatorImage: String(creator.creatorImage),
              category: String(creator.category || "Content Creator"),
              rating: Number(creator.rating ?? 4.0),
              collaborations: Number(creator.collaborations ?? 0),
              phone: String(creator.phone || "+91 XXXXX XXXXX"),
              email: String(creator.email || "contact@creator.com"),
              social: {
                instagram: creator.instagram ? String(creator.instagram) : null,
                youtube: creator.youtube ? String(creator.youtube) : null,
                tiktok: creator.tiktok ? String(creator.tiktok) : null,
                twitter: creator.twitter ? String(creator.twitter) : null,
                linkedin: creator.linkedin ? String(creator.linkedin) : null,
              },
            };
          }) || [];

        setCreators(processed);
        setFiltered(processed);
      } catch (err) {
        console.error("API failed, using fallback data.", err);
        setCreators([]);
        setFiltered([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let updated = [...creators];

    if (activeTab === "this_week") {
      updated = updated.slice(0, 4);
    } else if (activeTab === "trending") {
      updated.sort((a, b) => b.collaborations - a.collaborations);
    } else if (activeTab === "top_rated") {
      updated.sort((a, b) => b.rating - a.rating);
    }

    if (searchTerm) {
      const lowerSearch = searchTerm.toLowerCase();
      updated = updated.filter(
        (c) =>
          c.creatorName.toLowerCase().includes(lowerSearch) ||
          c.category.toLowerCase().includes(lowerSearch)
      );
    }

    setFiltered(updated);
  }, [activeTab, searchTerm, creators]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8 md:pt-36 pt-25">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Top Creators in Kanpur
        </h1>

        {/* Search and Filter Tabs */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-6">
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search creators..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>

          <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-1">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                className={`px-4 py-2 rounded-full border text-sm whitespace-nowrap transition ${
                  activeTab === tab.value
                    ? "bg-red-600 text-white border-red-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
                onClick={() => setActiveTab(tab.value)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Creator Grid */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="h-60 bg-gray-200 animate-pulse rounded-lg"
              />
            ))}
          </div>
        ) : filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((creator) => (
              <motion.div
                key={creator.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-200"
              >
                <Image
                  width={500}
                  height={600}
                  src={creator.creatorImage || "/default-creator.jpg"}
                  alt={creator.creatorName}
                  className="w-full h-40 object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/default-creator.jpg";
                  }}
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 truncate">
                    {creator.creatorName}
                  </h3>
                  <p className="text-sm text-gray-500 mb-1">
                    {creator.category}
                  </p>

                  <div className="text-sm text-gray-700 mb-2 truncate">
                    <FiMail className="inline mr-2 text-gray-500" />
                    {creator.email}
                  </div>
                  <div className="text-sm text-gray-700 truncate">
                    <FiPhone className="inline mr-2 text-gray-500" />
                    {creator.phone}
                  </div>

                  <div className="flex space-x-2 mt-3 text-gray-600">
                    {creator.social?.instagram && (
                      <a
                        href={`https://instagram.com/${creator.social.instagram.replace(
                          "@",
                          ""
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiInstagram />
                      </a>
                    )}
                    {creator.social?.youtube && (
                      <a
                        href={`https://youtube.com/${creator.social.youtube}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiYoutube />
                      </a>
                    )}
                    {creator.social?.twitter && (
                      <a
                        href={`https://twitter.com/${creator.social.twitter.replace(
                          "@",
                          ""
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiTwitter />
                      </a>
                    )}
                    {creator.social?.linkedin && (
                      <a
                        href={`https://linkedin.com/in/${creator.social.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaLinkedinIn />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600 mt-12">
            No creators found for your search.
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
