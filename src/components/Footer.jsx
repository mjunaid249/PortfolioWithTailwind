import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <hr />
      <footer>
        <div className="max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5 text-center">
            <div>
              <a
                className="flex-none text-xl font-semibold text-black dark:text-white"
                href="#"
                aria-label="Brand"
              >
                Junaid
              </a>
            </div>

            <ul className="text-center">
              <li className="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
                <Link
                  className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200"
                  to={"/about"}
                >
                  About
                </Link>
              </li>
              <li className="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
                <Link
                  className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200"
                  to={"/services"}
                >
                  Services
                </Link>
              </li>
              <li className="inline-block relative pr-8 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-3 before:-translate-y-1/2 before:content-['/'] before:text-gray-300 dark:before:text-gray-600">
                <Link
                  className="inline-flex gap-x-2 text-sm text-gray-500 hover:text-gray-800 dark:text-gray-500 dark:hover:text-gray-200"
                  to={"/contact"}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="footer-text">
              This Website is developed by <i>Muhammad Junaid</i>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
