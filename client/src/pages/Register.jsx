import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await API.post("/auth/register", form);

      alert(res.data.message);

      navigate("/");

    } catch (error) {

      alert(error.response?.data?.message || "Registration Failed");

    }

  };

  return (

    <div className="container d-flex justify-content-center align-items-center vh-100">

      <div className="card shadow p-4" style={{ width: "420px", borderRadius: "15px" }}>

        <h2 className="text-center mb-4">
          📱 Social Post Composer
        </h2>

        <h4 className="text-center mb-4">
          Register
        </h4>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">

            <label>Username</label>

            <input
              className="form-control"
              type="text"
              name="username"
              placeholder="Enter Username"
              onChange={handleChange}
              required
            />

          </div>

          <div className="mb-3">

            <label>Email</label>

            <input
              className="form-control"
              type="email"
              name="email"
              placeholder="Enter Email"
              onChange={handleChange}
              required
            />

          </div>

          <div className="mb-3">

            <label>Password</label>

            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={handleChange}
              required
            />

          </div>

          <button className="btn btn-success w-100">
            Register
          </button>

        </form>

        <p className="text-center mt-3">

          Already have an account?

          <Link to="/"> Login</Link>

        </p>

      </div>

    </div>

  );
}

export default Register;