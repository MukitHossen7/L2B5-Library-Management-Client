import BookCard from "@/components/bookCard/BookCard";
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
  return (
    <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto">
      <h1 className="text-lg lg:text-2xl font-bold mb-5"> All Books </h1>
      {!isLoading && books?.length === 0 ? (
        <p className="text-center text-lg md:text-xl lg:text-3xl font-bold py-6 lg:py-10">
          No books found.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <BookCard book={book} key={book?._id}></BookCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllBooks;
