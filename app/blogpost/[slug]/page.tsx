import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import React from 'react';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkFrontmatter from 'remark-frontmatter';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import rehypeHighlight from 'rehype-highlight';
import matter from 'gray-matter';
import fs from 'fs/promises'; // Use promises-based fs module
import Onthispage from '@/components/Onthispage';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { rehypePrettyCode } from 'rehype-pretty-code';
import { transformerCopyButton } from '@rehype-pretty/transformers';
import { Metadata, ResolvingMetadata } from 'next';

// Type definition for props
type Props = {
  params: { slug: string; title: string; description: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// Blog Page Component
export default async function BlogPage({ params }: { params: { slug: string } }) {
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

  const filePath = `content/${params.slug}.md`;

  try {
    // Read file content asynchronously
    const fileContent = await fs.readFile(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    // Process the markdown content to HTML
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
    return <div>Post not found</div>; // Return a fallback UI in case of error
  }
}

// Generate metadata function for SEO
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const filePath = `content/${params.slug}.md`;

  try {
    // Read file content asynchronously
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