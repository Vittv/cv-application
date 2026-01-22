import { useRef, useState } from "react";

function Projects({ projects, setProjects }) {
  const [formData, setFormData] = useState({
    projectName: "",
    projectLink: "",
  });

  const inputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (formData.projectName) {
      setProjects([...projects, formData]);
      setFormData({
        projectName: "",
        projectLink: "",
      });
      // Focus back to input after adding
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  };

  const handleDelete = (index) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  const handleProjectChange = (index, field, value) => {
    const updatedProjects = projects.map((project, i) => {
      if (i === index) {
        return { ...project, [field]: value };
      }
      return project;
    });
    setProjects(updatedProjects);
  };

  return (
    <div style={{ marginBottom: "2rem" }} className="projects">
      <h2>Projects</h2>

      {projects.map((project, index) => (
        <div key={index} className="experience-item-form">
          <input
            type="text"
            name="projectName"
            value={project.projectName}
            onChange={(e) =>
              handleProjectChange(index, "projectName", e.target.value)
            }
            placeholder="Project Name"
          />
          <input
            type="text"
            name="projectLink"
            value={project.projectLink}
            onChange={(e) =>
              handleProjectChange(index, "projectLink", e.target.value)
            }
            placeholder="Project Link (optional)"
          />
          <button
            type="button"
            onClick={() => handleDelete(index)}
            className="delete-btn"
          >
            -
          </button>
        </div>
      ))}

      <form onSubmit={handleAdd}>
        <div>
          <label htmlFor="projectName">Project Name</label>
          <input
            ref={inputRef}
            type="text"
            id="projectName"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="projectLink">Project Link</label>
          <input
            type="text"
            id="projectLink"
            name="projectLink"
            value={formData.projectLink}
            onChange={handleChange}
            placeholder="e.g., https://github.com/username/project"
          />
        </div>
        <button type="submit" className="add-btn">
          +
        </button>
      </form>
    </div>
  );
}

export default Projects;
