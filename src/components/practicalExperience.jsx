import { useRef, useState } from "react";

function PracticalExperience({ experiences, setExperiences }) {
  const [formData, setFormData] = useState({
    companyName: "",
    positionTitle: "",
    mainResponsibilities: "",
    dateFrom: "",
    dateUntil: "",
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
    if (formData.companyName && formData.positionTitle) {
      setExperiences([...experiences, formData]);
      setFormData({
        companyName: "",
        positionTitle: "",
        mainResponsibilities: "",
        dateFrom: "",
        dateUntil: "",
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
    <div className="practical-experience">
      <h2>Practical Experience</h2>

      {experiences.map((exp, index) => (
        <div key={index} className="experience-item-form">
          <input
            type="text"
            name="companyName"
            value={exp.companyName}
            onChange={(e) =>
              handleExperienceChange(index, "companyName", e.target.value)
            }
            placeholder="Company Name"
          />
          <input
            type="text"
            name="positionTitle"
            value={exp.positionTitle}
            onChange={(e) =>
              handleExperienceChange(index, "positionTitle", e.target.value)
            }
            placeholder="Position Title"
          />
          <textarea
            name="mainResponsibilities"
            value={exp.mainResponsibilities}
            onChange={(e) =>
              handleExperienceChange(
                index,
                "mainResponsibilities",
                e.target.value,
              )
            }
            rows="4"
            placeholder="Main Responsibilities"
          />
          <input
            type="text"
            name="dateFrom"
            value={exp.dateFrom}
            onChange={(e) =>
              handleExperienceChange(index, "dateFrom", e.target.value)
            }
            placeholder="Date From (e.g., Jan 2020)"
          />
          <input
            type="text"
            name="dateUntil"
            value={exp.dateUntil}
            onChange={(e) =>
              handleExperienceChange(index, "dateUntil", e.target.value)
            }
            placeholder="Date Until (e.g., Dec 2022 or Present)"
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
          <label htmlFor="companyName">Company Name</label>
          <input
            ref={inputRef}
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="positionTitle">Position Title</label>
          <input
            type="text"
            id="positionTitle"
            name="positionTitle"
            value={formData.positionTitle}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="mainResponsibilities">Main Responsibilities</label>
          <textarea
            id="mainResponsibilities"
            name="mainResponsibilities"
            value={formData.mainResponsibilities}
            onChange={handleChange}
            rows="4"
          />
        </div>
        <div>
          <label htmlFor="dateFrom">Date From</label>
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
          <label htmlFor="dateUntil">Date Until</label>
          <input
            type="text"
            id="dateUntil"
            name="dateUntil"
            value={formData.dateUntil}
            onChange={handleChange}
            placeholder="e.g., Dec 2022 or Present"
          />
        </div>
        <button type="submit" onClick={handleAdd} className="add-btn">
          +
        </button>
      </form>
    </div>
  );
}

export default PracticalExperience;
