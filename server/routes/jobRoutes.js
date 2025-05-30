const express = require('express');
const multer = require('multer');
const fs = require('fs');
const { OpenAI } = require('openai');
const router = express.Router();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Multer setup
const upload = multer({ dest: 'uploads/' });

router.post('/predict', upload.single('resume'), async (req, res) => {
  try {
    const filePath = req.file.path;
    const resumeText = fs.readFileSync(filePath, 'utf8');

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are an expert HR who analyzes resumes and predicts the most suitable job role.',
        },
        {
          role: 'user',
          content: `Based on this resume, what is the best-fit job role?\n\n${resumeText}`,
        },
      ],
    });

    const prediction = completion.choices[0].message.content;
    res.json({ role: prediction });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Prediction failed' });
  }
});

module.exports = router;