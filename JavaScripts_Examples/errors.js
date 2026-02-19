// errors.js — throw, try/catch, custom Error types
class ValidationError extends Error {}

function validate(x) {
  if (!x) throw new ValidationError('invalid');
}

try {
  validate(null);
} catch (err) {
  if (err instanceof ValidationError) console.error('validation failed', err.message);
  else throw err;
}
