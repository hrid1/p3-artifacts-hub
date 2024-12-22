import React, { useState } from "react";

const AddArtifact = () => {
  const [artifact, setArtifact] = useState({
    name: "",
    image: "",
    type: "",
    context: "",
    createdAt: "",
    discoveredAt: "",
    discoveredBy: "",
    location: "",
  });

  // Mock authenticated user
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArtifact({ ...artifact, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Artifact:", { ...artifact, addedBy: user });
    // Add form submission logic here (e.g., send to API)
  };

  return (
    <div className="py-12 px-6 bg-base-100">
      <h2 className="text-2xl font-bold text-center mb-6">Add an Artifact</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-4xl mx-auto bg-amber-50 shadow-md rounded-lg p-6"
      >
        <div className="mb-4">
          <label className="label">
            <span className="label-text">Artifact Name</span>
          </label>
          <input
            type="text"
            name="name"
            value={artifact.name}
            onChange={handleChange}
            placeholder="Enter Artifact Name"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label className="label">
            <span className="label-text">Artifact Image (URL)</span>
          </label>
          <input
            type="url"
            name="image"
            value={artifact.image}
            onChange={handleChange}
            placeholder="Enter a valid image URL"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="label">
              <span className="label-text">Artifact Type</span>
            </label>
            <select
              name="type"
              value={artifact.type}
              onChange={handleChange}
              className="select select-bordered w-full"
              required
            >
              <option value="" disabled>
                Select Artifact Type
              </option>
              <option value="Tools">Tools</option>
              <option value="Weapons">Weapons</option>
              <option value="Documents">Documents</option>
              <option value="Writings">Writings</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="label">
              <span className="label-text">Discovered By</span>
            </label>
            <input
              type="text"
              name="discoveredBy"
              value={artifact.discoveredBy}
              onChange={handleChange}
              placeholder="Enter discoverer's name"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="label">
            <span className="label-text">Historical Context</span>
          </label>
          <textarea
            name="context"
            value={artifact.context}
            onChange={handleChange}
            placeholder="Describe the historical context"
            className="textarea textarea-bordered w-full"
            rows="3"
            required
          ></textarea>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="label">
              <span className="label-text">Created At</span>
            </label>
            <input
              type="text"
              name="createdAt"
              value={artifact.createdAt}
              onChange={handleChange}
              placeholder="e.g., 100 BC"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label className="label">
              <span className="label-text">Discovered At</span>
            </label>
            <input
              type="text"
              name="discoveredAt"
              value={artifact.discoveredAt}
              onChange={handleChange}
              placeholder="e.g., 1799"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="label">
            <span className="label-text">Present Location</span>
          </label>
          <input
            type="text"
            name="location"
            value={artifact.location}
            onChange={handleChange}
            placeholder="Enter present location"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="mb-6">
          <label className="label">
            <span className="label-text">Artifact Adder</span>
          </label>
          <input
            type="text"
            value={user.name}
            className="input input-bordered w-full bg-gray-100"
            readOnly
          />
          <input
            type="email"
            value={user.email}
            className="input input-bordered w-full bg-gray-100 mt-2"
            readOnly
          />
        </div>

        <button type="submit" className="btn bg-amber-400 mx-auto block w-4/5">
          Add Artifact
        </button>
      </form>
    </div>
  );
};

export default AddArtifact;
