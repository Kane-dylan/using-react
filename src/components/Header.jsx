import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="min-h-10 bg-slate-700 sticky top-0 z-50 m-10 sm:rounded-lg">
      <>
        <nav className="flex justify-between items-center p-5">
          <Link to="/" className="flex justify-start items-center space-x-2">
            <img src="/src/images/favicon-32x32.png" alt="logo" />
          </Link>
          <div className="md:flex hidden justify-end items-center outfit gap-x-32">
            <ul className="flex flex-row space-x-5 text-white">
              <li>
                <Link to="/">
                  <Button variant="ghost" className="sm:text-2xl">
                    Home
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/cooking">
                  <Button variant="ghost" className="sm:text-2xl">
                    Cooking
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/faq">
                  <Button variant="ghost" className="sm:text-2xl">
                    FAQs
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    </div>
  );
};

export default Header;
