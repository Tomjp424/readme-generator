// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadges = {
    "MIT": "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)",
    "Creative Commons Zero": "![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)",
    "Apache 2.0": "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)",
    "Mozilla Public License 2.0": "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)",
  }
  return license ? licenseBadges[license] : "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    "MIT": "https://opensource.org/licenses/MIT",
    "Creative Commons Zero": "http://creativecommons.org/publicdomain/zero/1.0/",
    "Apache 2.0": "https://opensource.org/licenses/Apache-2.0",
    "Mozilla Public License 2.0": "https://opensource.org/licenses/MPL-2.0",
  }
  return license ? licenseLinks[license] : "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(responses) {
  if (responses.license !== "No License") {
    return `## License

Copyright (c) ${responses.fullName}.

Licensed under the [${responses.license}](${renderLicenseLink(responses.license)}) license.`
  } else return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(responses, licenseChoice) {
  return `# ${responses.title}
${renderLicenseBadge(licenseChoice)}

## Description
${responses.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Testing](#testing)
- [Questions](#questions)
- [License](#license)

## Installation
${responses.installGuide}

## Usage
${responses.usageGuide}

## Contributing
${responses.contributionGuide}

## Testing
${responses.testGuide}

## Questions
- GitHub: [${responses.gitUsername}](${responses.gitLink})
- Email: ${responses.email}

${renderLicenseSection(responses)}`;
}

export default generateMarkdown;
