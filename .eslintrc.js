module.exports = {
  extends: [
    "next/core-web-vitals", // Next.js-specific rules with Core Web Vitals
    "prettier", // Disables rules conflicting with Prettier
    "plugin:storybook/recommended", // Storybook recommended rules
    "plugin:tailwindcss/recommended", // TailwindCSS recommended rules
  ],
  parserOptions: {
    ecmaVersion: 2021, // ECMAScript version supported by Next.js
    sourceType: "module", // Enable ES Modules
  },
  rules: {
    // Disable specific Next.js warnings
    "@next/next/no-html-link-for-pages": "off", // Allow custom links instead of Next.js <Link>

    // TypeScript rules
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_", // Ignore unused arguments prefixed with '_'
        varsIgnorePattern: "^_", // Ignore unused variables prefixed with '_'
      },
    ],

    // TailwindCSS rules
    "tailwindcss/no-custom-classname": "off", // Allow custom TailwindCSS classnames

    // Import sorting rules
    "import/order": [
      "warn",
      {
        groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
        alphabetize: {
          order: "asc", // Alphabetize imports in ascending order
          caseInsensitive: true,
        },
      },
    ],
  },
}
