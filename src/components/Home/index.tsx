import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageBlogs from '@site/src/components/HomepageBlogs';
import {Content} from '@theme/BlogPostPage';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)} id="about">
      <div className="container">
        <div className="row">
          <div className="col col--10 col--offset-1">
            <div className={styles.heroContent}>
              <Heading as="h1" className={styles.heroTitle}>
                Glasskube
              </Heading>
              <div className={styles.divider}></div>
              <p className={styles.heroTagline}>
                Professional AI & Cloud Computing Services
              </p>
              <p className={styles.heroDescription}>
                A software and AI engineering company operating out of{' '}
                <span className={styles.location}>Chicago</span> and{' '}
                <span className={styles.location}>Vienna</span>.
              </p>

              <div className={styles.expertiseSection} id="expertise">
                <p className={styles.sectionLabel}>Areas of Expertise</p>
                <div className={styles.expertiseGrid}>
                  <div className={styles.expertiseItem}>
                    <div className={styles.expertiseIcon}>🤖</div>
                    <div className={styles.expertiseName}>
                      Artificial Intelligence
                    </div>
                  </div>
                  <div className={styles.expertiseItem}>
                    <div className={styles.expertiseIcon}>🔗</div>
                    <div className={styles.expertiseName}>
                      Model Context Protocol
                    </div>
                  </div>
                  <div className={styles.expertiseItem}>
                    <div className={styles.expertiseIcon}>☁️</div>
                    <div className={styles.expertiseName}>Cloud Computing</div>
                  </div>
                  <div className={styles.expertiseItem}>
                    <div className={styles.expertiseIcon}>⚡</div>
                    <div className={styles.expertiseName}>
                      Efficient Programming
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.statsSection}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>4K+</div>
                  <div className={styles.statLabel}>GitHub Stars</div>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>3+</div>
                  <div className={styles.statLabel}>Years in Business</div>
                </div>
                <div className={styles.statDivider}></div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>Open Source</div>
                  <div className={styles.statLabel}>Commitment</div>
                </div>
              </div>

              <div className={styles.legacySection}>
                <p className={styles.legacyText}>
                  Previously created a Kubernetes package manager and operator
                  <span className={styles.deprecated}> (now deprecated)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export interface HomepageProps {
  homePageBlogMetadata: unknown;
  readonly recentPosts: readonly HomepagePost[];
}

interface HomepagePost {
  readonly Preview: Content;
  readonly metadata: {
    title: string;
    description: string;
    frontMatter: {image: string};
  };
}

export default function Home({
  homePageBlogMetadata,
  recentPosts,
}: HomepageProps): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Glasskube"
      description="A software and AI engineering company operating out of Chicago and Vienna. Creators of the software distribution platform distr.sh.">
      <main>
        <section className={styles.productSectionStandalone} id="products">
          <div className="container">
            <div className="row">
              <div className="col col--10 col--offset-1">
                <div className={styles.productCard}>
                  <p className={styles.sectionLabel}>Featured Product</p>
                  <Link
                    to="https://distr.sh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.productLink}>
                    <span className={styles.productName}>distr.sh</span>
                    <span className={styles.productDescription}>
                      Enterprise software distribution platform for self-managed
                      deployments
                    </span>
                  </Link>
                  <div className={styles.productActions}>
                    <Link
                      to="https://github.com/glasskube/distr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.productButton}>
                      GitHub
                    </Link>
                    <Link
                      to="https://cal.glasskube.com/team/gk/demo?overlayCalendar=true"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.productButton}>
                      Get a Demo
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <HomepageHeader />

        <section id="blog" className={styles.blogSection}>
          <HomepageBlogs
            homePageBlogMetadata={homePageBlogMetadata}
            recentPosts={recentPosts}
          />
        </section>
      </main>
    </Layout>
  );
}
