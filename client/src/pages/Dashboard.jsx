import Navbar from "../components/Navbar";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";

import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="container dashboard">

        <div className="card shadow p-4 mb-4">

          <PostForm />

        </div>

        <div className="card shadow p-4">

          <PostList />

        </div>

      </div>
    </>
  );
}

export default Dashboard;