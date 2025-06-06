import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {BlogDiscussion} from '@site/src/components/GiscusWrapper';
import ReadMoreLink from '@theme/BlogPostItem/Footer/ReadMoreLink';
import EditMetaRow from '@theme/EditMetaRow';
import TagsListInline from '@theme/TagsListInline';
import clsx from 'clsx';

export default function BlogPostItemFooter(): JSX.Element | null {
  const {metadata, isBlogPostPage} = useBlogPost();
  const {enableComments = true} = metadata.frontMatter;
  const {
    tags,
    title,
    editUrl,
    hasTruncateMarker,
    lastUpdatedBy,
    lastUpdatedAt,
  } = metadata;

  // A post is truncated if it's in the "list view" and it has a truncate marker
  const truncatedPost = !isBlogPostPage && hasTruncateMarker;

  const tagsExists = tags.length > 0;

  const renderFooter = tagsExists || truncatedPost || editUrl;

  if (!renderFooter) {
    return null;
  }

  // BlogPost footer - details view
  if (isBlogPostPage) {
    const canDisplayEditMetaRow = !!(editUrl || lastUpdatedAt || lastUpdatedBy);

    return (
      <footer className="docusaurus-mt-lg card__footer">
        {tagsExists && (
          <div
            className={clsx(
              'row',
              'margin-top--sm',
              ThemeClassNames.blog.blogFooterEditMetaRow,
            )}>
            <div className="col">
              <TagsListInline tags={tags} />
            </div>
          </div>
        )}
        {canDisplayEditMetaRow && (
          <EditMetaRow
            className={clsx(
              'margin-top--sm',
              ThemeClassNames.blog.blogFooterEditMetaRow,
            )}
            editUrl={editUrl}
            lastUpdatedAt={lastUpdatedAt}
            lastUpdatedBy={lastUpdatedBy}
          />
        )}
        {enableComments && <BlogDiscussion />}
      </footer>
    );
  }
  // BlogPost footer - list view
  else {
    return (
      <footer className="row card__footer">
        {tagsExists && (
          <div className={clsx('col', {'col--9': truncatedPost})}>
            <TagsListInline tags={tags} />
          </div>
        )}
        {truncatedPost && (
          <div
            className={clsx('col text--right', {
              'col--3': tagsExists,
            })}>
            <ReadMoreLink blogPostTitle={title} to={metadata.permalink} />
          </div>
        )}
      </footer>
    );
  }
}
