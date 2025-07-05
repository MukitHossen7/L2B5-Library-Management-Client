import { FaBook, FaListAlt, FaUserCheck } from "react-icons/fa";
import { Button } from "../ui/button";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="mb-16">
      <div className="transition-colors duration-300">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 dark:text-teal-300 uppercase rounded-full bg-teal-200 dark:bg-teal-800/30">
                Digital Library
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 dark:text-white sm:text-4xl md:mx-auto">
              <span className="inline-block">
                <span className="">Manage</span>
              </span>{" "}
              your library the smart way
            </h2>
            <p className="text-base text-gray-700 dark:text-gray-300 md:text-lg">
              Easily track books, manage borrowers, and keep your library
              organized and efficient — all in one place.
            </p>
          </div>
          <div className="flex items-center gap-4 sm:justify-center">
            <Link to="/books">
              <Button>Get Started</Button>
            </Link>
            <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 hover:text-teal-300 dark:hover:text-teal-300 transition-colors">
              Learn More
            </p>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className=" px-4 sm:px-0">
        <div className="absolute inset-0  h-1/2" />
        <div className=" grid mx-auto overflow-hidden bg-white dark:bg-gray-900 divide-y dark:divide-gray-700 rounded-xl shadow sm:divide-y-0 sm:divide-x sm:max-w-screen-sm sm:grid-cols-3 lg:max-w-screen-md">
          {/* Card 1 */}
          <div className="inline-block p-8 text-center dark:bg-neutral-900 ">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-100 dark:bg-indigo-800">
              <FaBook className="text-indigo-600 dark:text-indigo-300 text-2xl" />
            </div>
            <p className="font-bold tracking-wide text-gray-800 dark:text-gray-100">
              Track Borrowed Books
            </p>
          </div>
          {/* Card 2 */}
          <div className="inline-block p-8 text-center dark:bg-neutral-900">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-100 dark:bg-indigo-800">
              <FaListAlt className="text-indigo-600 dark:text-indigo-300 text-2xl" />
            </div>
            <p className="font-bold tracking-wide text-gray-800 dark:text-gray-100">
              Organize Book Catalog
            </p>
          </div>
          {/* Card 3 */}
          <div className="inline-block p-8 text-center dark:bg-neutral-900">
            <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-indigo-100 dark:bg-indigo-800">
              <FaUserCheck className="text-indigo-600 dark:text-indigo-300 text-2xl" />
            </div>
            <p className="font-bold tracking-wide text-gray-800 dark:text-gray-100">
              Simplify User Access
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
