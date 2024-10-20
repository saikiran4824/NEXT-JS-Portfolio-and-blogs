import { Button } from '@/components/ui/button';
import React from 'react';

const Contact = () => {
  return (
    <section className="text-gray-600 dark:text-gray-300 body-font relative">
  <div className="bg-white dark:bg-gray-950 flex flex-col md:ml-auto md:py-8 mt-8 md:mt-0 px-4 sm:px-10 sm:py-10 md:px-40 lg:px-60">
    <h2 className="text-gray-900 dark:text-white text-lg mb-1 font-medium title-font">Get In Touch</h2>
    <p className="leading-relaxed mb-5 text-gray-600 dark:text-gray-400">
      Have questions, feedback, or want to collaborate? Drop a message below!
    </p>
    <div className="relative mb-4">
      <label htmlFor="name" className="leading-7 text-sm text-gray-600 dark:text-gray-400">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        className="w-full bg-gray-100 dark:bg-gray-900 rounded border border-gray-300 dark:border-gray-600 focus:border-gray-500 dark:focus:border-gray-500 focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600 text-base outline-none text-gray-700 dark:text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
    </div>
    <div className="relative mb-4">
      <label htmlFor="email" className="leading-7 text-sm text-gray-600 dark:text-gray-400">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        className="w-full bg-gray-100 dark:bg-gray-900 rounded border border-gray-300 dark:border-gray-600 focus:border-gray-500 dark:focus:border-gray-500 focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600 text-base outline-none text-gray-700 dark:text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
    </div>
    <div className="relative mb-4">
      <label htmlFor="message" className="leading-7 text-sm text-gray-600 dark:text-gray-400">Message</label>
      <textarea
        id="message"
        name="message"
        className="w-full bg-gray-100 dark:bg-gray-900 rounded border border-gray-300 dark:border-gray-600 focus:border-gray-500 dark:focus:border-gray-500 focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600 h-32 text-base outline-none text-gray-700 dark:text-gray-300 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
      ></textarea>
    </div>
    <a href="mailto:saikiran4824@gmail.com"></a>
    <Button>
    
      Send Message
    </Button> <a/>
    <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
      Your privacy is important to us. We won't share your details with anyone.
    </p>
  </div>
</section>

  
  );
};

export default Contact;
