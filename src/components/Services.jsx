const Services = () => {
  return (
    <>
      <h1 className="text-3xl text-center p-[2rem] font-bold">Services</h1>
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 mt-7 lg:grid-cols-3 gap-6">
          {/* card  */}
          <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div className="h-52 flex flex-col justify-center items-center pb-12 rounded-t-xl">
              <img src="/pexels-designecologist-1779487.jpg" alt="" />
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                Custom Website Development
              </h3>
              <p className="mt-3 text-gray-500 text-justify">
                I specialize in crafting bespoke websites tailored to your
                unique needs. Whether you require a personal blog, a business
                website, or an e-commerce platform, I create pixel-perfect,
                responsive websites that engage your audience and reflect your
                brand's identity.
              </p>
            </div>
          </div>
          {/* card  */}
          <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div className="h-52 flex flex-col justify-center items-center pb-12 rounded-t-xl">
              <img src="/pexels-karolina-grabowska-8092507.jpg" alt="" />
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                React Js Development
              </h3>
              <p className="mt-3 text-gray-500 text-justify">
                As a front-end developer, I harness the power of React.js to
                build interactive and dynamic web applications. I leverage the
                latest trends and best practices in React development to create
                user-friendly interfaces that deliver a superior user
                experience.
              </p>
            </div>
          </div>
          {/* card  */}
          <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div className="h-52 flex flex-col justify-center items-center pb-12 rounded-t-xl">
              <img src="/pexels-pixabay-257923.jpg" alt="" />
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white">
                Responsive Web Design
              </h3>
              <p className="mt-3 text-gray-500 text-justify">
                In a mobile-first world, it's crucial for your website to adapt
                flawlessly to various devices. I specialize in responsive web
                design, ensuring that your website not only looks stunning but
                also functions perfectly on smartphones, tablets, and desktops,
                providing a consistent user experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
