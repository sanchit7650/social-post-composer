import Navbar from "../components/Navbar";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";

import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="dashboard-container">

        <div className="dashboard-header">
          <div>
            <h2>Welcome 👋</h2>
            <p>Create and manage social media posts.</p>
          </div>
        </div>

        <div className="dashboard-grid">

          <div className="dashboard-card">
            <h4>Create New Post</h4>
            <PostForm />
          </div>

          <div className="dashboard-card">
            <h4>Recent Posts</h4>
            <PostList />
          </div>

        </div>

      </div>
    </>
  );
}

export default Dashboard;