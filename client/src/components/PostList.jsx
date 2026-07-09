import { useEffect, useState } from "react";
import API from "../services/api";

function PostList() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {

      const res = await API.get("/posts");

      setPosts(res.data);

    } catch (err) {

      console.log(err);

    }
  };

  return (

    <>

      <h3 className="mb-4">
        📋 Published Posts
      </h3>

      {posts.length === 0 ? (

        <p>No Posts Found</p>

      ) : (

        posts.map((post) => (

          <div
            key={post._id}
            className="card mb-3 shadow-sm"
          >

            <div className="card-body">

              <h4 className="card-title">

                {post.title}

              </h4>

              <p className="card-text">

                {post.content}

              </p>

              <span className="badge bg-primary me-2">

                {post.platforms.join(", ")}

              </span>

              <br />
              <br />

              <small className="text-muted">

                Posted by {post.user?.username}

              </small>

              <br />

              <small className="text-muted">

                {new Date(post.createdAt).toLocaleString()}

              </small>

            </div>

          </div>

        ))

      )}

    </>

  );
}

export default PostList;