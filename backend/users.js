const crypto = require('crypto');
const PASSWORD_KEY_LENGTH = 64;
const PASSWORD_SALT_LENGTH = 16;
function hashPassword(password) {
  const salt = crypto.randomBytes(PASSWORD_SALT_LENGTH).toString('hex');
  const derivedKey = crypto.scryptSync(password, salt, PASSWORD_KEY_LENGTH).toString('hex');
  return `scrypt:${salt}:${derivedKey}`;
}
function verifyPassword(password, storedHash) {
  const [algorithm, salt, storedKey] = String(storedHash).split(':');
  if (algorithm !== 'scrypt' || !salt || !storedKey || !/^[a-f0-9]+$/i.test(storedKey)) {
    return false;
  }
  const derivedKey = crypto.scryptSync(password, salt, PASSWORD_KEY_LENGTH);
  const expectedKey = Buffer.from(storedKey, 'hex');
  return expectedKey.length === derivedKey.length && crypto.timingSafeEqual(expectedKey, derivedKey);
}
function validateUserInput(body, { partial = false } = {}) {
  const input = body && typeof body === 'object' ? body : {};
  const allowedFields = ['name', 'phone', 'email', 'password', 'role'];
  const unknownFields = Object.keys(input).filter((field) => !allowedFields.includes(field));
  if (unknownFields.length > 0) {
    return { error: `Unknown field: ${unknownFields[0]}` };
  }
  const requiredFields = partial ? [] : ['name', 'phone', 'email', 'password'];
  const missingField = requiredFields.find((field) => !input[field]);
  if (missingField) {
    return { error: `${missingField} is required` };
  }
  if (input.name !== undefined && (typeof input.name !== 'string' || input.name.trim().length === 0 || input.name.length > 100)) {
    return { error: 'name must be a non-empty string of at most 100 characters' };
  }
  if (
    input.phone !== undefined &&
    (typeof input.phone !== 'string' || !/^\d{10}$/.test(input.phone))
  ) {
    return {
      error: 'phone must be exactly 10 digits'
    };
  }
  if (input.email !== undefined && (typeof input.email !== 'string' || input.email.length > 150 || !/^\S+@\S+\.\S+$/.test(input.email))) {
    return { error: 'email must be a valid email address of at most 150 characters' };
  }
  if (input.password !== undefined && (typeof input.password !== 'string' || input.password.length < 8 || input.password.length > 255)) {
    return { error: 'password must be between 8 and 255 characters' };
  }
  if (input.role !== undefined && (typeof input.role !== 'string' || input.role.length === 0 || input.role.length > 20)) {
    return { error: 'role must be a non-empty string of at most 20 characters' };
  }
  return { value: input };
}
function publicUser(user) {
  const { password, ...safeUser } = user;
  return safeUser;
}
module.exports = { hashPassword, verifyPassword, publicUser, validateUserInput };