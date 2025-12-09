
// === ExperienceList.js ===
import React from "react";

export default function ExperienceList() {
  const experiences = [
    { title: "Fully functional E-commerce", company: "Currently Building a Full Functional E-commerce using React & Laravel", year: "2025" },
    { title: "3rd-Year BS computer science At Pamantasan ng Cabuyao", company: "Currently learning Application Development & System Designs", year: "2025" },
    { title: "First FrontEnd E-commerce", company: "Build my first E-commerce website", year: "2024" },
    { title: "2nd-Year BS computer science At Pamantasan ng Cabuyao", company: "Finished Object Oriented Programming & Data Structures", year: "2024" },
    { title: "Java Swing", company: "Build my first car parking system with J-Swing GUI", year: "2023" },
    { title: "1st-Year BS computer science At Pamantasan ng Cabuyao", company: "Finished Introduction to Programming & Web Technologies", year: "2023" },
    { title: "Front End", company: "Build my first portfolio webisite", year: "2022" },
    { title: "Senior High School At Saint mattew montessori & Science High School", company: "Graduated with honors", year: "2022" },
    { title: "Hello World! 👋", company: "Wrote my first line of code", year: "2021" },
    { title: "High School Grade 7-10", company: "Graduated At mattew montessori & Science High School", year: "2017 - 2020" },
    { title: "Elementary Grade 1-6", company: "Graduated At mattew montessori & Science High School", year: "2011 - 2017" },
  ];

  return (
    <div className="card experience-section">
      <h2 className="section-title">
        <span className="briefcase-icon">📌</span> Experience & Education
      </h2>

      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <div className="exp-header">
              <h3 className="exp-title">{exp.title}</h3>
              <span className="exp-year">{exp.year}</span>
            </div>
            <p className="exp-company">{exp.company}</p>
            <div className={`exp-dot exp-dot-${index % 3}`}></div>
          </div>
        ))}
      </div>
    </div>
  );
}
