const FormField = ({
  label,
  name,
  type = "text",
  formik,
  placeholder,
  as = "input",
  options,
}) => {
  const Component = as;
  return (
    <div className={`${as === "textarea" ? "lg:col-span-2" : ""}`}>
      <label className="block text-gray-700 font-medium mb-2">{label}</label>
      {as === "select" ? (
        <Component
          name={name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[name]}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
            formik.touched[name] && formik.errors[name]
              ? "border-red-500"
              : "border-gray-300"
          }`}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </Component>
      ) : (
        <Component
          type={type}
          name={name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values[name]}
          placeholder={placeholder}
          className={`w-full px-4 py-2 border rounded-lg focus:outline-none ${
            formik.touched[name] && formik.errors[name]
              ? "border-red-500"
              : "border-gray-300"
          }`}
          {...(as === "textarea" ? { rows: 4 } : {})}
        />
      )}
      {formik.touched[name] && formik.errors[name] ? (
        <p className="text-red-500 text-sm mt-1">{formik.errors[name]}</p>
      ) : null}
    </div>
  );
};

export default FormField;
