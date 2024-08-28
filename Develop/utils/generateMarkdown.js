// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadges = {
    MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]",
    CC0: "[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]",
    Apache: "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]",
    MPL: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)",
  }
  return license ? licenseBadges.license : "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    MIT: "(https://opensource.org/licenses/MIT)",
    CC0: "(http://creativecommons.org/publicdomain/zero/1.0/)",
    Apache: "(https://opensource.org/licenses/Apache-2.0)",
    MPL: "(https://opensource.org/licenses/MPL-2.0)",
  }
  return license ? licenseLinks.license : "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(responses) {
  if (responses.license !== "No License") {
    return `## License

Copyright (c) ${responses.fullName}.

Licensed under the [${responses.license}](${renderLicenseLink(licenseChoice)}) license.`
  } else return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

export default generateMarkdown;
