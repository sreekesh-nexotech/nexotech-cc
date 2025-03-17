import { NextApiRequest, NextApiResponse } from "next";
import { Pool } from "pg";

const pool = new Pool({
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "5432"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    if (req.method === "DELETE") {
        try {
            await pool.query("DELETE FROM leads WHERE id = $1", [id]);
            return res.status(200).json({ message: "Lead deleted successfully" });
        } catch (error) {
            console.error("Error deleting lead:", error);
            return res.status(500).json({ message: "Internal Server Error" });
        }
    }

    res.setHeader("Allow", ["DELETE"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
}