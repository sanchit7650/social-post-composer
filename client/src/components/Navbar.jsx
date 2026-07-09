import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-dark bg-primary mb-4">
      <div className="container">

        <span className="navbar-brand fw-bold">
          📱 Social Post Composer
        </span>

        <button
          className="btn btn-light"
          onClick={logout}
        >
          Logout
        </button>

      </div>
    </nav>
  );
}

export default Navbar;