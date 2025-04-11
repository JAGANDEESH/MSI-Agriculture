import React, { useState } from "react";
import { Search, LogIn } from "lucide-react";

const AboveNavbar: React.FC = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="bg-white border-b shadow-sm py-2">
      <div className="container mx-auto px-4 flex items-center justify-between sm:justify-end relative">
        {/* Optional accessibility links - uncomment when needed */}
        {/* <ul className="hidden sm:flex items-center gap-4 text-sm text-gray-700">
          <li className="hidden lg:block"><a href="#">Screen Reader</a></li>
          <li className="hidden md:block"><a href="#skipToMain">Skip to main content</a></li>
          <li className="hidden sm:block">
            Text Size
            <span className="ml-3 cursor-pointer">A-</span>
            <span className="mx-1">A</span>
            <span className="cursor-pointer">A+</span>
          </li>
          <li>
            Language:
            <select className="ml-2 border border-gray-300 px-2 py-1 rounded text-sm">
              <option>English</option>
            </select>
          </li>
        </ul> */}

        <a
          href="#"
          className="text-green-700 font-semibold ml-auto sm:ml-0 text-sm hover:underline"
          onClick={(e) => {
            e.preventDefault();
            // logic to open login modal if needed
          }}
        >
          <LogIn className="inline w-4 h-4 mr-1" />
          LOGIN
        </a>

        <div className="relative ml-4">
          <button
            onClick={() => setShowSearch((prev) => !prev)}
            className="text-gray-700 hover:text-green-600"
          >
            <Search className="w-5 h-5" />
          </button>

          {showSearch && (
            <div className="absolute right-0 top-10 w-64 sm:w-80 bg-white border border-gray-200 shadow-lg p-4 rounded z-50">
              <form
                action="https://www.ibef.org/home/search"
                method="post"
                autoComplete="off"
              >
                <input
                  type="hidden"
                  name="csrf_test_name"
                  value="bbf5190d032b02fb16ccb2f177d903d6"
                />
                <input
                  type="text"
                  name="keyword"
                  placeholder="Search Here..."
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                  type="submit"
                  className="mt-2 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
                >
                  <Search className="inline w-4 h-4 mr-1" />
                  Search
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default AboveNavbar;
