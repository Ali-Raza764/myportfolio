"use client";
import { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

const CreateProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [imageFile, setImageFile] = useState(null);

  const handleAddProject = (e) => {
    e.preventDefault();
    const newProject = {
      name: e.target.name.value,
      repoUrl: e.target.repoUrl.value,
      technologiesUsed: e.target.technologiesUsed.value,
      description: e.target.description.value,
      liveUrl: e.target.liveUrl.value,
      image: imageFile ? URL.createObjectURL(imageFile) : null,
    };

    setProjects([...projects, newProject]);
    e.target.reset(); // Clear form after submission
    setImageFile(null);
    setShowForm(false);
  };

  const handleImageUpload = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleDeleteProject = (index) => {
    const updatedProjects = projects.filter((_, i) => i !== index);
    setProjects(updatedProjects);
  };

  return (
    <div className="min-h-screen w-full p-8 bg-black text-white">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Create Projects</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center hover:bg-green-600 transition-colors"
        >
          <FaPlus className="mr-2" /> Add Project
        </button>
      </div>

      {/* Display list of projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-md relative">
            <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
            {project.image && (
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 object-cover rounded-md mb-2"
              />
            )}
            <p>
              <strong>Repo URL:</strong>{" "}
              <a href={project.repoUrl} className="text-blue-400">
                {project.repoUrl}
              </a>
            </p>
            <p>
              <strong>Live URL:</strong>{" "}
              <a href={project.liveUrl} className="text-blue-400">
                {project.liveUrl}
              </a>
            </p>
            <p>
              <strong>Technologies Used:</strong> {project.technologiesUsed}
            </p>
            <p>
              <strong>Description:</strong> {project.description}
            </p>

            {/* Delete Button */}
            <button
              onClick={() => handleDeleteProject(index)}
              className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>

      {/* Form to add a new project */}
      {showForm && (
        <div className="fixed w-full h-full top-0 left-0 flex items-center justify-center bg-black bg-opacity-50">
          <form
            onSubmit={handleAddProject}
            className="bg-gray-800 p-6 rounded-md w-[30rem] space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Project Name"
              className="bg-gray-900 text-white p-2 rounded-md w-full"
              required
            />
            <input
              type="url"
              name="repoUrl"
              placeholder="Repository URL"
              className="bg-gray-900 text-white p-2 rounded-md w-full"
              required
            />
            <input
              type="url"
              name="liveUrl"
              placeholder="Live URL"
              className="bg-gray-900 text-white p-2 rounded-md w-full"
              required
            />
            <textarea
              name="technologiesUsed"
              placeholder="Technologies Used"
              className="bg-gray-900 text-white p-2 rounded-md w-full"
              required
            />
            <textarea
              name="description"
              placeholder="Project Description"
              className="bg-gray-900 text-white p-2 rounded-md w-full"
              required
            />
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageUpload}
              className="text-white"
            />

            <div className="flex items-center justify-between mt-4">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                Add Project
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default CreateProjectsPage;
