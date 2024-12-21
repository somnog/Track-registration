import React, { useEffect, useState } from "react";
import TrackDetail from "../components/TrackDetail";
import { useParams } from "react-router-dom";
import { getTrack } from "../services/ApiService";

const Track = () => {
  const exampleTrack = {
    name: "Web Development",
    description:
      "Dive deep into web development concepts with HTML, CSS, JavaScript, and modern frameworks like React.js.",
    startDate: "2024-01-15",
    endDate: "2024-03-15",
    closeDate: "2024-01-10",
    requirements: [
      "Basic knowledge of programming",
      "Laptop with stable internet connection",
      "Willingness to learn",
    ],
    facilitators: [
      {
        name: "John Doe",
        role: "Lead Instructor",
        photo: "https://via.placeholder.com/100",
      },
      {
        name: "Jane Smith",
        role: "Teaching Assistant",
        photo: "https://via.placeholder.com/100",
      },
      {
        name: "Mark Brown",
        role: "Guest Speaker",
        photo: "https://via.placeholder.com/100",
      },
    ],
  };

  //route id from the URL
  const { id } = useParams();
  const [track, setTrack] = useState({});

  const getTrackById = async (id) => {
    try {
      const response = await getTrack(id);
      setTrack(response);
    } catch (error) {
      console.error("Error fetching track: ", error);
    }
  };

  useEffect(() => {
    getTrackById(id);
  }, [id]);

  return <TrackDetail track={track} />;
};

export default Track;
