import React, { use, useEffect, useState } from "react";
import { FaLaptopCode, FaChartLine, FaMobileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getTracks } from "../services/ApiService";

const tracks = [
  {
    id: 1,
    title: "Web Development",
    description: "Learn HTML, CSS, JavaScript, and modern frameworks.",
    icon: (
      <div className="bg-primary text-white p-4 rounded-full inline-block mb-4">
        <FaLaptopCode className="text-3xl" />
      </div>
    ),
  },
  {
    id: 2,
    title: "Data Science",
    description: "Explore data analytics, machine learning, and Python.",
    icon: (
      <div className="bg-primary text-white p-4 rounded-full inline-block mb-4">
        <FaChartLine className="text-3xl" />
      </div>
    ),
  },
  {
    id: 3,
    title: "Mobile Development",
    description: "Build apps using Flutter, React Native, or Kotlin.",
    icon: (
      <div className="bg-primary text-white p-4 rounded-full inline-block mb-4">
        <FaMobileAlt className="text-3xl" />
      </div>
    ),
  },
];

const Tracks = () => {
  const [tracks, setTracks] = useState([]);

  const fetchTracks = async () => {
    try {
      const response = await getTracks();
      setTracks(response);
    } catch (error) {
      console.error("Error fetching tracks: ", error);
    }
  };
  useEffect(() => {
    fetchTracks();
  }, []);
  return (
    <div
      id="tracks"
      className="container mx-auto mt-24  my-10 p-6 bg-gradient-to-b from-gray-50 to-gray-100"
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-primary">
        Available Tracks
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tracks?.map((track) => (
          <div
            key={track._id}
            className="bg-white border border-gray-200 rounded-lg hover:shadow-lg hover:border-primary transform transition-transform hover:scale-105 p-6 text-center"
          >
            {/* {track.icon} */}
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              {track.title}
            </h3>
            <p className="text-gray-500 leading-relaxed text-justify mb-4">
              {track.description}
            </p>
            <Link
              to={`/tracks/${track._id}`}
              className="bg-primary text-white px-6 py-2 rounded-full hover:bg-secondary hover:shadow-lg transition-all duration-300 focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              aria-label={`Register for ${track.title}`}
            >
              Register Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tracks;
