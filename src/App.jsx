import { useState } from "react";
import PersonalInfo from "./components/personalInfo";
import EducationalExperience from "./components/educationalExperience";
import PracticalExperience from "./components/practicalExperience";
import "./styles/App.css";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [educationalExperiences, setEducationalExperiences] = useState([]);
  const [practicalExperiences, setPracticalExperiences] = useState([]);

  return (
    <div className="App">
      <div className="sidebar">
        <h1>CV Builder</h1>
        <PersonalInfo data={personalInfo} setData={setPersonalInfo} />
        <EducationalExperience
          experiences={educationalExperiences}
          setExperiences={setEducationalExperiences}
        />
        <PracticalExperience
          experiences={practicalExperiences}
          setExperiences={setPracticalExperiences}
        />
      </div>

      <div className="preview">
        <h2>CV Preview</h2>
        <div className="cv-document">
          <div className="cv-section">
            <h1>{personalInfo.name || "Your Name"}</h1>
            <p>
              {personalInfo.email || "email@example.com"} |{" "}
              {personalInfo.phone || "(123) 456-7890"}
            </p>
          </div>

          <div className="cv-section">
            <h3>Education</h3>
            {educationalExperiences.length > 0 ? (
              educationalExperiences.map((exp, index) => (
                <div key={index} style={{ marginBottom: "1rem" }}>
                  <p>
                    <strong>{exp.schoolName}</strong>
                  </p>
                  <p>{exp.titleOfStudy}</p>
                  <p>{exp.dateOfStudy}</p>
                </div>
              ))
            ) : (
              <p>No education added yet</p>
            )}
          </div>

          <div className="cv-section">
            <h3>Experience</h3>
            {practicalExperiences.length > 0 ? (
              practicalExperiences.map((exp, index) => (
                <div key={index} style={{ marginBottom: "1rem" }}>
                  <p>
                    <strong>{exp.positionTitle}</strong>
                  </p>
                  <p>{exp.companyName}</p>
                  <p>
                    {exp.dateFrom} - {exp.dateUntil}
                  </p>
                  <p>{exp.mainResponsibilities}</p>
                </div>
              ))
            ) : (
              <p>No experience added yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
