function generateMarkdown(data) {
    return `
# ${data.project}

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Contact](#contact)
* [License](#license)

## Installation
To install ${data.project}, run ${data.installation}

## Usage
To use ${data.project}, ${data.usage}

## Contributing
![contributors](https://img.shields.io/github/contributors/${data.user}/${data.repo})

To contribute to ${data.project}, ${data.contributing}

## Tests
To test ${data.project}, run ${data.test}

## Contact
![Github Picture] (${data.image})

Email: ${data.email}

## License
This project uses the follow license: ${data.license}
`;
}

module.exports = generateMarkdown;

// At least one badge
// Project title
// Description
// Table of Contents
// Installation
// Usage
// License
// Contributing
// Tests
// Questions
// User GitHub profile picture
// User GitHub email
