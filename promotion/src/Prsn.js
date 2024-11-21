import React from "react";

const Person = () => {
  const person = {
    name: "John Doe",
    jobTitle: "Software Engineer",
    company: "TechCorp",
    age: 30,
    location: "San Francisco",
    hobbies: ["Reading", "Cycling", "Traveling"],
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h2>Person Information</h2>
      <p><strong>Name:</strong> {person.name}</p>
      <p><strong>Job Title:</strong> {person.jobTitle}</p>
      <p><strong>Company:</strong> {person.company}</p>
      <p><strong>Age:</strong> {person.age}</p>
      <p><strong>Location:</strong> {person.location}</p>
      <p><strong>Hobbies:</strong> {person.hobbies.join(", ")}</p>
    </div>
  );
};

export default Person;
