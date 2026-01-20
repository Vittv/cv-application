import { useState } from "react";

function Skills({ skills, setSkills }) {
  const [formData, setFormData] = useState({
    skillName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (formData.skillName) {
      setSkills([...skills, formData]);
      setFormData({
        skillName: "",
      });
    }
  };

  const handleDelete = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const handleSkillChange = (index, field, value) => {
    const updatedSkills = skills.map((skill, i) => {
      if (i === index) {
        return { ...skill, [field]: value };
      }
      return skill;
    });
    setSkills(updatedSkills);
  };

  return (
    <div className="skills">
      <h2>Skills</h2>

      {skills.map((skill, index) => (
        <div key={index} className="experience-item-form">
          <input
            type="text"
            name="skillName"
            value={skill.skillName}
            onChange={(e) =>
              handleSkillChange(index, "skillName", e.target.value)
            }
            placeholder="Skill"
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
          <label htmlFor="skillName">Skill</label>
          <input
            type="text"
            id="skillName"
            name="skillName"
            value={formData.skillName}
            onChange={handleChange}
          />
        </div>
        <button type="submit" onClick={handleAdd} className="add-btn">
          +
        </button>
      </form>
    </div>
  );
}

export default Skills;
