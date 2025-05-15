import Link from '@docusaurus/Link';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import useBaseUrl from '@docusaurus/useBaseUrl';
import type {Props} from '@theme/BlogPostItem';
import BlogPostItemContent from '@theme/BlogPostItem/Content';
import BlogPostItemFooter from '@theme/BlogPostItem/Footer';
import BlogPostItemHeader from '@theme/BlogPostItem/Header';
import BlogSidebar from '@theme/BlogSidebar';
import TOC from '@theme/TOC';
import clsx from 'clsx';
import BlogPostItemHeaderAuthors from './Header/Authors';
import BlogPostItemHeaderInfo from './Header/Info';
import BlogPostItemHeaderTitle from './Header/Title';
import styles from './styles.module.css';

export default function BlogPostItem({
  children,
  className,
}: Props): JSX.Element {
  const post = useBlogPost();

  const isPage = post.isBlogPostPage;
  const isTOC = isPage && post.toc?.length > 0;

  // Post preview as a card
  if (!isPage) {
    return (
      <Link to={post.metadata.permalink} className={styles.postLink}>
        <article
          className={clsx('card', 'shadow--tl', className, styles.postCard)}>
          <img
            src={useBaseUrl(post.frontMatter.image)}
            style={{
              objectFit: 'cover',
              height: '200px',
            }}
            alt="article image"
          />
          <header className={styles.postCardHeader}>
            <BlogPostItemHeaderTitle />
            <div className={styles.postCardBottom}>
              <div>
                <BlogPostItemHeaderAuthors />
                <BlogPostItemHeaderInfo />
              </div>
              <div className={styles.readMore}>Read more {`->`}</div>
            </div>
          </header>
        </article>
      </Link>
    );
  }

  // Full post page
  return (
    <main>
      <article className={clsx('container margin-vert--lg', className)}>
        <div className="row">
          <div className="col col--3 ">
            <BlogSidebar></BlogSidebar>
          </div>
          <div className={'col col--7'}>
            <BlogPostItemHeader />
            <BlogPostItemContent>{children}</BlogPostItemContent>
            <BlogPostItemFooter />
          </div>

          {isTOC && (
            <div className="col col--2">
              <TOC toc={post.toc} />
            </div>
          )}
        </div>
      </article>
    </main>
  );
}
