import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdMenu } from "react-icons/md";
import { PiShoppingCartThin } from "react-icons/pi";
import ResponsiveMenu from "./ResponsiveMenu";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50">
        <div className="flex flex-row justify-between items-center bg-slate-700 text-white px-5 overflow-hidden">
          {/* logo section */}
          <Link to={"/"}>
            <div className="flex items-center text-2xl gap-2 font-bold outfit py-8">
              <img src="/src/images/favicon-32x32.png" alt="logo" />
              <p>Faction</p>
            </div>
          </Link>
          {/* Menu section */}
          <div className="hidden md:flex justify-between items-center">
            <ul className="flex flex-row space-x-5 ">
              <li>
                <Link to="/">
                  <Button
                    variant="ghost"
                    className="sm:text-2xl hover:bg-slate-800 hover:text-white"
                  >
                    Home
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/cooking">
                  <Button
                    variant="ghost"
                    className="sm:text-2xl hover:bg-slate-800 hover:text-white"
                  >
                    Cooking
                  </Button>
                </Link>
              </li>
              <li>
                <Link to="/faq">
                  <Button
                    variant="ghost"
                    className="sm:text-2xl hover:bg-slate-800 hover:text-white"
                  >
                    FAQs
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
          {/* Icon section */}
          <div className="hidden md:flex items-center gap-2 text-2xl outfit">
            <button className="p-2 rounded-md hover:bg-slate-800">
              <CiSearch size={35} />
            </button>
            <button className="p-2 rounded-md hover:bg-slate-800">
              <PiShoppingCartThin size={35} />
            </button>
          </div>
          {/* Mobile screen Menu section */}
          <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.5 }}
            >
              {isOpen ? (
                <RxCross2 className="text-4xl" />
              ) : (
                <MdMenu className="text-4xl" />
              )}
            </motion.div>
          </div>
        </div>
      </nav>
      {/* Mobile sidebar section */}
      <ResponsiveMenu open={isOpen} />
    </>
  );
};

export default Navbar;
