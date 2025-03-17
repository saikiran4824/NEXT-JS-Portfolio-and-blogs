'use client';
import { Button } from '@/components/ui/button';
import Typed from 'typed.js';
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  // Create reference to store the DOM element containing the animation
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Coding Enthusiast',
        'Web Developer',
        'Software Engineer',
        'Frontend Developer',
        'Full-Stack Developer',
        'JavaScript Developer',
        'Prompt Engineer',
        'React.js Developer',
        'Next.js Developer',
        'UI/UX Engineer',
        'Tech Innovator',
        'Open Source Contributor',
        'Problem Solver',
        'Tech Blogger',
        'AI-Powered Developer',
        'TypeScript Enthusiast',
        'DevOps Enthusiast',
        'Performance Optimizer',
        'GraphQL Developer',
        'API Integration Expert',
        'Agile Practitioner',
        'Data Structures & Algorithms Enthusiast',
        'Automation Engineer',
        'CI/CD Specialist',
      ],
      typeSpeed: 100,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <main>
      <section className="text-gray-600 dark:text-gray-300 body-font relative">
        <div className="bg-white dark:bg-gray-950 flex flex-col md:ml-auto md:py-8 mt-8 md:mt-0 px-4 sm:px-10 md:px-40 lg:px-60">
          <h2 className="text-gray-900 dark:text-white text-2xl mb-3 font-bold title-font">
            Hey👋, I am <span className="font-semibold">SAI KIRAN RAVIRALA</span>
          </h2>

          {/* Container for Name and Typed Animation */}
          <div className="flex items-center mb-5">
            <h1 className="text-xl leading-snug text-gray-800 dark:text-gray-200 ">
              
              <span className="font-semibold underline decoration-primary">
                <span ref={el} />
              </span>
            </h1>
          </div>

          {/* Skills, Technologies, and Details */}
          <p className="leading-relaxed mb-5 text-gray-600 dark:text-gray-300">
            <strong>Frontend:</strong> React | Redux | MERN Stack | React Native | Next.js | Vue.js | Svelte | SvelteKit | AngularJS
          </p>

          <p className="leading-relaxed mb-5 text-gray-600 dark:text-gray-300">
            <strong>Backend:</strong> Node.js | Java Spring Boot | PHP Laravel | Python Flask | Django | MySQL | MongoDB | GraphQL | Axios | Express.js | RESTful APIs | Docker | PostgreSQL | Redis
          </p>

          <p className="leading-relaxed mb-5 text-gray-600 dark:text-gray-300">
            <strong>Other Tools & Technologies:</strong> CI/CD | GitHub | Webpack | Jenkins | Kubernetes | Nginx | AWS | Firebase | Vercel | Docker | Terraform | Postman | Jest | ESLint | GIT | Swagger | Cypress | Puppeteer | Selenium | Testing Library | Enzyme
          </p>

          <p className="text-gray-600 dark:text-gray-300 mb-4">
            <strong>Programming Languages:</strong> JavaScript, TypeScript, Python, Java
          </p>

          <p className="text-gray-600 dark:text-gray-300 mb-4">
            <strong>Data Visualization:</strong> D3.js, Chart.js, Recharts
          </p>

          <p className="text-gray-600 dark:text-gray-300 mb-4">
            <strong>Agile Methodologies:</strong> Scrum, Kanban, Jira
          </p>

          <p className="leading-relaxed mb-5 text-gray-600 dark:text-gray-300">
            As a passionate Full-Stack Developer, I specialize in creating high-performance, user-friendly web solutions with a focus on responsive design, data visualization, and web optimization. I am proficient in both frontend and backend technologies, leveraging modern tools like React, JavaScript, HTML5, and CSS3 for the frontend, and Spring Boot, Flask, and Django for building robust REST APIs on the backend.
          </p>

          <p className="leading-relaxed mb-5 text-gray-600 dark:text-gray-300">
            My expertise goes beyond frontend development; I design and implement full-stack solutions that deliver intuitive, accessible, and efficient user experiences. On the frontend, I focus on creating responsive, visually appealing interfaces using modern design systems and frameworks like Material UI and Tailwind CSS. On the backend, I have hands-on experience building RESTful APIs using Spring Boot, Flask, and Django, ensuring that the data layer is robust, secure, and optimized for performance.
          </p>

          <p className="leading-relaxed mb-5 text-gray-600 dark:text-gray-300">
            I believe that successful projects stem from effective collaboration, and as such, I work closely with cross-functional teams—designers, backend developers, and stakeholders—to ensure that all aspects of the project are aligned with business objectives. Clear communication, adaptability, and a focus on delivering high-quality results are fundamental to my approach, and I thrive in fast-paced environments where these skills are crucial for timely project delivery.
          </p>

          <p className="leading-relaxed mb-5 text-gray-600 dark:text-gray-300">
            In addition to my technical expertise, I pride myself on my professional strengths. As a collaborative team player with excellent communication skills, I excel in cross-functional teams and am adept at adjusting to changing project requirements. I am results-driven, always focused on delivering high-quality, scalable solutions. With a passion for staying at the forefront of industry trends, I am open to contract roles, full-time opportunities, and collaborations, where I can contribute my expertise and drive innovation in the web development space.
          </p>
        </div>
      </section>
    </main>
  );
}
