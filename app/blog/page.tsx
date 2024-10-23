import React from "react"; 
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import fs from "fs/promises"; // Use fs/promises for async operations
import matter from "gray-matter";
import { Metadata } from "next";

// Blog Type Interface
interface BlogType {
  slug: string; 
  title: string;
  description: string; 
  imageUrl?: string;
}

// BlogList Component
const BlogList = async () => {
  // Read the 'content' directory to get all blog files
  const dirContent = await fs.readdir("content");

  // Map over the files and extract front matter (metadata) using gray-matter
  const blogs = await Promise.all(
    dirContent.map(async (file) => {
      const fileContent = await fs.readFile(`content/${file}`, "utf-8");
      const { data } = matter(fileContent);
      return {
        slug: data.slug,
        title: data.title,
        description: data.description,
        imageUrl: data?.imageUrl,
      };
    })
  );

  // Check if blogs are available
  if (!blogs || blogs.length === 0) {
    return <p>No blogs available.</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center my-2">Our Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog: BlogType, index: number) => (
          <div key={index} className="shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-64 object-cover object-top"
              src={blog.imageUrl ? blog.imageUrl : "/blogimg.jpg"}
              alt={blog.title}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
              <p className="mb-4">{blog.description}</p>
              <Link
                href={`/blogpost/${blog.slug}`}
                className={buttonVariants({ variant: "default" })}
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Metadata for the Blog Page
export const metadata: Metadata = {
  title: "Blogs - Sai Kiran",
  description:
    "A comprehensive blog for coders of all levels. Stay up-to-date with the latest trends in software development, learn best practices, and enhance your coding skills with in-depth articles and guides.",
};

export default BlogList;
