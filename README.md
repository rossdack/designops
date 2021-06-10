# Design Library

This project is made to showcase RXP Design Library.
* Visit [Design Library Demo](https://rxpservices.github.io/designops/) to see a live demo
* Visit [Coupon Demo](https://rxpservices.github.io/demoproj/) to see implementations

## Installation

`npm install` installs project dependencies.

## Development

`npm start` runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
.
├── build                   # Compiled files
├── dist                    # Compiled export components files
├── src                     # Source files
│   ├── components
│   ├── constants
│   ├── lib                 # Export components files
│   └── pages
|
└── README.md
```

## Deployment

To export components, run `npm build` to compile the components in `/src/lib` to `/dist` folder.

The project hosts on GitHub Pages. With the help of [GitHub Actions](https://github.com/RXPServices/designops/actions), the project runs deployment whenever an update is made to the main branch.


## Development Guide

- Eslint
- Prettier
- Feature Branching - naming should follow **feature/initial-descriptive-task** format
- Code Review - assign a reviewer to pull requests
- Remove Merged Branches


