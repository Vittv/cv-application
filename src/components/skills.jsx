import { useRef, useState } from "react";

function Skills({ skills, setSkills }) {
  const [formData, setFormData] = useState({
    skillName: "",
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
    if (formData.skillName) {
      setSkills([...skills, formData]);
      setFormData({
        skillName: "",
      });
      // Focus back to input after adding
      setTimeout(() => inputRef.current?.focus(), 0);
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
    <div style={{ marginBottom: "2rem" }} className="skills">
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
            ref={inputRef}
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
