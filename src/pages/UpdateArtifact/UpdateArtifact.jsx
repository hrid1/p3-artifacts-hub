// import React from 'react';

import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateArtifact = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [artifact, setArtifact] = useState("");
  //   load artifact data
  useEffect(() => {
    const fetchArtifact = async () => {
      try {
        const { data } = await axios(`http://localhost:5000/artifact/${id}`);
        console.log(data);
        setArtifact(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchArtifact();
  }, [id]);

  //   update artifact
  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const type = form.type.value;
    const location = form.location.value;
    const context = form.context.value;
    const createdAt = form.createdAt.value;
    const discoveredAt = form.discoveredAt.value;
    const discoveredBy = form.discoveredBy.value;
    // update date
    const updateData = {
      name,
      image,
      type,
      location,
      context,
      createdAt,
      discoveredAt,
      discoveredBy,
      addedBy: artifact.addedBy,
      like: artifact.like,
    };
    // send to the server
    try {
      const { data } = await axios.put(
        `http://localhost:5000/artifact/${artifact._id}`,
        updateData
      );
      console.log(data);
      if (data.modifiedCount) {
        // form.reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Artifact Update Successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/my-artifacts");
      }
    } catch (error) {
      //   console.log(error);
    }

    // console.log(updateData);
  };

  return (
    <div className="py-12 px-6 bg-base-100">
      <Helmet>
        <title>Update Artifacts | Artifact Atlas</title>
      </Helmet>

      <h2 className="text-2xl font-bold text-center mb-6">Add an Artifact</h2>
      <form
        onSubmit={handleUpdate}
        className="max-w-4xl mx-auto bg-amber-50 shadow-md rounded-lg p-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="label">
              <span className="label-text">Artifact Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={artifact.name}
              // onChange={handleChange}
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
              defaultValue={artifact.image}
              // onChange={handleChange}
              placeholder="Enter a valid image URL"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label className="label">
              <span className="label-text">Artifact Type</span>
            </label>
            <select
              name="type"
              defaultValue={artifact.type}
              // onChange={handleChange}
              className="select select-bordered w-full"
              required
            >
              <option defaultValue="" disabled>
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
              defaultValue={artifact.discoveredBy}
              // onChange={handleChange}
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
            defaultValue={artifact.context}
            // onChange={handleChange}
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
              defaultValue={artifact.createdAt}
              // onChange={handleChange}
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
              defaultValue={artifact.discoveredAt}
              // onChange={handleChange}
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
            defaultValue={artifact.location}
            // onChange={handleChange}
            placeholder="Enter present location"
            className="input input-bordered w-full"
            required
          />
        </div>

        <button type="submit" className="btn bg-amber-300 mx-auto block w-4/5">
          Update Artifact
        </button>
      </form>
    </div>
  );
};

export default UpdateArtifact;
