<h1>MyList</h1>

## Overview

This project is a ToDoList application built using Next.js, integrated with Clerk for user authentication. It leverages TypeScript for type safety, Tailwind CSS for styling, and Prisma as the ORM for interacting with the database,MongoDB. With this application, users can register, login, create ToDo items, mark them as complete, and delete them (CRUD functions).

## Features

- **User Authentication**: User registration and authentication are handled seamlessly using Clerk, providing a secure and user-friendly experience.
- **ToDo Management**: Users can create new ToDo items, mark them as complete, and delete them as needed.
- **Type Safety with TypeScript**: The application is built using TypeScript, providing type safety and enhancing development productivity.
- **Responsive Design with Tailwind CSS**: The user interface is responsive and mobile-friendly, thanks to Tailwind CSS utility classes.
- **Database Interaction with Prisma & MongoDB**: Prisma is used as the ORM to interact with the database, MongoDB making database operations more efficient and developer-friendly.

## Tech Stack

- **Next.js**: React framework for building server-side rendered (SSR) web applications.
- **Clerk**: Next.js authentication library for managing user authentication.
- **TypeScript**: Superset of JavaScript providing static typing and other advanced features.
- **Tailwind CSS**: Utility-first CSS framework for building custom designs quickly.
- **Prisma & MongoDB**: Modern database toolkit for TypeScript and Node.js, providing type-safe database access.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- A Clerk account for managing user authentication.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/nextjs-todolist.git
   ```

2. Navigate to the project directory:

   ```bash
   cd nextjs-todolist
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:

   Create a `.env.local` file in the root directory and add the following variables:

   ```plaintext
   CLERK_FRONTEND_API_KEY=your-clerk-frontend-api-key
   DATABASE_URL=your-database-url
   ```

   Replace `your-clerk-frontend-api-key` with your Clerk frontend API key and `your-database-url` with your database URL.

5. Run the development server:

   ```bash
   npm run dev
   ```

6. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## License

This project is licensed under the [MIT License](LICENSE).
```

