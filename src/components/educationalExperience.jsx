import { useRef, useState } from "react";

function EducationalExperience({ experiences, setExperiences }) {
  const [formData, setFormData] = useState({
    schoolName: "",
    titleOfStudy: "",
    dateOfStudy: "",
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
    if (formData.schoolName && formData.titleOfStudy) {
      setExperiences([...experiences, formData]);
      setFormData({
        schoolName: "",
        titleOfStudy: "",
        dateOfStudy: "",
      });
      // Focus back to input after adding
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  };

  const handleDelete = (index) => {
    setExperiences(experiences.filter((_, i) => i !== index));
  };

  const handleExperienceChange = (index, field, value) => {
    const updatedExperiences = experiences.map((exp, i) => {
      if (i === index) {
        return { ...exp, [field]: value };
      }
      return exp;
    });
    setExperiences(updatedExperiences);
  };

  return (
    <div className="educational-experience">
      <h2>Educational Experience</h2>

      {experiences.map((exp, index) => (
        <div key={index} className="experience-item-form">
          <input
            type="text"
            name="schoolName"
            value={exp.schoolName}
            onChange={(e) =>
              handleExperienceChange(index, "schoolName", e.target.value)
            }
            placeholder="School Name"
          />
          <input
            type="text"
            name="titleOfStudy"
            value={exp.titleOfStudy}
            onChange={(e) =>
              handleExperienceChange(index, "titleOfStudy", e.target.value)
            }
            placeholder="Title of Study"
          />
          <input
            type="text"
            name="dateOfStudy"
            value={exp.dateOfStudy}
            onChange={(e) =>
              handleExperienceChange(index, "dateOfStudy", e.target.value)
            }
            placeholder="Date of Study (e.g., 2018-2022)"
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

      <form>
        <div>
          <label htmlFor="schoolName">School Name</label>
          <input
            ref={inputRef}
            type="text"
            id="schoolName"
            name="schoolName"
            value={formData.schoolName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="titleOfStudy">Title of Study</label>
          <input
            type="text"
            id="titleOfStudy"
            name="titleOfStudy"
            value={formData.titleOfStudy}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="dateOfStudy">Date of Study</label>
          <input
            type="text"
            id="dateOfStudy"
            name="dateOfStudy"
            value={formData.dateOfStudy}
            onChange={handleChange}
            placeholder="e.g., 2018-2022"
          />
        </div>
        <button type="submit" onClick={handleAdd} className="add-btn">
          +
        </button>
      </form>
    </div>
  );
}

export default EducationalExperience;
