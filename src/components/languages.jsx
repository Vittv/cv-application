import { useState } from "react";

function Languages({ languages, setLanguages }) {
  const [formData, setFormData] = useState({
    languageName: "",
    proficiency: "",
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
    if (formData.languageName) {
      setLanguages([...languages, formData]);
      setFormData({
        languageName: "",
        proficiency: "",
      });
    }
  };

  const handleDelete = (index) => {
    setLanguages(languages.filter((_, i) => i !== index));
  };

  const handleLanguageChange = (index, field, value) => {
    const updatedLanguages = languages.map((lang, i) => {
      if (i === index) {
        return { ...lang, [field]: value };
      }
      return lang;
    });
    setLanguages(updatedLanguages);
  };

  return (
    <div className="languages">
      <h2>Languages</h2>

      {languages.map((lang, index) => (
        <div key={index} className="experience-item-form">
          <input
            type="text"
            name="languageName"
            value={lang.languageName}
            onChange={(e) =>
              handleLanguageChange(index, "languageName", e.target.value)
            }
            placeholder="Language"
          />
          <input
            type="text"
            name="proficiency"
            value={lang.proficiency}
            onChange={(e) =>
              handleLanguageChange(index, "proficiency", e.target.value)
            }
            placeholder="Proficiency (e.g., Native, Fluent, Intermediate)"
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
          <label htmlFor="languageName">Language</label>
          <input
            type="text"
            id="languageName"
            name="languageName"
            value={formData.languageName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="proficiency">Proficiency</label>
          <input
            type="text"
            id="proficiency"
            name="proficiency"
            value={formData.proficiency}
            onChange={handleChange}
            placeholder="e.g., Native, Fluent, Intermediate"
          />
        </div>
        <button type="submit" onClick={handleAdd} className="add-btn">
          +
        </button>
      </form>
    </div>
  );
}

export default Languages;
