module.exports = {
  extends: [
    "next", // Next.js specific linting rules
    "prettier", // Disable formatting rules that conflict with Prettier
    "plugin:storybook/recommended", // Recommended rules for Storybook
    "plugin:tailwindcss/recommended", // TailwindCSS linting rules
  ],
  parserOptions: {
    ecmaVersion: 2021, // ECMAScript version
    sourceType: "module", // Enable ES Modules
  },

  rules: {
    // Disable specific Next.js warnings
    "@next/next/no-html-link-for-pages": "off",

    // Allow unused variables prefixed with '_'
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],

    // Disable TailwindCSS custom classname rule
    "tailwindcss/no-custom-classname": "off",

    // Import order and alphabetization
    "import/order": [
      "warn",
      {
        groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
  },
}
