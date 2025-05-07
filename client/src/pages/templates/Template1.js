import React from "react";
import '../../resources/templates.css'

function Template1() {
    const user = JSON.parse(localStorage.getItem('logged-user'))
    return (
        <div className="template1-parent">
            <div className="top d-flex justify-content-between">
                <h1>{user.firstName} {user.lastName}</h1>
                <div>
                    <p>{user.email}</p>
                    <p>{user.address}</p>
                    <p>{user.phoneNumber}</p>
                </div>
            </div>
            <div className="divider mt-5"></div>
            <div className="objective mt-5">
                <h3>Objective</h3>
                <hr />
                <p>{user.carrierGoal}</p>
            </div>
            <div className="divider mt-5"></div>
            <div className="education mt-5">
                <h3>Education</h3>
                <hr />
                {user.education.map((education) => {
                    return (<div className="d-flex align-items-center">
                        <h6 style={{ width: 120 }}><b>{education.yearofStudy} :</b></h6>
                        <p>{education.course} in <b>{education.educationName}</b></p>
                    </div>
                    );
                })}
            </div>
            <div className="divider mt-5"></div>
            <div className="experience mt-5">
                <h3>Experience</h3>
                <hr />
                {user.experience.map((experience) => {
                    return (<div className="d-flex align-items-center">
                        <h6 style={{ width: 120 }}><b>{experience.yearsofWork}:</b></h6>
                        <p>{experience.companyName} in <b>{experience.country}</b></p>
                    </div>
                    );
                })}
            </div>
            <div className="divider mt-5"></div>
            <div className="projects mt-5">
                <h3>Projects</h3>
                <hr />
                {user.projects.map((project) => {
                    return (<div className="d-flex flex-column">
                        <h6>
                            <b>{project.projectName} [{project.yearsofwork}] {" "}</b>
                        </h6>
                        <p>{project.description}</p>
                    </div>
                    );
                })}
            </div>
            <div className="divider mt-5"></div>
            <div className="skills mt-5">
                <h3>Skills</h3>
                <hr />
                {user.skills.map((skill) => {
                    return (<div className="d-flex flex-column">
                        <h6>
                            <b>{skill.skills} {skill.score} {" "}</b>
                        </h6>
                    </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Template1;