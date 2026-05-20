import { useState } from "react";

function AddUser() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobilenumber: "",
    dateofbirth: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    // Name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    // Mobile
    const mobileRegex = /^[6-9]\d{9}$/;
    if (!formData.mobilenumber) {
      newErrors.mobilenumber = "Mobile number is required";
    } else if (!mobileRegex.test(formData.mobilenumber)) {
      newErrors.mobilenumber =
        "Mobile must start with 6-9 and be 10 digits";
    }

    // DOB
    if (!formData.dateofbirth) {
      newErrors.dateofbirth = "Date of birth is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      const res = await fetch("http://localhost:4000/user-api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("User added successfully!");

        setFormData({
          name: "",
          email: "",
          mobilenumber: "",
          dateofbirth: "",
        });

        setErrors({});
      } else {
        alert("Failed to add user");
      }
    } catch (error) {
      console.log(error);
      alert("Server error");
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center py-10">

      <h1 className="text-3xl font-bold mb-8">Add User</h1>

      <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-xl p-6">

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}
          <div>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md"
            />
            {errors.name && (
              <p className="text-red-400 text-sm">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md"
            />
            {errors.email && (
              <p className="text-red-400 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Mobile */}
          <div>
            <input
              name="mobilenumber"
              value={formData.mobilenumber}
              onChange={handleChange}
              placeholder="Mobile Number"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md"
            />
            {errors.mobilenumber && (
              <p className="text-red-400 text-sm">
                {errors.mobilenumber}
              </p>
            )}
          </div>

          {/* DOB */}
          <div>
            <input
              name="dateofbirth"
              value={formData.dateofbirth}
              onChange={handleChange}
              type="date"
              className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md"
            />
            {errors.dateofbirth && (
              <p className="text-red-400 text-sm">
                {errors.dateofbirth}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-md font-semibold"
          >
            Add User
          </button>

        </form>
      </div>
    </div>
  );
}

export default AddUser;