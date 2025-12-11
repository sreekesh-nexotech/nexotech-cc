import { NextApiRequest, NextApiResponse } from "next";
import * as jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key-change-in-production";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Set security headers
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("Content-Type", "application/json");

  if (req.method === "POST") {
    try {
      // Clear the authentication cookie
      res.setHeader("Set-Cookie", [
        `auth_token=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0`,
      ]);

      // Log logout event (server-side only)
      const token = req.cookies.auth_token;
      if (token) {
        try {
          const decoded = jwt.verify(token, JWT_SECRET) as { email: string };
          console.log(
            `User ${decoded.email} logged out at ${new Date().toISOString()}`
          );
        } catch (err) {
          // Token invalid or expired, just log logout
          console.log(`Logout request at ${new Date().toISOString()}`);
        }
      }

      return res.status(200).json({
        success: true,
        message: "Logout successful",
      });
    } catch (error) {
      console.error("Error during logout:", error);
      return res.status(500).json({
        success: false,
        message: "An error occurred during logout. Please try again later.",
      });
    }
  }

  // Handle unsupported methods
  res.setHeader("Allow", ["POST"]);
  return res.status(405).json({
    success: false,
    message: `Method ${req.method} Not Allowed`,
  });
}
