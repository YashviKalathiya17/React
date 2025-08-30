import { useState } from "react";
import { addStudent } from "../services/service";

const Form = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    stream: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Form Submitted Successfully!");
    addStudent(formData).then(() => {
      alert("Student added successfully!");
    });

    setFormData({ fname: "", lname: "", stream: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white shadow-md rounded p-6 mt-10"
    >
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
        Student Form
      </h2>

      <input
        type="text"
        name="fname"
        placeholder="Enter your First name"
        value={formData.fname}
        onChange={handleChange}
        className="w-full border p-2 mb-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="text"
        name="lname"
        placeholder="Enter your Last name"
        value={formData.lname}
        onChange={handleChange}
        className="w-full border p-2 mb-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="text"
        name="stream"
        placeholder="Enter your Stream"
        rows="4"
        value={formData.stream}
        onChange={handleChange}
        className="w-full border p-2 mb-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;