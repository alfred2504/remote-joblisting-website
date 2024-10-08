const apiEndpoint = "https://remoteok.com/api"; // Example API endpoint

// Fetch job listings from API
async function fetchJobListings(query = '', category = 'all') {
    try {
        let response = await fetch(apiEndpoint);
        let jobs = await response.json();
        displayJobs(jobs, query, category);
    } catch (error) {
        console.error("Error fetching job listings:", error);
    }
}

// Display job listings
function displayJobs(jobs, query, category) {
    const jobListingsSection = document.getElementById('job-listings');
    jobListingsSection.innerHTML = ''; // Clear previous listings

    const filteredJobs = jobs.filter(job => {
        const matchesQuery = job.title.toLowerCase().includes(query.toLowerCase());
        const matchesCategory = category === 'all' || job.category === category;
        return matchesQuery && matchesCategory;
    });

    filteredJobs.forEach(job => {
        const jobDiv = document.createElement('div');
        jobDiv.className = 'job';
        jobDiv.innerHTML = `
            <h3>${job.title}</h3>
            <p>${job.company}</p>
            <p>${job.description.substring(0, 100)}...</p>
        `;

        // Set up click event to open job modal
        jobDiv.addEventListener('click', () => {
            openJobModal(job);
        });

        jobListingsSection.appendChild(jobDiv);
    });
}

// Open job modal
function openJobModal(job) {
    document.getElementById('job-title').innerText = job.title;
    document.getElementById('job-description').innerText = job.description;
    document.getElementById('job-apply-link').href = job.url;

    document.getElementById('job-modal').style.display = 'block';
}

// Close job modal
document.querySelector('.close-btn').addEventListener('click', () => {
    document.getElementById('job-modal').style.display = 'none';
});

// Handle form submission
document.getElementById('job-search-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const query = document.getElementById('search-query').value;
    const category = document.getElementById('job-category').value;
    fetchJobListings(query, category);
});

// Fetch jobs on page load
window.onload = fetchJobListings;
