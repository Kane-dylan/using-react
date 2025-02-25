import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="min-h-10 bg-slate-700">
      <>
        <nav className="flex justify-around items-center p-5">
          <Link to="/" className="flex items-start space-x-2">
            <img src="/src/images/favicon-32x32.png" alt="logo" />
          </Link>
          <div>
            <ul className="flex flex-row space-x-5 text-white">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/cooking">Cooking</Link>
              </li>
              <li>
                <Link to="/faq">FAQs</Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    </div>
  );
};

export default Header;
