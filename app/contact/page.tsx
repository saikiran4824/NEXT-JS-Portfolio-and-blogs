import { Button } from '@/components/ui/button';
import React from 'react';

const Contact = () => {
  return (
    <>
    <div className='bg-white dark:bg-black text-gray-900 dark:text-white'>
      <h2 className="text-3xl font-bold  title-font my-4 text-center">Connect with me:</h2>

      <div className="flex  min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
        <div className="max-w-3xl mx-auto p-6">

          {/* Contact Information Section */}
          <div className="flex flex-col items-center gap-4 mb-8">
            <p className="flex items-center justify-center gap-2 text-lg">
              <span>✉️</span>
              <a href="mailto:saikiran4824@gmail.com" className="hover:text-gray-600 dark:hover:text-gray-300">
                saikiran4824@gmail.com
              </a>
            </p>

            <p className="flex items-center justify-center gap-2 text-lg">
              <span>📞</span>
              <a href="tel:+1234567890" className="hover:text-gray-600 dark:hover:text-gray-300">
                +91 9063119589
              </a>
            </p>

            <p className="flex items-center justify-center gap-2 text-lg">
              <a href="https://linkedin.com/in/saikiran4824" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gray-600 dark:hover:text-gray-300">
                <img
                  src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg"
                  alt="LinkedIn"
                  height={20}
                  width={20}
                />
                LinkedIn
              </a>
            </p>

            <p className="flex items-center justify-center gap-2 text-lg">
              <a href="https://twitter.com/saikiran4824" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gray-600 dark:hover:text-gray-300">
                <img
                  src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg"
                  alt="Twitter"
                  height={20}
                  width={20}
                />
                Twitter
              </a>
            </p>

            <p className="flex items-center justify-center gap-2 text-lg">
              <a href="https://github.com/saikiran4824" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-gray-600 dark:hover:text-gray-300">
                <img
                  src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/github.svg"
                  alt="GitHub"
                  height={20}
                  width={20}
                />
                GitHub
              </a>
            </p>
          </div>

          {/* Resume Button */}
          <div className="text-center mt-4">
            <Button className="px-6 py-2 rounded-md bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-300">
              <a
                href="/SaiKIran-Resume (1).pdf"
                download="Saikiran_Resume.pdf"
                className="text-white dark:text-black"
              >
                Download My Resume
              </a>
            </Button>
          </div>
          <h2 className="text-4xl font-extrabold title-font my-6 text-center text-gray-900 dark:text-white 
  border-b-4 border-transparent hover:border-black hover:text-black 
  transition-all duration-300 ease-in-out transform hover:scale-105">
  SAI KIRAN RAVIRALA
</h2>

        </div>
      </div>
      </div>
    </>
  );
};

export default Contact;
