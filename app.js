// Simulating a Job Listings Database
const jobs = [
  {
    title: "Frontend Developer",
    company: "Tech Solutions",
    description: "Looking for a frontend developer skilled in React.js and JavaScript.",
    applyLink: "https://techsolutions.com/jobs/frontend-developer"
  },
  {
    title: "Backend Engineer",
    company: "Innovate Tech",
    description: "Backend engineer needed with Node.js and Express experience.",
    applyLink: "https://innovatetech.com/jobs/backend-engineer"
  },
  {
    title: "Data Scientist",
    company: "Data Corp",
    description: "Hiring a data scientist proficient in Python and machine learning.",
    applyLink: "https://datacorp.com/jobs/data-scientist"
  }
];

// Function to display jobs on the Jobs page
function displayJobs() {
  const jobListings = document.getElementById('job-listings');
  jobListings.innerHTML = ''; // Clear previous job listings

  jobs.forEach(job => {
    const jobDiv = document.createElement('div');
    jobDiv.innerHTML = `
      <h3>${job.title}</h3>
      <p><strong>Company:</strong> ${job.company}</p>
      <p>${job.description}</p>
      <a href="${job.applyLink}" target="_blank">Apply Now</a>
    `;
    jobListings.appendChild(jobDiv);
  });
}

// Job Search Functionality
function searchJobs() {
  const searchQuery = document.getElementById('search').value.toLowerCase();
  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchQuery) || 
    job.company.toLowerCase().includes(searchQuery) || 
    job.description.toLowerCase().includes(searchQuery)
  );

  const jobListings = document.getElementById('job-listings');
  jobListings.innerHTML = ''; // Clear previous job listings

  if (filteredJobs.length > 0) {
    filteredJobs.forEach(job => {
      const jobDiv = document.createElement('div');
      jobDiv.innerHTML = `
        <h3>${job.title}</h3>
        <p><strong>Company:</strong> ${job.company}</p>
        <p>${job.description}</p>
        <a href="${job.applyLink}" target="_blank">Apply Now</a>
      `;
      jobListings.appendChild(jobDiv);
    });
  } else {
    jobListings.innerHTML = '<p>No jobs found. Try a different search.</p>';
  }
}

// Registration Form Validation
function validateRegistrationForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!name || !email || !password) {
    alert("All fields are required for registration.");
    return false;
  }
  alert("Registration successful!");
  return true;
}

// Login Form Validation
function validateLoginForm() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  if (!email || !password) {
    alert("Both email and password are required for login.");
    return false;
  }
  alert("Login successful!");
  return true;
}

// Job Posting Form Validation
function validateJobPostForm() {
  const jobTitle = document.getElementById('job-title').value;
  const companyName = document.getElementById('company-name').value;
  const jobDescription = document.getElementById('job-description').value;
  const applyLink = document.getElementById('apply-link').value;

  if (!jobTitle || !companyName || !jobDescription || !applyLink) {
    alert("All fields are required to post a job.");
    return false;
  }

  // Simulate adding the job to the listings
  const newJob = {
    title: jobTitle,
    company: companyName,
    description: jobDescription,
    applyLink: applyLink
  };
  jobs.push(newJob);
  alert("Job posted successfully!");
  displayJobs();
  return true;
}

// Event Listeners for Form Submissions
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('job-listings')) {
    displayJobs();
  }

  // Attach form validations
  const registerForm = document.querySelector('#register form');
  if (registerForm) {
    registerForm.addEventListener('submit', (event) => {
      event.preventDefault();
      validateRegistrationForm();
    });
  }

  const loginForm = document.querySelector('#login form');
  if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();
      validateLoginForm();
    });
  }

  const postJobForm = document.querySelector('#post-job form');
  if (postJobForm) {
    postJobForm.addEventListener('submit', (event) => {
      event.preventDefault();
      validateJobPostForm();
    });
  }
});
