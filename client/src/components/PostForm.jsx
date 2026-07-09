import { useState } from "react";
import API from "../services/api";

function PostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [platforms, setPlatforms] = useState([]);

  const limits = {
    Twitter: 280,
    LinkedIn: 3000,
    Instagram: 2200,
    Facebook: 63206,
  };

  const handlePlatformChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setPlatforms([...platforms, value]);
    } else {
      setPlatforms(platforms.filter((p) => p !== value));
    }
  };

  const handlePublish = async () => {
    // Basic Validation
    if (!title || !content || platforms.length === 0) {
      alert("Please fill all fields and select at least one platform.");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      await API.post(
        "/posts",
        {
          title,
          content,
          platforms,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("✅ Post Published Successfully!");
      window.location.reload();
      // Clear form after successful publish
      setTitle("");
      setContent("");
      setPlatforms([]);
    } catch (error) {
      alert(error.response?.data?.message || "Failed to Publish");
    }
  };

 return (
  <div>

    <h3 className="mb-4">
      Create New Post
    </h3>

    <div className="mb-3">

      <label className="form-label">
        Title
      </label>

      <input
        className="form-control"
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

    </div>

    <div className="mb-3">

      <label className="form-label">
        Post
      </label>

      <textarea
        className="form-control"
        rows="5"
        placeholder="Write your post..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

    </div>

    <div className="mb-3">

      <h5>Select Platforms</h5>

      <div className="form-check">

        <input
          className="form-check-input"
          type="checkbox"
          value="Twitter"
          checked={platforms.includes("Twitter")}
          onChange={handlePlatformChange}
        />

        <label className="form-check-label">
          Twitter
        </label>

      </div>

      <div className="form-check">

        <input
          className="form-check-input"
          type="checkbox"
          value="LinkedIn"
          checked={platforms.includes("LinkedIn")}
          onChange={handlePlatformChange}
        />

        <label className="form-check-label">
          LinkedIn
        </label>

      </div>

      <div className="form-check">

        <input
          className="form-check-input"
          type="checkbox"
          value="Instagram"
          checked={platforms.includes("Instagram")}
          onChange={handlePlatformChange}
        />

        <label className="form-check-label">
          Instagram
        </label>

      </div>

      <div className="form-check">

        <input
          className="form-check-input"
          type="checkbox"
          value="Facebook"
          checked={platforms.includes("Facebook")}
          onChange={handlePlatformChange}
        />

        <label className="form-check-label">
          Facebook
        </label>

      </div>

    </div>

    <div className="mb-3">

      <strong>
        Characters: {content.length}
      </strong>

    </div>

    <div className="mb-4">

      <h5>Validation</h5>

      {platforms.map((platform) => (
        <p
          key={platform}
          className={
            content.length <= limits[platform]
              ? "validation-success"
              : "validation-error"
          }
        >
          {content.length <= limits[platform]
            ? `✅ ${platform} (${content.length}/${limits[platform]})`
            : `❌ ${platform} Limit Exceeded (${content.length}/${limits[platform]})`}
        </p>
      ))}

    </div>

    <button
      className="btn btn-primary w-100"
      onClick={handlePublish}
    >
      Publish Post
    </button>

  </div>
);
}

export default PostForm;