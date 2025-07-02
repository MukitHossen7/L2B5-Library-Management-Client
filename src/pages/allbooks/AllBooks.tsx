import type { IBook } from "@/interface/book/book.interface";
import { useGetBooksQuery } from "@/redux/api/bookapi/bookApi";

const AllBooks = () => {
  const { data: bookData, isLoading, isError } = useGetBooksQuery(undefined);

  if (isLoading) {
    return (
      <p className="text-center text-destructive text-2xl  dark:text-white">
        Loading....
      </p>
    );
  }

  if (isError)
    return (
      <p className="text-center text-destructive">Failed to load books.</p>
    );

  const books: IBook[] = bookData?.data || [];
  console.log(books);
  return (
    <div>
      <h1>This is All Books Page</h1>
    </div>
  );
};

export default AllBooks;
