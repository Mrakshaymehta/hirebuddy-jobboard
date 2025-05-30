require('dotenv').config();
const express = require('express');
const multer = require('multer');
const fs = require('fs');
const pdfParse = require('pdf-parse');
const { OpenAI } = require('openai');

const router = express.Router();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('resume'), async (req, res) => {
  try {
    const filePath = req.file.path;
    const fileBuffer = fs.readFileSync(filePath);

    const parsed = await pdfParse(fileBuffer);
    const text = parsed.text;

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are an expert HR. Predict the most suitable job role based on resume text.'
        },
        {
          role: 'user',
          content: text
        }
      ]
    });

    const role = response.choices[0].message.content.trim();
    res.json({ predictedRole: role });
  } catch (err) {
    console.error('Prediction error:', err);
    res.status(500).json({ error: 'Prediction failed' });
  }
});

module.exports = router;