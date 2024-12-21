import React from "react";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "../utils/formikConfig";
import FormField from "../components/FormField";
import { toast } from "react-toastify";
import { redirect, useNavigate, useParams } from "react-router-dom";
import { registerTrack } from "../services/ApiService";

const Registration = ({ track }) => {
  // Submit handler for the form
  const { trackId } = useParams();
  console.log("Track ID: ", trackId);
  const navigate = useNavigate();
  const createRequest = async (data) => {
    try {
      const response = await registerTrack(data);
      console.log("Response: ", response);
      toast.success("Your registration was successful! 🎉", {
        position: "top-center",
        theme: "colored",
      });
      // Redirect to the home page using react-router-dom
      navigate("/");
    } catch (error) {
      console.error("Error submitting registration: ", error.response);
      toast.error(
        error.response.data.error.message ||
          "An error occurred. Please try again.",
        {
          position: "top-center",
          theme: "colored",
        }
      );
    }
  };
  const onSubmit = async (values) => {
    console.log("Form Values: ", values);
    const data = {
      ...values,
      trackId,
    };
    console.log("Data: ", data);
    await createRequest(data);
    // alert("Registration submitted successfully!");
    // Trigger a toast notification
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <div className="container mx-auto my-12 p-8 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
        Track Registration
      </h2>
      <form
        onSubmit={formik.handleSubmit}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        {/* Name */}
        <FormField label="Name" name="name" formik={formik} />

        {/* Email */}
        <FormField label="Email" name="email" type="email" formik={formik} />

        {/* Phone */}
        <FormField label="Phone" name="phone" type="tel" formik={formik} />

        {/* University */}
        <FormField label="University" name="university" formik={formik} />

        {/* GitHub Profile */}
        <FormField
          label="GitHub Profile"
          name="github"
          type="url"
          placeholder="https://github.com/your-profile"
          formik={formik}
        />

        {/* Level */}
        <FormField
          label="Level"
          name="level"
          as="select"
          options={["Beginner", "Intermediate", "Advanced"]}
          formik={formik}
        />

        {/* Position */}
        <FormField label="Current Position" name="position" formik={formik} />

        {/* Work */}
        <FormField label="Work" name="work" formik={formik} />

        {/* Reason */}
        <FormField
          label="Why did you choose this program?"
          name="reason"
          as="textarea"
          formik={formik}
        />

        {/* Availability */}
        <div className="flex items-center lg:col-span-2">
          <input
            type="checkbox"
            name="availability"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            checked={formik.values.availability}
            className="h-5 w-5 text-primary focus:ring-primary border-gray-300 rounded"
          />
          <label className="ml-2 text-gray-700">
            I am available for the program dates
          </label>
        </div>

        {/* Submit Button */}
        <div className="text-center lg:col-span-2">
          <button
            type="submit"
            className="bg-primary text-white px-8 py-3 rounded-lg font-medium shadow-md hover:bg-secondary transition duration-300"
          >
            Submit Registration
          </button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
