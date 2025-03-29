# Women Job Finder Pro

Women Job Finder is a web application designed to connect women graduates with job opportunities. The app fetches job listings from a public API and allows users to apply for jobs directly through the platform.

# Features

**Job Listings:** Display available jobs based on search queries.
**Application Form:** Allow users to submit applications for job opportunities.
**Public API Integration:** Fetch real job data using the JSearch API from RapidAPI.

# Technologies Used

**Frontend:** HTML, CSS, JavaScript
**Backend:** Python (Flask) for API integration (if needed)
**API:** [JSearch API on RapidAPI](https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch)
**Deployment:** (Local testing, with potential deployment on web servers)

# Installation

**Clone the repository:**

# For a frontend-only version:

Simply open the index.html file in your browser.

# Running the Application Locally

Frontend Only:
Open index.html directly in your browser. Search for the job you want to apply and The app will display available jobs (from a local simulated API or real API if configured) and allow you to apply for jobs.

API Usage
The application uses the JSearch API to fetch job listings.

Example API Request
Endpoint:

perl
Copy
Edit
https://jsearch.p.rapidapi.com/search?query=Software%20Engineer&location=Rwanda&page=1
Required Headers:

X-RapidAPI-Key: your_api_key_here

X-RapidAPI-Host: jsearch.p.rapidapi.com

How the API is Integrated
Frontend (JavaScript):
JavaScript's fetch() is used to send requests to a backend endpoint (if using Flask) or directly to the API.

# Deployment

To deploy the application:

Choose a hosting service (e.g., GitHub Pages).

Follow the respective service's instructions for deploying static files or Python apps.

Update API URLs and configuration as needed for production.

# Challenges and Solutions

API Rate Limits:
Free API plans often have rate limits. To overcome this, caching responses or optimizing request usage can help.

CORS Issues:
If you face CORS errors when calling the API directly from the frontend, consider routing requests through your Python backend to handle them.

# Credits

API: JSearch API by RapidAPI

Frontend: Developed using HTML, CSS, and JavaScript

Backend (optional): Developed using Python and Flask

Special thanks to all open-source libraries and resources that helped in the development of this project.

# Contributing
If you'd like to contribute, please fork the repository and submit a pull request with your changes.
