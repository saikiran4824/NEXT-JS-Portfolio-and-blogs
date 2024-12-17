import Image from "next/image";

export default function About() {
  return (
    <div>
      <section className="text-gray-800 dark:text-gray-50 body-font">
        <div className="container px-5 py-6 mx-auto">
          <h2 className="text-4xl pb-8 mb-4 font-bold text-center">
            My Projects
          </h2>
          <div className="flex flex-wrap -m-4">
            {/* Service 1 */}
            <div className="p-4 lg:w-1/2">
              <div className="h-full bg-gray-200 dark:bg-gray-900 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-lg">
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 dark:text-white mb-3">
                  Crypto Currencies Tracking Application
                </h1>
                <p className="leading-relaxed mb-3 text-gray-700 dark:text-gray-50">
                  The application provides real-time insights into the crypto
                  market, offering features such as search, favorites, and
                  conditional rendering to enhance the user experience. It
                  utilizes state management with React-Redux Toolkit for
                  efficient data flow and real-time updates. API integration
                  ensures seamless data retrieval from reliable crypto sources,
                  while Recharts is used to visualize market trends through
                  interactive and dynamic charts. The app is designed with
                  responsive layouts using Tailwind CSS, ensuring a smooth
                  experience across devices. Code optimization techniques have
                  been applied for better performance, making the app fast and
                  efficient, even with large data sets. Additional features
                  include user-friendly navigation, easy access to market
                  statistics, and the ability to track favorite cryptocurrencies
                  for quick updates.
                </p>
                <button className="px-4 py-1 m-2  rounded-md bg-black dark:bg-white text-white dark:text-black">
                  <a
                    href="https://saikiran-crypto-chain.vercel.app/"
                    target="_blank"
                  >
                    Visit
                  </a>
                </button>
              </div>
            </div>

            {/* Service 2 */}
            <div className="p-4 lg:w-1/2">
              <div className="h-full bg-gray-200 dark:bg-gray-900 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-lg">
                <h2 className="tracking-widest text-xs title-font font-medium mb-1"></h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 dark:text-white mb-3">
                  Food Recipe Application
                </h1>
                <p className="leading-relaxed mb-3 text-gray-700 dark:text-gray-50">
                  Developed a user-friendly Food Recipe App using React,
                  JavaScript, and Tailwind CSS, featuring a comprehensive recipe
                  search and detailed view of each recipe. The app includes
                  advanced features like search filters and sorting options to
                  help users easily find recipes based on ingredients, cuisine,
                  or dietary preferences. React state management ensures a
                  smooth and dynamic user experience. The responsive design,
                  built with CSS Grid and Flexbox, ensures seamless
                  functionality across various devices, from mobile to desktop.
                  The app also incorporates a clean, intuitive interface that
                  enhances usability, making it easy for users to explore, save,
                  and share their favorite recipes.
                </p>
                <button className="px-4 py-1 m-2  rounded-md bg-black dark:bg-white text-white dark:text-black">
                  <a
                    href="https://saikiran-food-recipe.vercel.app/"
                    target="_blank"
                  >
                    Visit
                  </a>
                </button>
              </div>
            </div>

            <div className="p-4 lg:w-1/2">
              <div className="h-full bg-gray-200 dark:bg-gray-900 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-lg">
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 dark:text-white mb-3">
                  Books Catalog Application
                </h1>
                <p className="leading-relaxed mb-3 text-gray-700 dark:text-gray-50">
                  A responsive Book Library application built using React,
                  Bootstrap, and React Router Dom, simulating a library
                  management system. It allows users to browse, search, add, and
                  edit books with a simple and interactive UI. The navigation
                  bar is responsive, offering links to Home, Add Book, Edit
                  Book, and Search pages. Users can add new books through a form
                  with fields for title, author, and publication year, and
                  update book details using an editable form. The app ensures
                  smooth client-side routing and includes form validation to
                  guarantee that all required fields are completed correctly
                  before submission.
                </p>
                <button className="px-4 py-1 m-2  rounded-md bg-black dark:bg-white text-white dark:text-black">
                  <a
                    href="https://saikiran-book-catalog.vercel.app/"
                    target="_blank"
                  >
                    Visit
                  </a>
                </button>
              </div>
            </div>
            <div className="p-4 lg:w-1/2">
              <div className="h-full bg-gray-200 dark:bg-gray-900 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-lg">
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 dark:text-white mb-3">
                  Myntra Clone{" "}
                </h1>
                <p className="leading-relaxed mb-3 text-gray-700 dark:text-gray-50">
                  Myntra clone made using HTML and Tailwind CSS, focusing on a clean,
                  responsive design and a great user experience. The website is
                  fully responsive, ensuring seamless functionality across
                  devices, from desktop to mobile. I utilized Tailwind CSS CDN
                  to streamline development, allowing for rapid styling with
                  utility-first classes. The design includes modern UI elements,
                  sleek hover effects, and smooth transitions that mimic the
                  Myntra shopping experience. The app features a user-friendly
                  interface with well-organized product listings, navigation,
                  and a cart system, providing an intuitive and polished look
                  and feel.
                </p>
                <button className="px-4 py-1 m-2  rounded-md bg-black dark:bg-white text-white dark:text-black">
                  <a
                    href="https://saikiran-myntra-responsive-clone-p.vercel.app/"
                    target="_blank"
                  >
                    Visit
                  </a>
                </button>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-200 dark:bg-gray-900 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-lg">
                <h2 className="tracking-widest text-xs title-font font-medium mb-1"></h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 dark:text-white mb-3">
                  UI Electra
                </h1>
                <p className="leading-relaxed mb-3 text-gray-700 dark:text-gray-50">
                  The electrical website built using HTML, CSS, and JavaScript
                  likely featured a structured layout with HTML, styled using
                  CSS for visual appeal, and made interactive with
                  JavaScript.Additionally, animations and transitions were
                  likely used to enhance the user experience, making the site
                  both functional and visually engaging.
                </p>
                <button className="px-4 py-1 m-2  rounded-md bg-black dark:bg-white text-white dark:text-black">
                  <a
                    href="https://electrical-website-eight.vercel.app/"
                    target="_blank"
                  >
                    Visit
                  </a>
                </button>
              </div>
            </div>
            
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-200 dark:bg-gray-900 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-lg">
                <h2 className="tracking-widest text-xs title-font font-medium mb-1">
                  CRYPTO CHAIN
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 dark:text-white mb-3">
                  Crypto Currencies Tracking Applications
                </h1>
                <p className="leading-relaxed mb-3 text-gray-700 dark:text-gray-50">
                  The application provides real-time insights into the crypto
                  market, with features like search, favorites, and conditional
                  rendering. -- State management,API integration, Responsive
                  design, Code optimization
                </p>
                <button className="px-4 mx-2 rounded-xl bg-red-400">
                  <a
                    href="https://saikiran-crypto-chain.vercel.app/"
                    target="_blank"
                  >
                    Visit
                  </a>
                </button>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-200 dark:bg-gray-900 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-lg">
                <h2 className="tracking-widest text-xs title-font font-medium mb-1">
                  CRYPTO CHAIN
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 dark:text-white mb-3">
                  Crypto Currencies Tracking Applications
                </h1>
                <p className="leading-relaxed mb-3 text-gray-700 dark:text-gray-50">
                  The application provides real-time insights into the crypto
                  market, with features like search, favorites, and conditional
                  rendering. -- State management,API integration, Responsive
                  design, Code optimization
                </p>
                <button className="px-4 mx-2 rounded-xl bg-red-400">
                  <a
                    href="https://saikiran-crypto-chain.vercel.app/"
                    target="_blank"
                  >
                    Visit
                  </a>
                </button>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-200 dark:bg-gray-900 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-lg">
                <h2 className="tracking-widest text-xs title-font font-medium mb-1">
                  CRYPTO CHAIN
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 dark:text-white mb-3">
                  Crypto Currencies Tracking Applications
                </h1>
                <p className="leading-relaxed mb-3 text-gray-700 dark:text-gray-50">
                  The application provides real-time insights into the crypto
                  market, with features like search, favorites, and conditional
                  rendering. -- State management,API integration, Responsive
                  design, Code optimization
                </p>
                <button className="px-4 mx-2 rounded-xl bg-red-400">
                  <a
                    href="https://saikiran-crypto-chain.vercel.app/"
                    target="_blank"
                  >
                    Visit
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
