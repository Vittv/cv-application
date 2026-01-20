import { useState } from "react";
import EducationalExperience from "./components/educationalExperience";
import Languages from "./components/languages";
import PersonalInfo from "./components/personalInfo";
import PracticalExperience from "./components/practicalExperience";
import Skills from "./components/skills";
import "./styles/App.css";
import "./styles/Sidebar.css";
import "./styles/Preview.css";

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [personalLinks, setPersonalLinks] = useState([]);
  const [educationalExperiences, setEducationalExperiences] = useState([]);
  const [practicalExperiences, setPracticalExperiences] = useState([]);
  const [skills, setSkills] = useState([]);
  const [languages, setLanguages] = useState([]);

  return (
    <div className="App">
      <div className="sidebar">
        <PersonalInfo
          data={personalInfo}
          setData={setPersonalInfo}
          links={personalLinks}
          setLinks={setPersonalLinks}
        />
        <EducationalExperience
          experiences={educationalExperiences}
          setExperiences={setEducationalExperiences}
        />
        <PracticalExperience
          experiences={practicalExperiences}
          setExperiences={setPracticalExperiences}
        />
        <Skills skills={skills} setSkills={setSkills} />
        <Languages languages={languages} setLanguages={setLanguages} />
      </div>

      <div className="preview">
        <div className="cv-document">
          <div className="cv-columns">
            <div className="cv-left-column">
              <div className="cv-section">
                <h1>{personalInfo.name || "Your Name"}</h1>
                <p>
                  {personalInfo.email || "email@example.com"} |{" "}
                  {personalInfo.phone || "(123) 456-7890"}
                </p>
                {personalLinks.length > 0 && (
                  <div style={{ marginTop: "0.5rem" }}>
                    {personalLinks.map((link, index) => (
                      <p key={index}>
                        <strong>{link.label}:</strong> {link.url}
                      </p>
                    ))}
                  </div>
                )}
              </div>

              <div className="cv-section">
                <h3>Skills</h3>
                {skills.length > 0 ? (
                  <ul>
                    {skills.map((skill, index) => (
                      <li key={index}>{skill.skillName}</li>
                    ))}
                  </ul>
                ) : (
                  <p>No skills added yet</p>
                )}
              </div>

              <div className="cv-section">
                <h3>Languages</h3>
                {languages.length > 0 ? (
                  <ul>
                    {languages.map((lang, index) => (
                      <li key={index}>
                        {lang.languageName}
                        {lang.proficiency && ` - ${lang.proficiency}`}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No languages added yet</p>
                )}
              </div>
            </div>

            <div className="cv-right-column">
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
      </div>
    </div>
  );
}

export default App;
