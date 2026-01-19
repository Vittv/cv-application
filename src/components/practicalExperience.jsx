import { useState } from "react";

function PracticalExperience({ experiences, setExperiences }) {
  const [formData, setFormData] = useState({
    companyName: "",
    positionTitle: "",
    mainResponsibilities: "",
    dateFrom: "",
    dateUntil: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAdd = () => {
    if (formData.companyName && formData.positionTitle) {
      setExperiences([...experiences, formData]);
      // Clear the form
      setFormData({
        companyName: "",
        positionTitle: "",
        mainResponsibilities: "",
        dateFrom: "",
        dateUntil: "",
      });
    }
  };

  const handleDelete = (index) => {
    setExperiences(experiences.filter((_, i) => i !== index));
  };

  return (
    <div className="practical-experience">
      <h2>Practical Experience</h2>

      {experiences.map((exp, index) => (
        <div key={index} className="experience-item">
          <p>
            <strong>{exp.positionTitle}</strong> at {exp.companyName}
          </p>
          <button onClick={() => handleDelete(index)} className="delete-btn">
            Delete
          </button>
        </div>
      ))}

      <form>
        <div>
          <label htmlFor="companyName">Company Name:</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="positionTitle">Position Title:</label>
          <input
            type="text"
            id="positionTitle"
            name="positionTitle"
            value={formData.positionTitle}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="mainResponsibilities">Main Responsibilities:</label>
          <textarea
            id="mainResponsibilities"
            name="mainResponsibilities"
            value={formData.mainResponsibilities}
            onChange={handleChange}
            rows="4"
          />
        </div>

        <div>
          <label htmlFor="dateFrom">Date From:</label>
          <input
            type="text"
            id="dateFrom"
            name="dateFrom"
            value={formData.dateFrom}
            onChange={handleChange}
            placeholder="e.g., Jan 2020"
          />
        </div>

        <div>
          <label htmlFor="dateUntil">Date Until:</label>
          <input
            type="text"
            id="dateUntil"
            name="dateUntil"
            value={formData.dateUntil}
            onChange={handleChange}
            placeholder="e.g., Dec 2022 or Present"
          />
        </div>

        <button type="button" onClick={handleAdd} className="add-btn">
          Add Experience
        </button>
      </form>
    </div>
  );
}

export default PracticalExperience;
