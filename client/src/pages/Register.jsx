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

    <div className="container-fluid vh-100">

      <div className="row h-100">

        <div className="col-md-5 bg-dark text-white d-none d-md-flex justify-content-center align-items-center">

          <div className="px-5">

            <h1 className="fw-bold">
              Join Us
            </h1>

            <p className="mt-3">
              Start composing social media posts with a clean and simple dashboard.
            </p>

          </div>

        </div>

        <div className="col-md-7 d-flex justify-content-center align-items-center bg-light">

          <div
            className="bg-white shadow rounded-4 p-5"
            style={{ width: "430px" }}
          >

            <h3 className="text-center mb-4">
              Create Account
            </h3>

            <form onSubmit={handleSubmit}>

              <div className="mb-3">

                <label>Username</label>

                <input
                  className="form-control"
                  type="text"
                  name="username"
                  placeholder="Username"
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
                  placeholder="Email"
                  onChange={handleChange}
                  required
                />

              </div>

              <div className="mb-4">

                <label>Password</label>

                <input
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  required
                />

              </div>

              <button className="btn btn-success w-100">
                Create Account
              </button>

            </form>

            <p className="text-center mt-4">

              Already have an account?

              <Link to="/"> Login</Link>

            </p>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Register;