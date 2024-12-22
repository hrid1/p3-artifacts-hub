import React, { useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const MyArtifacts = () => {
  // Mock authenticated user
  const loggedInUser = {
    id: "user123",
    name: "John Doe",
    email: "john.doe@example.com",
  };

  const [artifacts, setArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate fetching user's artifacts
  useEffect(() => {
    const fetchMyArtifacts = async () => {
      // Simulated API response
      const mockData = [
        {
          id: 1,
          name: "Rosetta Stone",
          image: "https://via.placeholder.com/300",
          type: "Document",
          createdAt: "196 BC",
          userId: "user123", // Owned by logged-in user
        },
        {
          id: 2,
          name: "Dead Sea Scrolls",
          image: "https://via.placeholder.com/300",
          type: "Writings",
          createdAt: "300 BC",
          userId: "user123", // Owned by logged-in user
        },
        // Add more artifacts as needed
      ];

      // Filter data to show only artifacts added by the logged-in user
      const userArtifacts = mockData.filter(
        (artifact) => artifact.userId === loggedInUser.id
      );
      setArtifacts(userArtifacts);
      setLoading(false);
    };

    fetchMyArtifacts();
  }, [loggedInUser.id]);

  // Handle artifact deletion
  const handleDelete = (id) => {
    // Confirmation dialog
    if (window.confirm("Are you sure you want to delete this artifact?")) {
      setArtifacts((prev) => prev.filter((artifact) => artifact.id !== id));
      // Add logic to delete artifact from backend
    }
  };

  // Handle artifact update
  const handleUpdate = (id) => {
    console.log(`Redirect to update page for artifact ID: ${id}`);
    // Add navigation logic (e.g., redirect to update form page)
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  }

  return (
    <div className="py-12 px-6 bg-base-200">
      <h2 className="text-2xl font-bold text-center mb-6">My Artifacts</h2>

      {artifacts.length === 0 ? (
        <div className="text-center text-gray-700">
          <p>No artifacts added yet.</p>
          <p>Add your first artifact to see it here!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {artifacts.map((artifact) => (
            <div
              key={artifact.id}
              className="card w-80 bg-white shadow-md rounded-lg"
            >
              <img
                src={artifact.image}
                alt={artifact.name}
                className="h-48 w-full object-cover rounded-t-lg"
              />
              <div className="card-body">
                <h3 className="card-title text-lg font-bold">{artifact.name}</h3>
                <p className="text-sm text-gray-600">Type: {artifact.type}</p>
                <p className="text-sm text-gray-600">Created At: {artifact.createdAt}</p>
                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => handleUpdate(artifact.id)}
                    className="btn btn-sm btn-outline btn-primary flex items-center gap-2"
                  >
                    <FaEdit />
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(artifact.id)}
                    className="btn btn-sm btn-outline btn-error flex items-center gap-2"
                  >
                    <FaTrashAlt />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyArtifacts;
