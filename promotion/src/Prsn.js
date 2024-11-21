import React, { useState } from "react";

const Person = () => {
  const [message, setMessage] = useState("");
  const [jobTitle, setJobTitle] = useState("Software Engineer"); 
  const [isPromoted, setIsPromoted] = useState(false);

  const person = {
    name: "John Doe",
    jobTitle: jobTitle,
    company: "TechCorp",
    age: 30,
    location: "San Francisco",
    hobbies: ["Reading", "Cycling", "Traveling"],
  };

  const handleClick = () => {
    setMessage("Congratulations on your promotion!");
    setJobTitle("Senior Software Engineer");
    setIsPromoted(true);
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

      {message && <p style={{ color: "green", fontWeight: "bold" }}>{message}</p>}
      <button onClick={handleClick}>{isPromoted ? "Promote" : "Click Me"}</button>
    </div>
  );
};

export default Person;
