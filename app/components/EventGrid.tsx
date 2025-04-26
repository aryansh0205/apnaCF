import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import { API } from "../utils/helpers";

type Offer = {
  id: string;
  offerType: string;
  offerImage: string;
  offerName: string;
  offerDescription: string;
};

export default function DataGrid() {
  const [data, setData] = useState<Offer[]>([]);
  const [loading, setLoading] = useState(true);

  const getCreators = async () => {
    try {
      const res = await axios.get(`${API}/getOffer`);
      setData(res.data);
    } catch (e) {
      console.error("Error fetching offers:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCreators();
  }, []);

  const filteredEvents = data.filter((d) => d.offerType === "event");

  return (
    <>
      {filteredEvents.length > 0 && (
        <section className="container mx-auto my-12 p-6">
          <h2 className="text-3xl font-bold mb-6">Upcoming Events</h2>
          {loading ? (
            <p className="text-gray-600">Loading events...</p>
          ) : filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredEvents.map((item, index) => (
                <div
                  key={index}
                  className="relative rounded-2xl overflow-hidden shadow-lg"
                >
                  <div className="relative w-full h-[250px]">
                    <Image
                      src={item.offerImage}
                      alt={item.offerName}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-white rounded-tr-[30px] bg-opacity-50 text-black p-4">
                    <h3 className="text-xl font-semibold font-sans">
                      {item.offerName}
                    </h3>
                    <p className="text-sm">{item.offerDescription}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600">No upcoming events found.</p>
          )}
        </section>
      )}
    </>
  );
}
