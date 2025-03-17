import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { email, password } = req.body;

      console.log("Received request body:", { email, password });

      // Validate credentials (replace with your actual logic)
      if (email === "test@example.com" && password === "test123") {
        console.log("Login successful");

        // Generate a simple token
        const token = Math.random().toString(36).substring(2);

        // Send token in response (no cookies)
        return res.status(200).json({ message: "Login successful", token });
      } else {
        console.log("Invalid email or password");
        return res.status(401).json({ message: "Invalid email or password" });
      }
    } catch (error) {
      console.error("Error during login:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  console.log(`Method ${req.method} Not Allowed`);
  res.setHeader("Allow", ["POST"]);
  return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
}
