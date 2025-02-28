import {motion, AnimatePresence } from 'framer-motion'
import React from 'react'

const ResponsiveMenu = ({open}) => {
  return (
    <AnimatePresence mode='wait'>
      {open && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.5 }}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div className="flex flex-col items-center justify-center bg-slate-800 text-white p-6 rounded-lg shadow-lg ml-10 mr-10">
            <ul className="flex flex-col space-y-4 text-xl outfit items-center py-6 w-full">
              <li className="w-full text-center py-2 px-4 rounded-md hover:bg-slate-700 transition-all cursor-pointer">
                Home
              </li>
              <li className="w-full text-center py-2 px-4 rounded-md hover:bg-slate-700 transition-all cursor-pointer">
                Cooking
              </li>
              <li className="w-full text-center py-2 px-4 rounded-md hover:bg-slate-700 transition-all cursor-pointer">
                FAQs
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ResponsiveMenu