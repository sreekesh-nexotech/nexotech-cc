import { NextApiRequest, NextApiResponse } from "next";
import { Pool } from "pg";

const pool = new Pool({
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "5432"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    ssl: process.env.DB_SSL === "true" ? { rejectUnauthorized: false } : false
});

// Create learning content table if it doesn't exist
const createTablesQuery = `
  CREATE TABLE IF NOT EXISTS learning_content (
    id SERIAL PRIMARY KEY,
    display_order INTEGER NOT NULL,
    url VARCHAR(512) NOT NULL,
    category VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // Initialize table
    try {
        await pool.query(createTablesQuery);
        console.log("Learning content table verified");
    } catch (err) {
        console.error("Error initializing table:", err);
    }

    if (req.method === "GET") {
        try {
            const result = await pool.query(`
                SELECT 
                    id,
                    display_order,
                    url,
                    COALESCE(category, 'Uncategorized') as category,
                    created_at as timestamp
                FROM learning_content
                ORDER BY category, display_order
            `);
            
            // Add debug logging
            console.log("Fetched videos:", result.rows.length);
            
            return res.status(200).json(result.rows);
        } catch (error) {
            console.error("Database error:", error);
            return res.status(500).json({ 
                message: "Internal Server Error",
                error: error instanceof Error ? error.message : "Unknown error"
            });
        }
    }

    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
}