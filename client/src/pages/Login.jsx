import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
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
      const res = await API.post("/auth/login", form);

      localStorage.setItem("token", res.data.token);

      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="container-fluid vh-100">

      <div className="row h-100">

        <div className="col-md-6 d-none d-md-flex bg-primary text-white justify-content-center align-items-center">

          <div className="text-center px-5">
            <h1 className="fw-bold">Social Post Composer</h1>

            <p className="mt-3">
              Create posts for multiple platforms with live validation.
            </p>
          </div>

        </div>

        <div className="col-md-6 d-flex justify-content-center align-items-center bg-light">

          <div
            className="bg-white p-5 shadow rounded-4"
            style={{ width: "400px" }}
          >
            <h3 className="mb-4 text-center">Login</h3>

            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label>Email</label>

                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter Email"
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-4">
                <label>Password</label>

                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter Password"
                  onChange={handleChange}
                  required
                />
              </div>

              <button className="btn btn-primary w-100">
                Login
              </button>

            </form>

            <p className="text-center mt-4">
              Don't have an account?
              <Link to="/register"> Register</Link>
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;