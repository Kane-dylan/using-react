import React from "react";

const FAQ_page = () => {
  return (
    <div className="relative work-sans min-h-screen flex flex-col items-center justify-center bg-[#f9eeff]">
      {/* Banner Background */}
      <div className="banner absolute top-0 left-0 w-full h-[40vh]"></div>

      {/* FAQ Card */}
      <div className="bg-white rounded-2xl p-8 max-w-2xl md:max-w-3xl relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3">
          <img src="/src/assets/images/icon-star.svg" alt="Star Icon" />
          <h1 className="text-4xl font-extrabold text-[#1c042e]">FAQs</h1>
        </div>

        {/* FAQ Items */}
        <div className="mt-6 space-y-4">
          {/* Question 1 - Expanded */}
          <div className="border-b pb-4">
            <div className="flex justify-between items-center">
              <p className="font-bold text-[#1c042e]">
                What is Frontend Mentor, and how will it help me?
              </p>
              <img src="/src/assets/images/icon-minus.svg" alt="Collapse" />
            </div>
            <p className="text-gray-500 mt-2">
              Frontend Mentor offers realistic coding challenges to help
              developers improve their frontend skills with projects in HTML,
              CSS, and JavaScript.
            </p>
          </div>

          {/* Question 2 */}
          <div className="border-b pb-4">
            <div className="flex justify-between items-center">
              <p className="hover:text-[#8a2be2] font-semibold cursor-pointer">
                Is Frontend Mentor free?
              </p>
              <img src="/src/assets/images/icon-plus.svg" alt="Expand" />
            </div>
          </div>

          {/* Question 3 */}
          <div className="border-b pb-4">
            <div className="flex justify-between items-center">
              <p className="hover:text-[#8a2be2] font-semibold cursor-pointer">
                Can I use Frontend Mentor projects in my portfolio?
              </p>
              <img src="/src/assets/images/icon-plus.svg" alt="Expand" />
            </div>
          </div>

          {/* Question 4 */}
          <div>
            <div className="flex justify-between items-center">
              <p className="hover:text-[#8a2be2] font-semibold cursor-pointer">
                How can I get help if I'm stuck on a challenge?
              </p>
              <img src="/src/assets/images/icon-plus.svg" alt="Expand" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ_page;
