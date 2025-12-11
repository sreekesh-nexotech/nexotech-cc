import { NextApiRequest, NextApiResponse } from "next";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { validateLoginForm } from "../../lib/validation";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key-change-in-production";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "office@nexotech.cc";
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH || "";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Set security headers
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("Content-Type", "application/json");

  if (req.method === "POST") {
    try {
      const { email, password } = req.body;

      // Validate input
      const validation = validateLoginForm({ email, password });

      if (!validation.isValid) {
        return res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: validation.errors,
        });
      }

      const { email: validatedEmail, password: validatedPassword } = validation.sanitized!;

      // Check if admin credentials are configured
      if (!ADMIN_EMAIL || !ADMIN_PASSWORD_HASH) {
        console.error("Admin credentials not configured in environment");
        return res.status(500).json({
          success: false,
          message: "Server configuration error. Please contact support.",
        });
      }

      // Check email matches admin email
      if (validatedEmail !== ADMIN_EMAIL) {
        // Generic response to prevent email enumeration
        return res.status(401).json({
          success: false,
          message: "Invalid email or password",
        });
      }

      // Verify password against hash
      // For now, compare with hash (if you want to use bcryptjs hashing in future, update ADMIN_PASSWORD_HASH)
      const isValidPassword = await bcrypt.compare(validatedPassword, ADMIN_PASSWORD_HASH);

      if (!isValidPassword) {
        // Generic response to prevent email enumeration
        return res.status(401).json({
          success: false,
          message: "Invalid email or password",
        });
      }

      // Generate JWT token
      const token = jwt.sign(
        { email: validatedEmail, type: "admin" },
        JWT_SECRET,
        { expiresIn: "24h" }
      );

      // Set secure HTTP-only cookie
      res.setHeader("Set-Cookie", [
        `auth_token=${token}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=86400`,
      ]);

      // Log successful authentication (server-side only)
      console.log(`Successful login attempt for ${validatedEmail} at ${new Date().toISOString()}`);

      return res.status(200).json({
        success: true,
        message: "Login successful",
        token,
      });
    } catch (error) {
      console.error("Error during login:", error);
      return res.status(500).json({
        success: false,
        message: "An error occurred during login. Please try again later.",
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
