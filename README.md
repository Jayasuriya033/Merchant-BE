# Merchant-BE

## Overview
Merchant-BE is a Node.js application that provides a backend for managing various entities related to a merchant system. It implements CRUD (Create, Read, Update, Delete) operations for multiple models using Prisma as the ORM and Express.js as the web framework.

## Features
- **CRUD Operations**: Full support for CRUD operations on the following models:
  - Box Collection
  - Customer Details
  - Customer Logo
  - Owner
  - Role
  - Sales Details
  - Shop Details
  - Shop Logo
- **JWT Authentication**: Secure routes with JWT authentication, ensuring that only authorized users can access certain endpoints.
- **Validation**: Input validation to ensure data integrity and provide detailed error messages.
- **Structured Codebase**: Organized into controllers, routes, middleware, and responses for better maintainability.

## Project Structure
```
Merchant-BE
├── src
│   ├── controllers         # Contains controller files for each model
│   ├── middleware          # Contains middleware for authentication
│   ├── prisma              # Contains Prisma schema
│   ├── responses           # Contains response formatting functions
│   ├── routes              # Contains route definitions for each model
│   ├── utils               # Contains utility functions, including validation
│   ├── app.ts              # Initializes the Express application
│   └── index.ts            # Entry point of the application
├── package.json            # Lists dependencies and scripts
└── tsconfig.json           # TypeScript configuration
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd Merchant-BE
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up the database:
   - Update the `DATABASE_URL` in your environment variables to connect to your MySQL database.

4. Run the application:
   ```
   npm run start
   ```

## API Documentation
- The API endpoints are organized by model. Each model has its own set of routes that can be accessed after authentication.
- Use Bearer tokens in the Authorization header for protected routes.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.