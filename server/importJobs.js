const fs = require('fs');
const readline = require('readline');
const mongoose = require('mongoose');
require('dotenv').config();
const Job = require('./models/Job');

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    importJobs(); // run import only after DB connects
  })
  .catch(err => console.error("❌ MongoDB connection error:", err));

async function importJobs() {
  const fileStream = fs.createReadStream('./all_jobs_2025-05-22.jsonl');
  const rl = readline.createInterface({ input: fileStream });

  const jobs = [];

  rl.on('line', (line) => {
    try {
      const job = JSON.parse(line);
      jobs.push(job); // store in memory
    } catch (err) {
      console.error("❌ JSON parse error:", err.message);
    }
  });

  rl.on('close', async () => {
    try {
      const result = await Job.insertMany(jobs);
      console.log(`✅ Successfully imported ${result.length} jobs`);
    } catch (err) {
      console.error("❌ Import failed:", err.message);
    } finally {
      await mongoose.disconnect();
      console.log("🔌 MongoDB disconnected");
    }
  });
}