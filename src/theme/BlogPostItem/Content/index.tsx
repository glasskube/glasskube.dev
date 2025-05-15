import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import {blogPostContainerID} from '@docusaurus/utils-common';
import type {Props} from '@theme/BlogPostItem/Content';
import MDXContent from '@theme/MDXContent';
import clsx from 'clsx';

export default function BlogPostItemContent({
  children,
  className,
}: Props): JSX.Element {
  const {isBlogPostPage} = useBlogPost();

  if (!isBlogPostPage) return null;

  return (
    <div
      // This ID is used for the feed generation to locate the main content
      id={isBlogPostPage ? blogPostContainerID : undefined}
      className={clsx('markdown', className, 'card__body')}>
      <MDXContent>{children}</MDXContent>
    </div>
  );
}
