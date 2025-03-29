const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const cors = require('cors'); // Add cors middleware
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API route to fetch jobs
app.post('/api/jobs', async (req, res) => {
    const { query, location } = req.body;

    if (!query) {
        return res.status(400).json({ error: 'Job query is required' });
    }

    try {
        // Construct URL with query parameters
        const apiUrl = new URL('https://findwork.dev/api/jobs/');
        apiUrl.searchParams.append('search', query);
        if (location) {
            apiUrl.searchParams.append('location', location);
        }

        console.log('Requesting URL:', apiUrl.toString());
        console.log('API Key:', process.env.FINDWORK_API_KEY ? 'Present' : 'Missing');

        // Fetch from the API
        const apiResponse = await fetch(apiUrl.toString(), {
            method: 'GET',
            headers: {
                'Authorization': `Token ${process.env.FINDWORK_API_KEY}`,
                'Accept': 'application/json'
            }
        });

        console.log('API Response Status:', apiResponse.status);

        // Handle different response scenarios
        if (apiResponse.status === 401) {
            return res.status(401).json({ 
                error: 'Authentication failed', 
                message: 'Invalid or expired API key' 
            });
        }

        if (!apiResponse.ok) {
            const errorText = await apiResponse.text();
            console.error('API Error Response:', errorText);
            return res.status(apiResponse.status).json({ 
                error: 'Failed to fetch job results',
                details: errorText
            });
        }

        // Parse and return the job data
        const data = await apiResponse.json();
        res.json(data);
    } catch (error) {
        console.error('Server-side error:', error);
        res.status(500).json({ 
            error: 'Unable to fetch jobs', 
            details: error.message 
        });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});