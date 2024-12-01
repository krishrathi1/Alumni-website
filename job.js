function submitApplication(event) {
    event.preventDefault();

    // Get form values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const coverLetter = document.getElementById('coverLetter').value;
    const resume = document.getElementById('resume').files[0].name; // Just get the file name for the alert

    // Display the application details in an alert (this can be replaced with actual submission logic)
    alert(`Application submitted!\n\nName: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nCover Letter: ${coverLetter}\nResume: ${resume}`);

    // Clear form
    document.getElementById('jobApplicationForm').reset();
}
async function renderPage() {
    try {
        const response = await fetch('.job.json');
        console.log(response.url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json('job.json');
        console.log(data);
    } catch (error) {
        console.error("Failed to fetch data:", error);
    }
}

renderPage();