"use client";
import { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleAddSkill = () => {
    if (newSkill) {
      setSkills([...skills, newSkill]);
      setNewSkill("");
      setShowForm(false);
    }
  };

  const handleDeleteSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };

  return (
    <div className="min-h-screen w-full p-8 bg-black text-white">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Create Skills</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-green-500 text-white px-4 py-2 rounded-md flex items-center hover:bg-green-600 transition-colors"
        >
          <FaPlus className="mr-2" /> Add Skill
        </button>
      </div>

      <div className="mb-4 text-xl">
        <span>Total Skills: </span>
        <span className="font-semibold">{skills.length}</span>
      </div>

      {/* Form to add new skill */}
      {showForm && (
        <div className="fixed w-full h-full top-0 left-0 flex items-center justify-center bg-black bg-opacity-50">
          <form
            className="mb-6 bg-gray-800 rounded-md w-[20rem] p-6"
            onSubmit={handleAddSkill}
          >
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              placeholder="Enter skill"
              className="bg-gray-900 text-white p-2 rounded-md w-full mb-2 outline-none"
            />
            <div className="flex items-center justify-between mt-4">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                type="submit"
              >
                Add Skill
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
                onClick={() => setShowForm(false)}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Display existing skills */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-800 p-4 rounded-md flex justify-between items-center"
          >
            <span>{skill}</span>
            <button
              onClick={() => handleDeleteSkill(index)}
              className="bg-red-500 text-white p-2 rounded-md hover:bg-red-600 transition-colors"
            >
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
