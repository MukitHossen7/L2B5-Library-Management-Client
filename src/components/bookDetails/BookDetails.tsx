import { useGetBookByIdQuery } from "@/redux/api/baseApi";
import { useParams } from "react-router";
import Loader from "../loader/Loader";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

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

  const bookData = book?.data;

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      <Card className="flex flex-col md:flex-row bg-white dark:bg-[#171717] shadow-md dark:shadow-lg rounded-lg overflow-hidden transition-colors duration-300 px-7">
        <div className="md:w-1/2 w-full h-auto">
          <img
            src={bookData?.image}
            alt={bookData?.title}
            className="w-full h-full md:h-[500px] object-cover rounded-md"
          />
        </div>

        <CardContent className="md:w-1/2 w-full flex flex-col justify-between text-gray-900 dark:text-gray-100">
          <div>
            <CardHeader>
              <CardTitle className="text-3xl font-bold mb-1">
                {bookData?.title}
              </CardTitle>
              <CardDescription className="italic text-base text-gray-600 dark:text-gray-400 mb-6">
                by {bookData?.author}
              </CardDescription>
            </CardHeader>

            {/* Info List */}
            <div className="space-y-3 mb-6 text-base md:text-base">
              <div>
                <span className="font-bold">Genre: </span>
                <span>{bookData?.genre}</span>
              </div>
              <div>
                <span className="font-bold">ISBN: </span>
                <span className="text-gray-600 font-semibold">
                  {bookData?.isbn}
                </span>
              </div>
              <div>
                <span className="font-semibold">Available: </span>
                {bookData?.available ? (
                  <span className="text-green-600 dark:text-green-400 font-bold">
                    Yes
                  </span>
                ) : (
                  <span className="text-red-600 dark:text-red-400 font-bold">
                    No
                  </span>
                )}
              </div>
              <div>
                <span className="font-bold">Copies: </span>
                <span className="font-bold">{bookData?.copies}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-800 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
              {bookData?.description}
            </p>
          </div>

          {/* Button */}
          <CardFooter className="mt-6">
            <Button className="w-full md:w-auto px-6 py-3  rounded-md font-semibold transition">
              Borrow Book
            </Button>
          </CardFooter>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookDetails;
