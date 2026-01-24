import { useState } from "react";
import EducationalExperience from "./components/educationalExperience";
import Languages from "./components/languages";
import PersonalInfo from "./components/personalInfo";
import PracticalExperience from "./components/practicalExperience";
import Projects from "./components/projects";
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
  const [projects, setProjects] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const formatUrlForDisplay = (url) => {
    return url.replace(/^https?:\/\//, "");
  };

  const formatResponsibilities = (text) => {
    const lines = text.split("\n").filter((line) => line.trim());
    const hasListItems = lines.some((line) => line.trim().startsWith("-"));

    if (hasListItems) {
      return (
        <ul style={{ marginTop: "0.4rem" }}>
          {lines.map((line, i) => {
            const trimmedLine = line.trim();
            if (trimmedLine.startsWith("-")) {
              return (
                <li style={{ marginTop: "0.4rem" }} key={i}>
                  {trimmedLine.substring(1).trim()}
                </li>
              );
            } else if (trimmedLine) {
              return <li key={i}>{trimmedLine}</li>;
            }
            return null;
          })}
        </ul>
      );
    }

    // return <p style={{ whiteSpace: "pre-wrap", marginTop: "0.4rem" }}>{text}</p>;
    return <div>{text}</div>;
  };

  return (
    <div className="App">
      <button
        className="sidebar-toggle"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle sidebar"
      >
        ☰
      </button>

      {sidebarOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <button
        className="print-button"
        aria-label="Print Document"
        onClick={() => window.print()}
      >
        Print
      </button>
      <div className={`sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
        <PersonalInfo
          data={personalInfo}
          setData={setPersonalInfo}
          links={personalLinks}
          setLinks={setPersonalLinks}
        />
        <Skills skills={skills} setSkills={setSkills} />
        <Projects projects={projects} setProjects={setProjects}></Projects>
        <Languages languages={languages} setLanguages={setLanguages} />
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
        <div className="cv-document">
          <div className="cv-columns">
            <div className="cv-left-column">
              <div className="cv-section">
                <h1>{personalInfo.name || "Your Name"}</h1>
                <p>{personalInfo.email || "email@example.com"}</p>
                <p>{personalInfo.phone || "(123) 456-7890"}</p>
                <p>{personalInfo.location || "London, UK"}</p>
                {personalLinks.length > 0 ? (
                  <div style={{ marginTop: "0.5rem" }}>
                    {personalLinks.map((link, index) => (
                      <p key={index}>
                        <strong>{link.label}:</strong>{" "}
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {formatUrlForDisplay(link.url)}
                        </a>
                      </p>
                    ))}
                  </div>
                ) : (
                  <div style={{ marginTop: "0.5rem" }}>
                    <p>
                      <strong>GitHub:</strong>
                      <a
                        href="https://github.com/Vittv/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        github.com/Username/
                      </a>
                    </p>
                    <p>
                      <strong>LinkedIn:</strong>
                      <a
                        href="https://github.com/Vittv/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        linkedin.com/Username/
                      </a>
                    </p>
                    <p>
                      <strong>Portfolio:</strong>
                      <a
                        href="https://github.com/Vittv/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {" "}
                        yourportfolio.com/Username/
                      </a>
                    </p>
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
                  <ul>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>Node.js</li>
                    <li>CSS/Tailwind</li>
                    <li>Git</li>
                    <li>REST APIs</li>
                  </ul>
                )}
              </div>

              <div className="cv-section">
                <h3>Projects</h3>
                {projects.length > 0 ? (
                  <ul>
                    {projects.map((project, index) => (
                      <li key={index} style={{ marginBottom: "1rem" }}>
                        <strong>{project.projectName}</strong>
                        {project.projectLink && (
                          <a
                            href={project.projectLink}
                            display="block" // This helps with clicking and spacing
                            style={{
                              display: "block",
                              textDecoration: "none",
                            }}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {project.projectLink}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul>
                    <li>
                      <strong>Battleship</strong>
                    </li>
                    <a
                      href="https://github.com/Vittv/battleship"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://github.com/Vittv/battleship
                    </a>
                    <li style={{ marginTop: "1rem" }}>
                      <strong>Todo List</strong>
                    </li>
                    <a
                      href="https://github.com/Vittv/todo-list"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://github.com/Vittv/todo-list
                    </a>
                    <li style={{ marginTop: "1rem" }}>
                      <strong>CV Builder (we are here)</strong>
                    </li>
                    <a
                      href="https://github.com/Vittv/cv-application"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://github.com/Vittv/cv-application
                    </a>
                    <li style={{ marginTop: "1rem" }}>
                      <strong>Weather App</strong>
                    </li>
                    <a
                      href="https://github.com/Vittv/weather-app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://github.com/Vittv/weather-app
                    </a>
                    <li style={{ marginTop: "1rem" }}>
                      <strong>xivcli</strong>
                    </li>
                    <a
                      href="https://github.com/Vittv/xivcli"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      https://github.com/Vittv/xivcli
                    </a>
                  </ul>
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
                  <ul>
                    <li>English - Native</li>
                    <li>Portuguese - Native</li>
                    <li>Spanish - Intermediate</li>
                    <li>French - Intermediate</li>
                  </ul>
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
                        <h4>{exp.titleOfStudy}</h4>
                      </p>
                      <p style={{ fontWeight: 500 }}>{exp.schoolName}</p>
                      <p>{exp.dateOfStudy}</p>
                    </div>
                  ))
                ) : (
                  <div>
                    <div style={{ marginBottom: "1rem" }}>
                      <p>
                        <strong>Bachelor of Computer Science</strong>
                      </p>
                      <p style={{ fontWeight: 500 }}>
                        University of Technology
                      </p>
                      <p>2018-2022</p>
                    </div>
                    <div>
                      <p>
                        <strong>Full Stack Web Development Certificate</strong>
                      </p>
                      <p style={{ fontWeight: 500 }}>Online Coding Bootcamp</p>
                      <p>2021</p>
                    </div>
                  </div>
                )}
              </div>

              <div className="cv-section">
                <h3>Experience</h3>
                {practicalExperiences.length > 0 ? (
                  practicalExperiences.map((exp, index) => (
                    <div key={index} style={{ marginBottom: "2rem" }}>
                      <p>
                        <h4>{exp.positionTitle}</h4>
                      </p>
                      <p style={{ fontWeight: 500 }}>
                        {exp.companyName} ({exp.dateFrom} - {exp.dateUntil})
                      </p>
                      <p
                        style={{ whiteSpace: "pre-wrap", marginTop: "0.4rem" }}
                      >
                        {formatResponsibilities(exp.mainResponsibilities)}
                      </p>
                    </div>
                  ))
                ) : (
                  <div>
                    <div style={{ marginBottom: "2rem" }}>
                      <p>
                        <h4>Senior Frontend Developer</h4>
                      </p>
                      <p style={{ fontWeight: 500 }}>
                        Tech Solutions Inc. (Jan 2023 - Present)
                      </p>
                      {formatResponsibilities(
                        `- Led development of customer-facing web applications using React and TypeScript `,
                      )}
                      {formatResponsibilities(
                        `- Implemented responsive designs and improved accessibility compliance by 95%`,
                      )}
                      {formatResponsibilities(
                        `- Mentored team of 4 junior developers and conducted code reviews`,
                      )}
                    </div>
                    <div style={{ marginBottom: "2rem" }}>
                      <p>
                        <h4>Frontend Developer</h4>
                      </p>
                      <p style={{ fontWeight: 500 }}>
                        Digital Agency LLC (Jun 2021 - Dec 2022)
                      </p>
                      {formatResponsibilities(
                        `- Developed and maintained multiple client websites using React and Vue.js`,
                      )}
                      {formatResponsibilities(
                        `- Collaborated with designers to implement pixel-perfect UI components`,
                      )}
                      {formatResponsibilities(
                        `- Integrated REST APIs and managed state with Redux`,
                      )}
                    </div>
                    <div style={{ marginBottom: "2rem" }}>
                      <p>
                        <h4>Junior Web Developer</h4>
                      </p>
                      <p style={{ fontWeight: 500 }}>
                        StartUp Co. (Jan 2020 - May 2021)
                      </p>
                      {formatResponsibilities(
                        `- Built responsive landing pages and marketing websites`,
                      )}
                      {formatResponsibilities(
                        `- Fixed bugs and implemented new features based on user feedback`,
                      )}
                      {formatResponsibilities(
                        `- Worked with version control using Git and GitHub`,
                      )}
                    </div>
                  </div>
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
