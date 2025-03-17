import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, phone, email, company } = req.body;

    // Ensure the directory exists
    const filePath = path.join(process.cwd(), "data", "leads.json");
    const dirPath = path.dirname(filePath);

    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    // Read existing leads (if any)
    let leads = [];
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf8");
      leads = fileContent ? JSON.parse(fileContent) : [];
    }

    // Add the new lead
    const newLead = { name, phone, email, company, timestamp: new Date() };
    leads.push(newLead);

    // Save the leads back to the file
    fs.writeFileSync(filePath, JSON.stringify(leads, null, 2));

    // Send success response
    return res.status(200).json({ message: "Lead saved successfully" });
  }

  // Handle unsupported methods
  res.setHeader("Allow", ["POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
