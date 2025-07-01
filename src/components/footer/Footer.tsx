import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="w-11/12 md:w-11/12 lg:w-11/12 xl:container mx-auto py-10">
      <div className="flex flex-col items-center text-center">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <Link to="/" className="inline-flex items-center mb-2">
            <span className="ml-2 text-xl font-bold tracking-wide uppercase">
              Library Management
            </span>
          </Link>
        </div>

        {/* Links Section */}

        <div className="flex justify-center text-sm  py-5">
          {/* Book Navigation */}
          <div>
            <ul className=" flex items-center gap-6">
              <li>
                <Link to="/books" className="hover:text-purple-600">
                  All Books
                </Link>
              </li>
              <li>
                <Link to="/add-book" className="hover:text-purple-600">
                  Add Book
                </Link>
              </li>
              <li>
                <Link to="/borrow-summary" className="hover:text-purple-600">
                  Borrow Summary
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="w-full border-t pt-5 text-sm text-center">
          © Copyright 2020 Lorem Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
