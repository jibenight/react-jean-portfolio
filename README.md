# Portfolio of Jean Nguyen

Welcome to Jean Nguyen's portfolio repository. This project is built using Vite, React, and several other technologies to showcase Jean's work.

## Table of Contents

1. [Installation](#installation)
2. [Development](#development)
3. [Building for Production](#building-for-production)
4. [Backend Modifications](#backend-modifications)
5. [Deployment](#deployment)
6. [Dependencies](#dependencies)

## Installation

To get started, you'll need to clone this repository and then install the necessary dependencies.

```bash
git clone git@github.com:jibenight/react-jean-portfolio.git
cd react-jean-portfolio
npm install
```

## Development

For development purposes, you can run the local Vite server:

```bash
npm run dev
```

This will start the development server, and you can view the application at `http://127.0.0.1:5173/`.

## Building for Production

To build the application for production:

```bash
npm run build
```

This will generate optimized bundles in the `dist` directory.

## Backend Modifications

Any modifications made to the `server.js` file (or any other backend-related files) should also be updated in the production environment. Once the changes are made:

1. Build your project if necessary.
2. Use FTP to transfer the updated backend files to the server (`nuci7`), ensuring they're placed in the appropriate directory.

## Deployment

After building the project for production:

1. Transfer the elements of the `dist` directory to your server (`nuci7`).
2. Use FTP to move the files to the following directory: `var/www/jean-nguyen.dev`.

Ensure that your server is correctly configured to serve static files from the `var/www/jean-nguyen.dev` directory and handle backend operations.

## Dependencies

Here are some of the main dependencies used in this project:

- React (v18.2.0) - UI Library.
- Vite (v4.0.0) - Build tool and development server.
- Framer Motion (v8.4.3) - Animation library.

... and several others. Check the `package.json` for the complete list.

If you have any questions or issues, please [open an issue on GitHub](https://github.com/jibenight/react-jean-portfolio/issues).
