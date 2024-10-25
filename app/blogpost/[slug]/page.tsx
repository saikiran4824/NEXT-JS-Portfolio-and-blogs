import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import React from 'react';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import matter from 'gray-matter';
import fs from 'fs/promises';
import path from 'path';
import Onthispage from '@/components/Onthispage';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { rehypePrettyCode } from 'rehype-pretty-code';
import { transformerCopyButton } from '@rehype-pretty/transformers';

type Props = {
  params: { slug: string };
};

// Blog Page Component
export default async function BlogPage({ params }: Props) {
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypePrettyCode, {
      theme: 'github-dark',
      transformers: [
        transformerCopyButton({
          visibility: 'always',
          feedbackDuration: 3_000,
        }),
      ],
    })
    .use(rehypeAutolinkHeadings);

  const filePath = path.join(process.cwd(), 'content', `${params.slug}.md`);

  try {
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    const htmlContent = (await processor.process(content)).toString();

    return (
      <MaxWidthWrapper className="prose dark:prose-invert">
        <div className="flex">
          <div className="px-16">
            <h1>{data.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: htmlContent }}></div>
          </div>
          <Onthispage className="text-sm w-[50%]" htmlContent={htmlContent} />
        </div>
      </MaxWidthWrapper>
    );
  } catch (error) {
    console.error(`Error loading file: ${filePath}`, error);
    return <div>Post not found</div>;
  }
}

// Generates metadata for the blog post
export async function generateMetadata({ params }: Props) {
  const filePath = path.join(process.cwd(), 'content', `${params.slug}.md`);

  try {
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const { data } = matter(fileContent);

    return {
      title: `${data.title} - Sai Kiran`,
      description: data.description,
    };
  } catch (error) {
    console.error(`Error reading metadata for file: ${filePath}`, error);
    return {
      title: 'Post Not Found - Sai Kiran',
      description: 'This post could not be found.',
    };
  }
}

// Generates static paths for each markdown file
export async function generateStaticParams() {
  const contentDir = path.join(process.cwd(), 'content');
  const files = await fs.readdir(contentDir);

  return files.map((file) => ({
    slug: file.replace(/\.md$/, ''),
  }));
}
