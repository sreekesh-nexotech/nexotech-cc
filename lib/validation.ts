/**
 * Input Validation & Sanitization Utilities
 * Provides secure validation for all user inputs
 */

export interface ValidationError {
  field: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
  sanitized?: Record<string, any>;
}

// Email validation
export function validateEmail(email: string): boolean {
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return emailRegex.test(email) && email.length <= 255;
}

// Name validation (letters, spaces, hyphens, apostrophes only)
export function validateName(name: string, minLength: number = 2, maxLength: number = 255): boolean {
  const nameRegex = /^[a-zA-Z\s\-']+$/;
  return name.length >= minLength && name.length <= maxLength && nameRegex.test(name);
}

// Phone validation
export function validatePhone(phone: string): boolean {
  const phoneRegex = /^[\d\s\-+()]{7,20}$/;
  return phoneRegex.test(phone);
}

// Password validation (at least 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char)
export function validatePassword(password: string): boolean {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}

// Company name validation
export function validateCompany(company: string): boolean {
  return company.length >= 2 && company.length <= 255 && /^[a-zA-Z0-9\s\-&.,()]+$/.test(company);
}

// Message validation
export function validateMessage(message: string, maxLength: number = 5000): boolean {
  return message.length >= 10 && message.length <= maxLength;
}

// URL validation
export function validateUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

// Sanitize string input
export function sanitizeString(input: string, maxLength: number = 255): string {
  if (typeof input !== 'string') {
    return '';
  }
  return input
    .trim()
    .substring(0, maxLength)
    .replace(/[<>\"'&]/g, (char) => {
      const escapeMap: Record<string, string> = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '&': '&amp;',
      };
      return escapeMap[char];
    });
}

// Sanitize email
export function sanitizeEmail(email: string): string {
  return email.toLowerCase().trim().substring(0, 255);
}

// Sanitize phone
export function sanitizePhone(phone: string): string {
  return phone.trim().substring(0, 20);
}

// Lead form validation
export function validateLeadForm(data: any): ValidationResult {
  const errors: ValidationError[] = [];

  // Validate name
  if (!data.name || data.name.trim().length === 0) {
    errors.push({ field: 'name', message: 'Name is required' });
  } else if (!validateName(data.name)) {
    errors.push({ field: 'name', message: 'Name must be 2-255 characters and contain only letters, spaces, hyphens, and apostrophes' });
  }

  // Validate email
  if (!data.email || data.email.trim().length === 0) {
    errors.push({ field: 'email', message: 'Email is required' });
  } else if (!validateEmail(data.email)) {
    errors.push({ field: 'email', message: 'Invalid email format' });
  }

  // Validate phone (optional but if provided, must be valid)
  if (data.phone && data.phone.trim().length > 0) {
    if (!validatePhone(data.phone)) {
      errors.push({ field: 'phone', message: 'Invalid phone format. Use 7-20 digits with spaces, hyphens, or parentheses' });
    }
  }

  // Validate company (optional)
  if (data.company && data.company.trim().length > 0) {
    if (!validateCompany(data.company)) {
      errors.push({ field: 'company', message: 'Invalid company name. Only alphanumeric characters and -&.() allowed' });
    }
  }

  // Validate message (optional but if provided, must be substantial)
  if (data.message && data.message.trim().length > 0) {
    if (!validateMessage(data.message)) {
      errors.push({ field: 'message', message: 'Message must be 10-5000 characters' });
    }
  }

  if (errors.length > 0) {
    return { isValid: false, errors };
  }

  // Sanitize inputs
  return {
    isValid: true,
    errors: [],
    sanitized: {
      name: sanitizeString(data.name),
      email: sanitizeEmail(data.email),
      phone: data.phone ? sanitizePhone(data.phone) : null,
      company: data.company ? sanitizeString(data.company) : null,
      message: data.message ? sanitizeString(data.message, 5000) : null,
    },
  };
}

