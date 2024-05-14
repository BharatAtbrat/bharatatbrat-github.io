document.getElementById('addJobForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const jobName = document.getElementById('jobName').value;
    const company = document.getElementById('company').value;
    const city = document.getElementById('city').value;
    const jobType = document.getElementById('jobType').value;
    const dueDate = document.getElementById('dueDate').value;
    const link = document.getElementById('link').value;

    const jobListing = {
        jobName,
        company,
        city,
        jobType,
        dueDate,
        link
    };
    let listings = JSON.parse(sessionStorage.getItem('sessionJobListings')) || [];

    listings.push(jobListing);

    sessionStorage.setItem('sessionJobListings', JSON.stringify(listings));

    document.getElementById('addJobForm').reset();
});
