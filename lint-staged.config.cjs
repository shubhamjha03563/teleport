module.exports = {
  "**/*.{js,ts,tsx}": ["pnpm lint"],
  "**/*.{js,ts,tsx,json,md,css}": ["prettier --check"],
};
