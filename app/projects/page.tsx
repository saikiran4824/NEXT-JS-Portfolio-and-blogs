import Image from "next/image";

export default function About() {
  return (
    <div>
      <section className="text-gray-800 dark:text-gray-50 body-font">
        <div className="container px-5 py-6 mx-auto">
          <h2 className="text-4xl pb-8 mb-6 font-bold text-center">
            My Projects
          </h2>
          <div className="flex flex-wrap -m-4 justify-center">
            {/* Project 1: Crypto Currencies Tracking Application */}
            <div className="p-4 md:w-[80%] w-full">
              <div className="h-full bg-gray-200 dark:bg-gray-900 bg-opacity-75 px-8 pt-16 pb-16 rounded-lg overflow-hidden text-center relative shadow-lg">
                <h1 className="title-font sm:text-3xl text-xl font-medium text-gray-900 dark:text-white mb-6 underline decoration-gray-900 dark:decoration-white">
                  Crypto Currencies Tracking Application
                </h1>
                <div className="flex flex-wrap gap-8 items-center">
                  {/* Left side (Project description) */}
                  <div className="flex-1 md:pr-8 md:border-r-2 border-gray-300 dark:border-gray-600">
                    <p className="leading-relaxed mb-6 text-gray-700 dark:text-gray-50">
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
                  </div>

                  {/* Right side (Technologies used) */}
                  <div className="flex-1 space-y-6">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                      Technologies Used
                    </h3>
                    <ul className="space-y-4 text-gray-700 dark:text-gray-50">
                      <li className="flex items-center">
                        <span className="mr-2 text-gray-800 dark:text-gray-50">React</span> - JavaScript library for building user interfaces.
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-gray-800 dark:text-gray-50">Redux Toolkit</span> - Efficient state management for React.
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-gray-800 dark:text-gray-50">Recharts</span> - Charting library for visualizing data.
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-gray-800 dark:text-gray-50">Tailwind CSS</span> - Utility-first CSS framework for responsive design.
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-gray-800 dark:text-gray-50">API Integration</span> - Seamless data retrieval from crypto sources.
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-gray-800 dark:text-gray-50">TypeScript</span> - Typed superset of JavaScript for better code quality.
                      </li>
                    </ul>
                  </div>
                </div>
                <button className="px-6 py-1 m-2 rounded-md bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-300 mt-4">
                  <a
                    href="https://saikiran-crypto-chain.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit
                  </a>
                </button>
              </div>
            </div>
            <div className="p-4  md:w-[80%] w-full">
              <div className="h-full bg-gray-200 dark:bg-gray-900 bg-opacity-75 px-8 pt-16 pb-16 rounded-lg overflow-hidden text-center relative shadow-lg">
                <h1 className="title-font sm:text-3xl text-xl font-medium text-gray-900 dark:text-white mb-6 underline decoration-gray-900 dark:decoration-white">
                  E-commerce Application
                </h1>
                <div className="flex flex-wrap gap-8 items-center">
                  {/* Left side (Project description) */}
                  <div className="flex-1 md:pr-8 md:border-r-2 border-gray-300 dark:border-gray-600">
                    <p className="leading-relaxed mb-6 text-gray-700 dark:text-gray-50">
                      This e-commerce platform integrates MongoDB and Redis to provide scalable
                      and high-performance services. MongoDB stores user data, product details,
                      and orders in a flexible, scalable NoSQL database. Redis is used for caching
                      frequently accessed data like product listings and user sessions, improving
                      platform performance. The platform features an admin dashboard for managing
                      products, users, and orders, along with real-time analytics.
                    </p>
                    <p className="leading-relaxed mb-6 text-gray-700 dark:text-gray-50">
                      It also incorporates a secure authentication system using JWT with refresh
                      and access tokens, enabling users to stay logged in securely. Additionally,
                      users can create accounts, sign in, and apply coupon codes at checkout. The
                      cart and checkout process integrates Stripe for secure payments, while the
                      platform design is built with Tailwind CSS for a responsive, modern UI.
                    </p>
                  </div>

                  {/* Right side (Technologies used) */}
                  <div className="flex-1 space-y-6">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                      Technologies Used
                    </h3>
                    <ul className="space-y-4 text-gray-700 dark:text-gray-50">
                      <li className="flex items-center">
                        <span className="mr-2 text-gray-800 dark:text-gray-50">MongoDB</span> - NoSQL database for scalable storage.
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-gray-800 dark:text-gray-50">Redis</span> - In-memory key-value store for caching.
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-gray-800 dark:text-gray-50">JWT</span> - Secure token-based authentication.
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-gray-800 dark:text-gray-50">Stripe</span> - Payment processor for secure transactions.
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-gray-800 dark:text-gray-50">Tailwind CSS</span> - Utility-first CSS framework for responsive design.
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-gray-800 dark:text-gray-50">Node.js</span> - JavaScript runtime environment for building the server-side.
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-gray-800 dark:text-gray-50">Express</span> - Web framework for building the back-end API.
                      </li>
                    </ul>
                  </div>
                </div>
                <button className="px-6 py-1 m-2 rounded-md bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-300 mt-4">
                  <a
                    href="https://github.com/saikiran4824/E-Commerce-Application"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit
                  </a>
                </button>
              </div>
            </div>
            <div className="p-4 md:w-[80%] w-full">
              <div className="h-full bg-gray-200 dark:bg-gray-900 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-lg">
                <h1 className="title-font sm:text-3xl text-xl font-medium text-gray-900 dark:text-white mb-6 underline decoration-gray-900 dark:decoration-white">
                  Netflix Clone
                </h1>
                <div className="flex flex-wrap gap-8 items-center">
                  {/* Left side (Project description) */}
                  <div className="flex-1 md:pr-8 md:border-r-2 border-gray-300 dark:border-gray-600">
                    <p className="leading-relaxed mb-6 text-gray-700 dark:text-gray-50">
                      This Netflix Clone is built using modern web development technologies including React.js, JavaScript, Tailwind CSS, and API integration. The app replicates the key features of the popular Netflix streaming platform, offering users a dynamic, responsive, and engaging experience for browsing movies and TV shows.
                    </p>
                    <p className="leading-relaxed mb-6 text-gray-700 dark:text-gray-50">
                      Key features include authentication and authorization to ensure that users can securely log in and access exclusive content based on their credentials. The app also includes protected routes, so only authenticated users can access specific content and functionality. With its sleek user interface and seamless browsing capabilities, the Netflix Clone aims to provide a familiar and enjoyable user experience similar to the original platform.
                    </p>
                  </div>

                  {/* Right side (Technologies used) */}
                  <div className="flex-1 space-y-6">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                      Technologies Used
                    </h3>
                    <ul className="space-y-4 text-gray-700 dark:text-gray-50">
                      <li className="flex items-center">
                        <span className="mr-2 text-gray-700 dark:text-gray-50">React.js</span> - JavaScript library for building interactive user interfaces.
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-gray-700 dark:text-gray-50">Tailwind CSS</span> - Utility-first CSS framework for responsive design.
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-gray-700 dark:text-gray-50">JavaScript</span> - Programming language used for interactivity and functionality.
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-gray-700 dark:text-gray-50">API Integration</span> - Fetches movie and TV show data from external sources.
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-gray-700 dark:text-gray-50">Authentication & Authorization</span> - Secure login and access control for exclusive content.
                      </li>
                    </ul>
                  </div>
                </div>
                <button className="px-6 py-1 m-2 rounded-md bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-300 mt-4">
                  <a
                    href="https://github.com/saikiran4824/Netflix-Clone"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit
                  </a>
                </button>
              </div>
            </div>
             {/* Project 4: Myntra Clone */}
             <div className="p-4 md:w-[80%] w-full">
              <div className="h-full bg-gray-200 dark:bg-gray-900 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-lg">
                <h1 className="title-font sm:text-3xl text-xl font-medium text-gray-900 dark:text-white mb-6 underline decoration-gray-900 dark:decoration-white">
                  Myntra Clone
                </h1>
                <div className="flex flex-wrap gap-8 items-center">
                  {/* Left side (Project description) */}
                  <div className="flex-1 md:pr-8 md:border-r-2 border-gray-300 dark:border-gray-600">
                    <p className="leading-relaxed mb-6 text-gray-700 dark:text-gray-50">
                      I have developed a responsive Myntra clone using HTML, CSS, Tailwind CSS, and JavaScript. The website features a fully responsive design, ensuring seamless functionality across all devices, from desktop to mobile. The clone replicates key features of the Myntra shopping platform, offering dynamic functionality like dropdown menus, a carousel, and a mobile navigation system.
                    </p>
                    <p className="leading-relaxed mb-6 text-gray-700 dark:text-gray-50">
                      Key features include interactive dropdown menus that close when hovering over another section, a smooth image carousel, a mobile-friendly navbar, and a styled footer. The carousel auto-plays and transitions between images smoothly, while the navbar adapts to mobile views with a hamburger-style menu for easy navigation.
                    </p>
                  </div>

                  {/* Right side (Technologies used) */}
                  <div className="flex-1 space-y-6">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                      Technologies Used
                    </h3>
                    <ul className="space-y-4 text-gray-700 dark:text-gray-50">
                      <li className="flex items-center">
                        <span className="mr-2 text-gray-700 dark:text-gray-50">HTML</span> - For the basic structure of the webpage.
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-gray-700 dark:text-gray-50">CSS</span> - For custom styling, layouts, colors, and effects.
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-gray-700 dark:text-gray-50">Tailwind CSS</span> - Utility-first CSS framework for responsive design.
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-gray-700 dark:text-gray-50">JavaScript</span> - For interactivity, carousel functionality, and dynamic dropdown behavior.
                      </li>
                    </ul>
                  </div>
                </div>
                <button className="px-6 py-1 m-2 rounded-md bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-300 mt-4">
                  <a
                    href="https://saikiran-myntra-responsive-clone-p.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit
                  </a>
                </button>
              </div>
            </div>
           
            {/* Project 3: Books Catalog Application */}
            <div className="p-4 md:w-[80%] w-full">
              <div className="h-full bg-gray-200 dark:bg-gray-900 bg-opacity-75 px-8 pt-16 pb-16 rounded-lg overflow-hidden text-center relative shadow-lg">
                <h1 className="title-font sm:text-3xl text-xl font-medium text-gray-900 dark:text-white mb-6 underline decoration-gray-900 dark:decoration-white">
                  Books Catalog Application
                </h1>
                <div className="flex flex-wrap gap-8 items-center">
                  {/* Left side (Project description) */}
                  <div className="flex-1 md:pr-8 md:border-r-2 border-gray-300 dark:border-gray-600">
                    <p className="leading-relaxed mb-6 text-gray-700 dark:text-gray-50">
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
                  </div>

                  {/* Right side (Technologies used) */}
                  <div className="flex-1 space-y-6">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                      Technologies Used
                    </h3>
                    <ul className="space-y-4 text-gray-700 dark:text-gray-50">
                      <li className="flex items-center">
                        <span className="mr-2 text-gray-800 dark:text-gray-50">React</span> - JavaScript library for building user interfaces.
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-gray-800 dark:text-gray-50">Bootstrap</span> - Framework for responsive layouts and components.
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-gray-800 dark:text-gray-50">React Router Dom</span> - Library for routing and navigation.
                      </li>
                    </ul>
                  </div>
                </div>
                <button className="px-6 py-1 m-2 rounded-md bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-300 mt-4">
                  <a
                    href="https://saikiran-book-catalog.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit
                  </a>
                </button>
              </div>
            </div>

            {/* Project 2: Food Recipe Application */}
            <div className="p-4 md:w-[80%]  w-full">
              <div className="h-full bg-gray-200 dark:bg-gray-900 bg-opacity-75 px-8 pt-16 pb-16 rounded-lg overflow-hidden text-center relative shadow-lg">
                <h1 className="title-font sm:text-3xl text-xl font-medium text-gray-900 dark:text-white mb-6 underline decoration-gray-900 dark:decoration-white">
                  Food Recipe Application
                </h1>
                <div className="flex flex-wrap gap-8 items-center">
                  {/* Left side (Project description) */}
                  <div className="flex-1 md:pr-8 md:border-r-2 border-gray-300 dark:border-gray-600">
                    <p className="leading-relaxed mb-6 text-gray-700 dark:text-gray-50">
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
                  </div>

                  {/* Right side (Technologies used) */}
                  <div className="flex-1 space-y-6">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                      Technologies Used
                    </h3>
                    <ul className="space-y-4 text-gray-700 dark:text-gray-50">
                      <li className="flex items-center">
                        <span className="mr-2 text-gray-800 dark:text-gray-50">React</span> - JavaScript library for building user interfaces.
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-gray-800 dark:text-gray-50">Tailwind CSS</span> - Utility-first CSS framework for responsive design.
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-gray-800 dark:text-gray-50">JavaScript</span> - Programming language for dynamic behavior.
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-gray-800 dark:text-gray-50">CSS Grid & Flexbox</span> - Layout systems for responsive design.
                      </li>
                    </ul>
                  </div>
                </div>
                <button className="px-6 py-1 m-2 rounded-md bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-300 mt-4">
                  <a
                    href="https://saikiran-food-recipe.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit
                  </a>
                </button>
              </div>
            </div>

            

           
            <div className="p-4  md:w-[80%] w-full">
              <div className="h-full bg-gray-200 dark:bg-gray-900 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-lg">
                <h1 className="title-font sm:text-3xl text-xl font-medium text-gray-900 dark:text-white mb-6 underline decoration-gray-900 dark:decoration-white">
                  Tracker App - MERN Stack & Apollo GraphQL
                </h1>
                <div className="flex flex-wrap gap-8 items-center">
                  {/* Left side (Project description) */}
                  <div className="flex-1 md:pr-8 md:border-r-2 border-gray-300 dark:border-gray-600">
                    <p className="leading-relaxed mb-6 text-gray-700 dark:text-gray-50">
                      This Tracker App is built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Apollo GraphQL to help users track their expenses and investments. The app provides real-time insights into financial data through interactive charts powered by Chart.js. It enables users to add, update, or delete their expense and investment entries while visualizing their data on a dynamic dashboard.
                    </p>
                    <p className="leading-relaxed mb-6 text-gray-700 dark:text-gray-50">
                      The app uses Apollo GraphQL to manage data fetching and mutations, while Passport.js handles user authentication via secure sessions. With MongoDB as the NoSQL database, users' data is stored securely, and global state management is handled via Apollo Client. The integration of Chart.js provides users with real-time visual feedback as they interact with the app.
                    </p>
                  </div>

                  {/* Right side (Technologies used) */}
                  <div className="flex-1 space-y-6">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                      Technologies Used
                    </h3>
                    <ul className="space-y-4 text-gray-700 dark:text-gray-50">
                      <li className="flex items-center">
                        <span className="mr-2 text-gray-700 dark:text-gray-50">MongoDB</span> - NoSQL database to store user data.
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-gray-700 dark:text-gray-50">Express.js</span> - Web framework for backend logic.
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-gray-700 dark:text-gray-50">React.js</span> - Front-end library for dynamic user interfaces.
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-gray-700 dark:text-gray-50">Node.js</span> - JavaScript runtime for server-side code.
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-gray-700 dark:text-gray-50">Apollo GraphQL</span> - Query language for the API and data management.
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-gray-700 dark:text-gray-50">Chart.js</span> - Interactive charting library for visualizing data.
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 text-gray-700 dark:text-gray-50">Passport.js</span> - Authentication middleware for user session management.
                      </li>
                    </ul>
                  </div>
                </div>
                <button className="px-6 py-1 m-2 rounded-md bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-300 mt-4">
                  <a
                    href="https://github.com/saikiran4824/Tracker-Live-Dashboard-GRAPHQL"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit
                  </a>
                </button>
              </div>
            </div>
            
            <div className="p-4 md:w-[80%] w-full">
  <div className="h-full bg-gray-200 dark:bg-gray-900 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative shadow-lg">
    <h1 className="title-font sm:text-3xl text-xl font-medium text-gray-900 dark:text-white mb-6 underline decoration-gray-900 dark:decoration-white">
      EV Analytics Dashboard
    </h1>
    <div className="flex flex-wrap gap-8 items-center">
      {/* Left side (Project description) */}
      <div className="flex-1 md:pr-8 md:border-r-2 border-gray-300 dark:border-gray-600">
        <p className="leading-relaxed mb-6 text-gray-700 dark:text-gray-50">
          The EV Analytics Dashboard is a comprehensive and interactive application designed to provide actionable insights into Electric Vehicle (EV) analytics. It empowers users to view trends, analyze EV data, and make informed decisions based on real-time insights.
        </p>
        <p className="leading-relaxed mb-6 text-gray-700 dark:text-gray-50">
          Key features include dynamic and interactive data visualizations powered by Apex Charts, offering a clear and concise view of EV analytics. The dashboard is highly customizable, allowing users to personalize the layout and content according to their preferences. Real-time data updates and notifications keep users informed about the latest trends in the EV industry. The design is responsive, ensuring users can seamlessly access and interact with the dashboard across various devices.
        </p>
      </div>

      {/* Right side (Technologies used) */}
      <div className="flex-1 space-y-6 pl-8">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
          Technologies Used
        </h3>
        <ul className="space-y-4 text-gray-700 dark:text-gray-50">
          <li className="flex items-center">
            <span className="mr-2 text-gray-700 dark:text-gray-50">Tailwind CSS</span> - Utility-first CSS framework for fast and responsive design.
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-gray-700 dark:text-gray-50">Apex Charts</span> - Library for creating dynamic and interactive data visualizations.
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-gray-700 dark:text-gray-50">Real-time Data Updates</span> - Keeps the dashboard updated with the latest information.
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-gray-700 dark:text-gray-50">Customizable Interface</span> - Allows users to personalize their dashboard layout and content.
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-gray-700 dark:text-gray-50">Responsive Design</span> - Ensures smooth interaction on any device.
          </li>
        </ul>
      </div>
    </div>
    <button className="px-6 py-1 m-2 rounded-md bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-300 mt-4">
  <a
    href="https://github.com/saikiran4824/Dashboard-with-Analytics"
    target="_blank"
    rel="noopener noreferrer"
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
