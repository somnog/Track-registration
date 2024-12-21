import * as Yup from "yup";
// Initial values for the form
const initialValues = {
  name: "",
  email: "",
  phone: "",
  university: "",
  level: "Beginner",
  position: "",
  work: "",
  github: "",
  availability: false,
  reason: "",
};

// Validation schema for the form
const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^\d+$/, "Phone number must contain only digits")
    .min(9, "Phone number must be at least 9 digits")
    .required("Phone number is required"),
  university: Yup.string().required("University is required"),
  // github: Yup.string()
  //   .url("Invalid GitHub URL")
  //   .required("GitHub profile is required"),
  level: Yup.string().oneOf(
    ["Beginner", "Intermediate", "Advanced"],
    "Invalid level"
  ),
  position: Yup.string().required("Position is required"),
  work: Yup.string().required("Workplace is required"),
  reason: Yup.string()
    .min(10, "Reason must be at least 10 characters")
    .required("This field is required"),
});

export { initialValues, validationSchema };
