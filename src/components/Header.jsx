import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="min-h-10 bg-slate-700 sticky top-0">
      <>
        <nav className="flex justify-end items-center p-5">
          <Link to="/" className="flex justify-start items-center space-x-2">
            <img src="/src/images/favicon-32x32.png" alt="logo" />
          </Link>
          <div>
            <ul className="flex flex-row space-x-5 text-white">
              <li>
                <Link to="/">
                <Button>Home</Button>
                </Link>
              </li>
              <li>
                <Link to="/cooking">               
                <Button>Cooking</Button>
                </Link>
              </li>
              <li>
                <Link to="/faq">
                <Button>FAQs</Button>
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
