'use client';

import { Button } from '@/components/ui/button';
import Typed from 'typed.js';
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion for animations
import Image from 'next/image';
import './globals.css';

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Coding Enthusiast',
        'Prompt Engineer',
        'Problem Solver',
        'DevOps Enthusiast',
        'Agile Practitioner',
      ],
      typeSpeed: 80,
      backSpeed: 50,
      backDelay: 1500,
      loop: true, // Enables continuous loop
    });

    return () => typed.destroy(); // Cleanup to avoid memory leaks
  }, []);

  return (
    <main className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-3xl opacity-50 z-[-1] animate-bg-motion" />

      <section className="text-gray-600 dark:text-gray-300 body-font relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="bg-white dark:bg-gray-950 flex flex-col md:ml-auto md:py-8 mt-8 md:mt-0 px-4 sm:px-10 md:px-40 lg:px-60"
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-900 dark:text-white text-2xl font-bold mb-3"
          >
            Hey 👋, I am <span className="font-semibold">SAI KIRAN RAVIRALA</span>
          </motion.h2>

          <div className="flex items-center mb-5">
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl leading-snug text-gray-800 dark:text-gray-200"
            >
              <span className="font-semibold underline decoration-primary">
                <span
                  ref={el}
                  className="text-indigo-500 dark:text-purple-400 glow-effect"
                />
              </span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <strong>Programming Languages:</strong> JavaScript, TypeScript, Python, Java, PHP
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4"
          >
            <strong>Frontend:</strong> React, Next.js, Redux, Vue.js, Svelte, Angular, React Native, Tailwind CSS, Material UI, Chakra UI, ShadCN, Webpack, Vite, Zustand, TanStack Query, Framer Motion, Three.js, D3.js
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4"
          >
            <strong>Backend:</strong> Node.js, Express.js, Django, Flask, Java Spring Boot, Laravel, FastAPI, GraphQL, RESTful APIs, PostgreSQL, MySQL, MongoDB, Redis, Prisma, Docker, Kubernetes, AWS Lambda, Firebase, Nginx
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-4"
          >
            <strong>Other Tools & Technologies:</strong> CI/CD, GitHub, Git, Terraform, Jenkins, Vercel, Postman, Swagger, Jest, Cypress, Playwright, Selenium, Enzyme, Testing Library
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-4"
          >
            <strong>Agile & Project Management:</strong> Scrum, Kanban, Jira, Notion
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-4"
          >
            Passionate Full-Stack Developer skilled in modern frontend & backend technologies, specializing in scalable web solutions. I develop responsive UIs with React, Next.js, and Tailwind CSS, and build robust backend systems using Django, Flask, and Spring Boot.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-4"
          >
            Expertise in API development, cloud infrastructure, and DevOps tools like Docker, Kubernetes, and AWS. I collaborate effectively with teams to optimize applications for performance, accessibility, and security.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-4"
          >
            Open to full-time and contract roles, contributing expertise in frontend, backend, and DevOps for scalable, high-performance web applications.
          </motion.p>
        </motion.div>
      </section>

      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute -top-10 left-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl opacity-40 animate-pulse glow-effect" />
        <div className="absolute -bottom-20 right-1/3 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-40 animate-pulse glow-effect" />
      </div>
    </main>
  );
}