// Contact form validation
export function validateContactForm(data: any): ValidationResult {
  const errors: ValidationError[] = [];

  // Validate name
  if (!data.name || data.name.trim().length === 0) {
    errors.push({ field: 'name', message: 'Name is required' });
  } else if (!validateName(data.name)) {
    errors.push({ field: 'name', message: 'Name must be 2-255 characters and contain only letters, spaces, hyphens, and apostrophes' });
  }

  // Validate email
  if (!data.email || data.email.trim().length === 0) {
    errors.push({ field: 'email', message: 'Email is required' });
  } else if (!validateEmail(data.email)) {
    errors.push({ field: 'email', message: 'Invalid email format' });
  }

  // Validate subject
  if (!data.subject || data.subject.trim().length === 0) {
    errors.push({ field: 'subject', message: 'Subject is required' });
  } else if (data.subject.length < 5 || data.subject.length > 200) {
    errors.push({ field: 'subject', message: 'Subject must be 5-200 characters' });
  }

  // Validate message
  if (!data.message || data.message.trim().length === 0) {
    errors.push({ field: 'message', message: 'Message is required' });
  } else if (!validateMessage(data.message)) {
    errors.push({ field: 'message', message: 'Message must be 10-5000 characters' });
  }

  if (errors.length > 0) {
    return { isValid: false, errors };
  }

  return {
    isValid: true,
    errors: [],
    sanitized: {
      name: sanitizeString(data.name),
      email: sanitizeEmail(data.email),
      subject: sanitizeString(data.subject, 200),
      message: sanitizeString(data.message, 5000),
    },
  };
}

// Login form validation
export function validateLoginForm(data: any): ValidationResult {
  const errors: ValidationError[] = [];

  // Validate email
  if (!data.email || data.email.trim().length === 0) {
    errors.push({ field: 'email', message: 'Email is required' });
  } else if (!validateEmail(data.email)) {
    errors.push({ field: 'email', message: 'Invalid email format' });
  }

  // Validate password
  if (!data.password || data.password.length === 0) {
    errors.push({ field: 'password', message: 'Password is required' });
  } else if (data.password.length < 8) {
    errors.push({ field: 'password', message: 'Password must be at least 8 characters' });
  }

  if (errors.length > 0) {
    return { isValid: false, errors };
  }

  return {
    isValid: true,
    errors: [],
    sanitized: {
      email: sanitizeEmail(data.email),
      password: data.password, // Never sanitize passwords
    },
  };
}

// Signup form validation
export function validateSignupForm(data: any): ValidationResult {
  const errors: ValidationError[] = [];

  // Validate name
  if (!data.name || data.name.trim().length === 0) {
    errors.push({ field: 'name', message: 'Name is required' });
  } else if (!validateName(data.name)) {
    errors.push({ field: 'name', message: 'Name must be 2-255 characters and contain only letters, spaces, hyphens, and apostrophes' });
  }

  // Validate email
  if (!data.email || data.email.trim().length === 0) {
    errors.push({ field: 'email', message: 'Email is required' });
  } else if (!validateEmail(data.email)) {
    errors.push({ field: 'email', message: 'Invalid email format' });
  }

  // Validate password
  if (!data.password || data.password.length === 0) {
    errors.push({ field: 'password', message: 'Password is required' });
  } else if (!validatePassword(data.password)) {
    errors.push({
      field: 'password',
      message: 'Password must be at least 8 characters with 1 uppercase, 1 lowercase, 1 number, and 1 special character (@$!%*?&)',
    });
  }

  // Validate password confirmation
  if (!data.confirmPassword || data.confirmPassword.length === 0) {
    errors.push({ field: 'confirmPassword', message: 'Password confirmation is required' });
  } else if (data.password !== data.confirmPassword) {
    errors.push({ field: 'confirmPassword', message: 'Passwords do not match' });
  }

  if (errors.length > 0) {
    return { isValid: false, errors };
  }

  return {
    isValid: true,
    errors: [],
    sanitized: {
      name: sanitizeString(data.name),
      email: sanitizeEmail(data.email),
      password: data.password, // Never sanitize passwords
    },
  };
}

export default {
  validateEmail,
  validateName,
  validatePhone,
  validatePassword,
  validateCompany,
  validateMessage,
  validateUrl,
  sanitizeString,
  sanitizeEmail,
  sanitizePhone,
  validateLeadForm,
  validateContactForm,
  validateLoginForm,
  validateSignupForm,
};
