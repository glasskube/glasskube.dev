import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import type {Props} from '@theme/BlogPostItem/Header/Title';
import clsx from 'clsx';

import styles from './styles.module.css';

export default function BlogPostItemHeaderTitle({
  className,
}: Props): JSX.Element {
  const {metadata, isBlogPostPage} = useBlogPost();
  const {title} = metadata;
  const TitleHeading = isBlogPostPage ? 'h1' : 'h2';
  return (
    <TitleHeading className={clsx(styles.title, className)}>
      {title}
    </TitleHeading>
  );
}
