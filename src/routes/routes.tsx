import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import AllBooks from "../pages/allbooks/AllBooks";
import AddBook from "../pages/addbook/AddBook";
import BorrowSummary from "../pages/borrowsummary/BorrowSummary";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        Component: AllBooks,
      },
      {
        path: "books",
        Component: AllBooks,
      },
      {
        path: "create-book",
        Component: AddBook,
      },
      {
        path: "borrow-summary",
        Component: BorrowSummary,
      },
    ],
  },
]);

export default router;
