# Library Management System

A minimalist **Library Management System** frontend built using modern tools and best practices. This project emphasizes core functionality like viewing, adding, editing, deleting, and borrowing books—**without any authentication or payment integration**.

## Live Link

## Features

- View all books in a grid layout
- **View All Books**: Paginated book list showing title, author, genre, ISBN, availability, and actions.
- Add new books via form
- Edit and delete existing books
- Borrow books with due date & quantity
- Real-time availability updates
- Borrow summary (aggregated total per book)
- Pagination for book listings
- Optimistic UI updates and Toast notifications
- Type-safe forms and API interactions

## Tech Stack

- React.js
- Tailwind CSS
- Typescript
- ShadCN UI
- Redux Toolkit & RTK Query
- MongoDB (with Mongoose)
- Express.js Backend

## Setup Instructions

### 1.Clone the Repository

```
git clone https://github.com/MukitHossen7/L2B5-Library-Management-Client.git

cd L2B5-Library-Management-Client

```

### 2. Install Dependencies

```
npm install
```

### 3. Environment Variables

```
MONGODB_URI=your_mongodb_connection_string
API_BASE_URL=http://localhost:5000/api
```

### 4. Run the Development Server

```
npm run dev
```

## API Overview (via RTK Query)

- GET /books?page=1&limit=9
- POST /books — Add book
- PUT /books/:id — Update book
- DELETE /books/:id — Delete book
- GET /borrows — Get all borrow records
- POST /borrows — Borrow a book

## TypeScript Interfaces

```ts
export interface IBook {
  _id: string;
  title: string;
  author: string;
  genre: string;
  isbn: string;
  description: string;
  copies: number;
  available?: boolean;
}

export interface IBorrow {
  _id?: string;
  bookId: string;
  quantity: number;
  dueDate: string;
}
```

## Dependencies

- "@hookform/resolvers": "^5.1.1",
- "@radix-ui/react-alert-dialog": "^1.1.14",
- "@radix-ui/react-dialog": "^1.1.14",
- "@radix-ui/react-dropdown-menu": "^2.1.15",
- "@radix-ui/react-label": "^2.1.7",
- "@radix-ui/react-popover": "^1.1.14",
- "@radix-ui/react-select": "^2.2.5",
- "@radix-ui/react-slot": "^1.2.3",
- "@reduxjs/toolkit": "^2.8.2",
- "@tailwindcss/vite": "^4.1.11",
- "class-variance-authority": "^0.7.1",
- "clsx": "^2.1.1",
- "date-fns": "^4.1.0",
- "lucide-react": "^0.525.0",
- "react": "^19.1.0",
- "react-day-picker": "^9.7.0",
- "react-dom": "^19.1.0",
- "react-helmet": "^6.1.0",
- "react-hook-form": "^7.59.0",
- "react-hot-toast": "^2.5.2",
- "react-icons": "^5.5.0",
- "react-loader-spinner": "^6.1.6",
- "react-redux": "^9.2.0",
- "react-router": "^7.6.3",
- "react-spinners": "^0.17.0",
- "tailwind-merge": "^3.3.1",
- "tailwindcss": "^4.1.11",
- "zod": "^3.25.67"

## DevDependencies

- "@eslint/js": "^9.25.0",
- "@types/node": "^24.0.8",
- "@types/react": "^19.1.2",
- "@types/react-dom": "^19.1.2",
- "@types/react-helmet": "^6.1.11",
- "@vitejs/plugin-react": "^4.4.1",
- "eslint": "^9.25.0",
- "eslint-plugin-react-hooks": "^5.2.0",
- "eslint-plugin-react-refresh": "^0.4.19",
- "globals": "^16.0.0",
- "tw-animate-css": "^1.3.4",
- "typescript": "~5.8.3",
- "typescript-eslint": "^8.30.1",
- "vite": "^6.3.5"
