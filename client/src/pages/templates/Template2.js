import React from "react";
import "../../resources/templates.css";

const Template2 = () => {
  const user = JSON.parse(localStorage.getItem("logged-user"));

  return (
    <div className="template1-parent">
      <div className="d-flex flex-column align-items-center text-center mb-4">
        <h1>{user.firstName.toUpperCase()} {user.lastName.toUpperCase()}</h1>
        <div className="d-flex flex-row justify-content-center flex-wrap gap-3">
          <p>{user.email}</p>
          <p>{user.mobileNumber}</p>
          <p>{user.address}</p>
        </div>
      </div>

      <div className="divider mt-4 mb-4" style={dividerStyle}></div>

      <div className="education">
        <h3>Education</h3>
        <hr />
        {user.education.map((education, index) => (
          <div key={index} className="d-flex mb-1">
            <h6 style={{ minWidth: "160px" }}>
              <b>{education.yearofStudy}:</b>
            </h6>
            <p>
              <b>{education.course}</b> in {education.educationName}
            </p>
          </div>
        ))}
      </div>

      <div className="divider mt-4 mb-4" style={dividerStyle}></div>

      <div className="experience">
        <h3>Experience</h3>
        <hr />
        {user.experience.map((exp, index) => (
          <div key={index} className="mb-2">
            <div className="d-flex justify-content-between">
              <b>{exp.companyName}</b>
              <b>{exp.yearsofWork}</b>
            </div>
            <p>{exp.country}</p>
          </div>
        ))}
      </div>

      <div className="divider mt-4 mb-4" style={dividerStyle}></div>

      <div className="projects">
        <h3>Projects</h3>
        <hr />
        {user.projects.map((project, index) => (
          <div key={index} className="mb-2">
            <div className="d-flex justify-content-between">
              <b>{project.projectName}</b>
              <b>{project.yearsofwork}</b>
            </div>
            <p>{project.description}</p>
          </div>
        ))}
      </div>

      <div className="divider mt-4 mb-4" style={dividerStyle}></div>

      <div className="skills">
        <h3>Skills</h3>
        <hr />
        <div className="d-flex flex-wrap gap-3">
          {user.skills.map((skill, index) => (
            <p key={index}><b>{skill.skills}</b> {skill.score}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

const dividerStyle = {
  borderTop: "2px solid #ccc",
  width: "100%",
};

export default Template2;
