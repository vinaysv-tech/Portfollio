const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Route to serve the main portfolio page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Also serve index.html for any other routes to maintain single-page app functionality
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API endpoint for contact form (simulated)
app.post('/api/contact', express.json(), (req, res) => {
    // In a real implementation, you would process the contact form data here
    // For now, we'll just simulate a successful response
    console.log('Contact form submitted:', req.body);
    res.json({ success: true, message: 'Message received successfully!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Portfolio server is running on http://localhost:${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});