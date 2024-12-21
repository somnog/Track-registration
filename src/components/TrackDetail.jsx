import React from "react";
import { Link } from "react-router-dom";
import innovation from "../assets/innovation.jpg";
import moment from "moment";
const TrackDetail = ({ track }) => {
  return (
    <>
      {/* showcase */}
      <div className="relative top-14  text-white text-center py-28">
        <img
          src={innovation}
          alt="Showcase"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4">{track?.title}</h2>
        </div>
        <div className="absolute inset-0 bg-black opacity-50 "></div>
      </div>
      <div className="container mx-auto mt-20 my-16 px-6 lg:px-20">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-gray-600 text-lg mt-4 max-w-3xl mx-auto">
            {track?.description}
          </p>
        </div>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Key Dates */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-text mb-6">Key Dates</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                <span className="font-semibold text-gray-900">Start Date:</span>{" "}
                {moment(track?.start_date).format("MMMM Do YYYY")}
              </p>
              <p>
                <span className="font-semibold text-gray-900">End Date:</span>{" "}
                {moment(track?.end_date).format("MMMM Do YYYY")}
              </p>
              <p>
                <span className="font-semibold text-gray-900">
                  Registration Close Date:
                </span>{" "}
                {moment(track?.close_date).format("MMMM Do YYYY")}
              </p>
            </div>
          </div>

          {/* Requirements */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-text mb-6">
              Requirements
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              {track?.requirements?.map((requirement, index) => (
                <li key={index}>{requirement}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Facilitators Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-text text-center mb-8">
            Meet the Facilitators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {track?.facilitators?.map((facilitator, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center"
              >
                <img
                  src={facilitator.image}
                  alt={`${facilitator.name}'s photo`}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900">
                  {facilitator.name}
                </h3>
                <p className="text-gray-600">{facilitator.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="mt-16 text-center">
          <Link
            to={`/track-register/${track?._id}`}
            className="bg-primary text-white px-10 py-4 rounded-lg text-lg font-medium shadow-md hover:bg-secondary transition duration-300"
          >
            Register Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default TrackDetail;
