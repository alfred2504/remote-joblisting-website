// Example function to search for jobs (this would later connect to the API)
function searchJobs() {
  const searchTerm = document.getElementById('search').value;
  
  // Simulate API call and display search term
  document.getElementById('job-listings').innerHTML = `<p>Showing results for: <strong>${searchTerm}</strong></p>`;
  
  // API call would go here
}
