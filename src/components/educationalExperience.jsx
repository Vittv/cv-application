import { useState } from "react";

function EducationalExperience({ experiences, setExperiences }) {
  const [formData, setFormData] = useState({
    schoolName: "",
    titleOfStudy: "",
    dateOfStudy: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAdd = () => {
    if (formData.schoolName && formData.titleOfStudy) {
      setExperiences([...experiences, formData]);
      setFormData({
        schoolName: "",
        titleOfStudy: "",
        dateOfStudy: "",
      });
    }
  };

  const handleDelete = (index) => {
    setExperiences(experiences.filter((_, i) => i !== index));
  };

  return (
    <div className="educational-experience">
      <h2>Educational Experience</h2>

      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <p>
            <strong>{exp.schoolName}</strong> - {exp.titleOfStudy}
          </p>
          <button onClick={() => handleDelete(index)} className="delete-btn">
            Delete
          </button>
        </div>
      ))}

      <form>
        <div>
          <label htmlFor="schoolName">School Name:</label>
          <input
            type="text"
            id="schoolName"
            name="schoolName"
            value={formData.schoolName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="titleOfStudy">Title of Study:</label>
          <input
            type="text"
            id="titleOfStudy"
            name="titleOfStudy"
            value={formData.titleOfStudy}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="dateOfStudy">Date of Study:</label>
          <input
            type="text"
            id="dateOfStudy"
            name="dateOfStudy"
            value={formData.dateOfStudy}
            onChange={handleChange}
            placeholder="e.g., 2018-2022"
          />
        </div>

        <button type="button" onClick={handleAdd} className="add-btn">
          Add Education
        </button>
      </form>
    </div>
  );
}

export default EducationalExperience;
