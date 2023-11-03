const Contact = () => {
  return (
    <>
      <h1 className="text-3xl text-center p-[2rem] font-bold">
        Stay Connected
      </h1>
      <div className="max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <a
            className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800"
            href="#"
          >
            <div className="p-4 md:p-5">
              <div className="flex items-center">
                <i className="fa-solid fa-phone"></i>

                <div className="grow ml-5">
                  <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                    +92-3261710249
                  </h3>
                </div>
              </div>
            </div>
          </a>
          <a
            className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800"
            href="#"
          >
            <div className="p-4 md:p-5">
              <div className="flex items-center">
                <i className="fa-brands fa-whatsapp"></i>

                <div className="grow ml-5">
                  <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                    +92-3261710249
                  </h3>
                </div>
              </div>
            </div>
          </a>
          <a
            className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800"
            target="_blank"
            href="https://mail.google.com/mail/u/0/#inbox?compose=new"
          >
            <div className="p-4 md:p-5">
              <div className="flex items-center">
                <i className="fa-regular fa-envelope"></i>

                <div className="grow ml-5">
                  <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                    junaidch249249@gmail.com
                  </h3>
                </div>
              </div>
            </div>
          </a>
          <a
            className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition dark:bg-slate-900 dark:border-gray-800"
            href="https://github.com/mjunaid249"
            target="_blank"
          >
            <div className="p-4 md:p-5">
              <div className="flex items-center">
                <i className="fa-brands fa-github"></i>

                <div className="grow ml-5">
                  <h3 className="group-hover:text-blue-600 font-semibold text-gray-800 dark:group-hover:text-gray-400 dark:text-gray-200">
                    mjunaid249
                  </h3>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
