// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require("fs")

module.exports = {
  extends: [
    "next", // Next.js specific linting rules
    "prettier", // Disables rules conflicting with Prettier
    "react-app", // React best practices
    "react-app/jest", // Jest linting rules
    "plugin:storybook/recommended", // Storybook-specific rules
    "plugin:tailwindcss/recommended", // TailwindCSS linting rules
  ],
  parserOptions: {
    babelOptions: {
      presets: [require.resolve("next/babel")], // Use Next.js Babel presets
    },
  },
  rules: {
    // TailwindCSS Rules
    "tailwindcss/no-custom-classname": "off", // Allow custom Tailwind classes
    "tailwindcss/classnames-order": "off", // Disable class ordering checks

    // Testing Library Rules
    "testing-library/prefer-screen-queries": "off", // Allow non-screen queries

    // Next.js Rules
    "@next/next/no-html-link-for-pages": "off", // Allow <a> tags for navigation

    // TypeScript Rules
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_", // Ignore variables prefixed with _
        varsIgnorePattern: "^_", // Ignore unused vars prefixed with _
      },
    ],

    // Import Sorting
    "sort-imports": [
      "error",
      {
        ignoreCase: true,
        ignoreDeclarationSort: true, // Avoid sorting declarations explicitly
      },
    ],
    "import/order": [
      "warn",
      {
        groups: [
          "external", // External dependencies (e.g., npm packages)
          "builtin", // Node.js built-ins (e.g., fs, path)
          "internal", // Internal modules or directories
          "sibling", // Files in the same folder
          "parent", // Parent folder imports
          "index", // Index imports
        ],
        pathGroups: [
          ...getDirectoriesToSort().map((singleDir) => ({
            pattern: `${singleDir}/**`,
            group: "internal",
          })),
          {
            pattern: "env",
            group: "internal",
          },
          {
            pattern: "theme",
            group: "internal",
          },
          {
            pattern: "public/**",
            group: "internal",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["internal"], // Exclude internal imports
        alphabetize: {
          order: "asc", // Sort alphabetically
          caseInsensitive: true,
        },
      },
    ],
  },
}

// Helper function to dynamically gather project directories
function getDirectoriesToSort() {
  const ignoredSortingDirectories = [".git", ".next", ".vscode", "node_modules"]
  return getDirectories(process.cwd()).filter((f) => !ignoredSortingDirectories.includes(f))
}

// Helper function to get directories in the given path
function getDirectories(path) {
  try {
    return fs.readdirSync(path).filter((file) => fs.statSync(`${path}/${file}`).isDirectory())
  } catch (error) {
    console.error(`Error reading directories in path ${path}:`, error)
    return []
  }
}
