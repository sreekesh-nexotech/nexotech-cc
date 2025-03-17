import { NextApiRequest, NextApiResponse } from "next";
import { Pool } from "pg";

// Database configuration
const pool = new Pool({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432"),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// Create the leads table if it doesn't exist
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS leads (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    email VARCHAR(255) NOT NULL,
    company VARCHAR(255),
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

// Initialize the table
pool.query(createTableQuery)
  .then(() => console.log("Leads table created or already exists"))
  .catch((err) => console.error("Error creating leads table:", err));

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, phone, email, company } = req.body;

    // Validate required fields
    if (!name || !email) {
      return res.status(400).json({ message: "Name and email are required" });
    }

    try {
      // Insert the new lead into the database
      const insertQuery = `
        INSERT INTO leads (name, phone, email, company)
        VALUES ($1, $2, $3, $4)
        RETURNING *;
      `;
      const values = [name, phone, email, company];

      const result = await pool.query(insertQuery, values);

      // Send success response
      return res.status(201).json({ message: "Lead saved successfully", lead: result.rows[0] });
    } catch (error) {
      console.error("Error saving lead to database:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  // Handle unsupported methods
  res.setHeader("Allow", ["POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}