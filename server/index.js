const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;
const DATA_FILE = path.join(__dirname, 'emails.json');

app.use(cors());
app.use(bodyParser.json());

// Initialize emails.json if it doesn't exist
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify([]));
}

app.post('/api/waitlist', (req, res) => {
  const { email } = req.body;
  
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Valid email is required' });
  }

  try {
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    const emails = JSON.parse(data);
    
    if (emails.includes(email)) {
      return res.status(200).json({ message: 'Email already in waitlist' });
    }

    emails.push(email);
    fs.writeFileSync(DATA_FILE, JSON.stringify(emails, null, 2));
    
    console.log(`New signup: ${email}`);
    res.status(201).json({ message: 'Successfully joined waitlist' });
  } catch (err) {
    console.error('Error saving email:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Endpoint to view emails (protected or internal only usually, but fine for now)
app.get('/api/waitlist', (req, res) => {
  try {
    const data = fs.readFileSync(DATA_FILE, 'utf8');
    const emails = JSON.parse(data);
    res.status(200).json(emails);
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
