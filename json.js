// Sample JSON resume object

const resume = {
  "name": "Jagadeeswarasurya",
  "contact": {
    "email": "jagadeeswarasuryaj@example.com",
    "phone": "+1234567890",
    "address": "123 Main St, Coimbatore, India"
  },
  "summary": "Experienced software engineer with a passion for building scalable web applications.",
  "education": [
    {
      "degree": "Bachelor of Engineering",
      "institution": "University XYZ",
      "graduation_year": "2018"
    }
  ],
  "experience": [
    {
      "title": "Web Developer",
      "company": "Tech Company",
      "location": "Coimbatore, Tamilnadu",
      "start_date": "2013",
      "end_date": "Present",
      "responsibilities": [
        "Developed and maintained web applications using JavaScript, HTML, and CSS.",
        "Collaborated with cross-functional teams to design and implement new features.",
        "Optimized application performance to handle large-scale data processing."
      ]
    }
  ],
  "skills": [
    "JavaScript",
    "HTML",
    "CSS",
    "Node.js",
    "React",
    "SQL",
    "Git"
  ]
};

// Using for loop
console.log("Using for loop:");
for (let key in resume) {
  console.log(key + ": " + JSON.stringify(resume[key]));
}

// Using for...in loop
console.log("\nUsing for...in loop:");
for (let key in resume) {
  if (resume.hasOwnProperty(key)) {
    console.log(key + ": " + JSON.stringify(resume[key]));
  }
}

// Using for...of loop (for arrays)
console.log("\nUsing for...of loop:");
for (let section of Object.entries(resume)) {
  console.log(section[0] + ": " + JSON.stringify(section[1]));
}

// Using forEach (for arrays)
console.log("\nUsing forEach:");
Object.entries(resume).forEach(([key, value]) => {
  console.log(key + ": " + JSON.stringify(value));
});