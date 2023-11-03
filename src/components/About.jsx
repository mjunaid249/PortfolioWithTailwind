// import React from 'react'

const About = () => {
  return (
    <>
      <h1 className="text-3xl text-center p-[2rem] font-bold">
        My Skills & Experties
      </h1>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Card  */}
          <div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-gray-700">
            <div className="flex justify-center items-center w-12 h-12  rounded-md mx-auto">
              <img
                src="https://www.svgrepo.com/show/303205/html-5-logo.svg"
                alt=""
              />
            </div>

            <div className="mt-3">
              <h3 className="text-sm  sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                HTML 5
              </h3>
            </div>
          </div>
          {/* Card  */}
          <div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-gray-700">
            <div className="flex justify-center items-center w-12 h-12  rounded-md mx-auto">
              <img
                src="https://www.svgrepo.com/show/303263/css3-logo.svg"
                alt=""
              />
            </div>

            <div className="mt-3">
              <h3 className="text-sm  sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                CSS 3
              </h3>
            </div>
          </div>
          {/* Card  */}
          <div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-gray-700">
            <div className="flex justify-center items-center w-12 h-12  rounded-md mx-auto">
              <img src="https://www.svgrepo.com/show/355081/js.svg" alt="" />
            </div>

            <div className="mt-3">
              <h3 className="text-sm  sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                JavaScript
              </h3>
            </div>
          </div>
          {/* Card  */}
          <div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-gray-700">
            <div className="flex justify-center items-center w-12 h-12  rounded-md mx-auto">
              <img
                src="https://www.svgrepo.com/show/374118/tailwind.svg"
                alt=""
              />
            </div>

            <div className="mt-3">
              <h3 className="text-sm  sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                Tailwind CSS
              </h3>
            </div>
          </div>
          {/* Card  */}
          <div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-gray-700">
            <div className="flex justify-center items-center w-12 h-12  rounded-md mx-auto">
              <img
                src="https://www.svgrepo.com/show/353498/bootstrap.svg"
                alt=""
              />
            </div>

            <div className="mt-3">
              <h3 className="text-sm  sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                Bootstrap
              </h3>
            </div>
          </div>
          {/* Card  */}
          <div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-gray-700">
            <div className="flex justify-center items-center w-12 h-12  rounded-md mx-auto">
              <img
                src="https://www.svgrepo.com/show/452075/node-js.svg"
                alt=""
              />
            </div>

            <div className="mt-3">
              <h3 className="text-sm  sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                Node Js
              </h3>
            </div>
          </div>
          {/* Card  */}
          <div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-gray-700">
            <div className="flex justify-center items-center w-12 h-12  rounded-md mx-auto">
              <img
                src="https://www.svgrepo.com/show/303157/react-logo.svg"
                alt=""
              />
            </div>

            <div className="mt-3">
              <h3 className="text-sm  sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                React Js
              </h3>
            </div>
          </div>
          {/* Card  */}
          <div className="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-gray-700">
            <div className="flex justify-center items-center w-12 h-12  rounded-md mx-auto">
              <img
                src="https://www.svgrepo.com/show/512317/github-142.svg"
                alt=""
              />
            </div>

            <div className="mt-3">
              <h3 className="text-sm  sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                Github
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
