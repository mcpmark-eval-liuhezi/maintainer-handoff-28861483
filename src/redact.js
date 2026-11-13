function redact(value) {
  return value.replace(/secret/gi, "[REDACTED]");
}
module.exports = { redact };
