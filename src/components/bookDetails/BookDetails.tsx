import { useGetBookByIdQuery } from "@/redux/api/baseApi";
import { useParams } from "react-router";
import Loader from "../loader/Loader";

const BookDetails = () => {
  const { id } = useParams();
  const { data: book, isLoading, isError } = useGetBookByIdQuery({ id: id! });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader></Loader>
      </div>
    );
  }

  if (isError)
    return (
      <p className="text-center text-destructive">
        Failed to single load book.
      </p>
    );

  const bookData = book?.data || {};
  console.log(bookData);
  return (
    <div>
      <h2>THis is Details page</h2>
    </div>
  );
};

export default BookDetails;
