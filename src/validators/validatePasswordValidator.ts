/**
 * Validates a password based on multiple criteria and returns an array of error messages.
 * 
 * @param {string} password - The password to validate.
 * @returns {string[]} An array of error messages, empty if the password meets all criteria.
 */
export const validatePassword = (password: string): string[] => {
  const errors: string[] = [];

  // Check if the password has at least 8 characters.
  if (password.length < 8) {
    errors.push('Password must be at least 8 characters long');
  }

  // Check if the password contains at least one uppercase letter.
  const hasUppercase = /[A-Z]/.test(password);
  if (!hasUppercase) {
    errors.push('Password must contain at least one uppercase letter');
  }

  // Check if the password contains at least one lowercase letter.
  const hasLowercase = /[a-z]/.test(password);
  if (!hasLowercase) {
    errors.push('Password must contain at least one lowercase letter');
  }

  // Check if the password contains at least one numeric digit.
  const hasNumber = /\d/.test(password);
  if (!hasNumber) {
    errors.push('Password must contain at least one numeric digit');
  }

  // Check if the password contains at least one special character (e.g., !@#$%).
  const hasSpecialChar = /[!@#$%]/.test(password);
  if (!hasSpecialChar) {
    errors.push('Password must contain at least one special character');
  }

  return errors;
}