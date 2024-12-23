import React, { useContext, useEffect, useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const MyArtifacts = () => {
  const { user } = useContext(AuthContext);
  const [artifacts, setArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserArtifacts = async () => {
      const { data } = await axios(
        `http://localhost:5000/artifacts/${user?.email}`
      );
      setArtifacts(data);
      setLoading(false);
    };

    fetchUserArtifacts();
  }, [user.email]);

  // Handle artifact deletion
  const handleDelete = (id) => {
    // Confirmation dialog

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const { data } = await axios.delete(
            `http://localhost:5000/artifact/${id}`
          );
          // console.log(data);
          if (data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            // remove from ui
            const filterArtifacts = artifacts.filter((artifact) => artifact._id !== id);
            setArtifacts(filterArtifacts);
            // setArtifacts((prev) => prev.filter((artifact) => artifact._id !== id))
          }
        } catch (error) {
          toast.error("Error Occur!");
          // console.log(error);
        }
      }
    });
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
              key={artifact._id}
              className="card bg-white shadow-md rounded-lg"
            >
              <img
                src={artifact.image}
                alt={artifact.name}
                className="h-48 w-full object-cover rounded-t-lg"
              />
              <div className="card-body">
                <h3 className="card-title text-lg font-bold">
                  {artifact.name}
                </h3>
                <p className="text-sm text-gray-600">Type: {artifact.type}</p>
                <p className="text-sm text-gray-600">
                  Created At: {artifact.createdAt}
                </p>
                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => handleUpdate(artifact.id)}
                    className="btn btn-sm btn-outline btn-primary flex items-center gap-2"
                  >
                    <FaEdit />
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(artifact._id)}
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
