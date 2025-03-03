import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import {Content} from '@theme/BlogPostPage';
import styles from './index.module.css';
import React from 'react';
import SignupForWaitlistButton from '@site/src/components/buttons/SignupForWaitlistButton';
import useBaseUrl from '@docusaurus/core/lib/client/exports/useBaseUrl';
import Image from '@theme/IdealImage';
import HomepageBlogs from '@site/src/components/HomepageBlogs';
import DemoButton from '@site/src/components/buttons/DemoButton';
import Link from '@docusaurus/Link';
import HomepageProducts from '@site/src/components/HomepageProducts';
import DefaultCTA from '@site/src/components/cta/DefaultCTA/defaultCTA';
import Testimonials from '@site/src/components/Testimonials';
import NewsletterSignup from '@site/src/components/NewsletterSignup';
import {EmblaOptionsType} from 'embla-carousel';
import EmblaCarousel from '@site/src/components/HomeCarousel/EmblaCarousel';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  const OPTIONS: EmblaOptionsType = {dragFree: false, loop: true};
  const SLIDE_COUNT = 3;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="row row--no-gutters">
          <div className="col">
            <Heading as="h2" className={styles.heroSuperTitle}>
              Introducing Distr
            </Heading>
            <Heading as="h1" className={styles.heroTitle}>
              {siteConfig.tagline}
            </Heading>
          </div>
        </div>
        <div className="row row--no-gutters">
          <div className={clsx('col', styles.heroCol)}>
            <div className={styles.buttons}>
              <DemoButton additionalClassNames={'button--lg light'} />
              <SignupForWaitlistButton
                additionalClassNames={'button--lg light'}
              />
            </div>
            <div className={styles.yc}>
              <h4>Backed by</h4>
              <Link
                to="https://www.ycombinator.com/companies/glasskube"
                target="_blank"
                rel="noreferrer">
                <Image
                  alt="Glasskube backed by Y Combinator"
                  className={styles.ycImg}
                  img={useBaseUrl('/img/yc/yc.svg')}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="row row--no-gutters margin-top--lg margin-bottom--lg">
          <div className="col">
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
          </div>
        </div>
      </div>
    </header>
  );
}

function HomepageVideo() {
  return (
    <div
      className={clsx(
        'container-fluid',
        'text--center',
        styles.backgroundSecondary,
      )}>
      <div className="container text--center">
        <div className="row">
          <div className="col col--8 col--offset-2 margin-vert--lg">
            <Heading as={'h2'} className={styles.colorWhite}>
              Distr Demo Video
            </Heading>
            <div
              style={{
                position: 'relative',
                height: '0',
                paddingBottom: '56.25%',
              }}>
              <iframe
                src="https://www.loom.com/embed/847a5f2161944150b8685536d73c7b70?sid=71b060ee-21b3-4c1f-8bbb-25c01422a45c"
                frameBorder="0"
                allowFullScreen
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  top: '0',
                  left: '0',
                }}></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LogoSlider() {
  return (
    <div className={clsx('row', styles.sliderBg)}>
      <div className={clsx(styles.sliderWrap, 'margin-bottom--lg')}>
        <div className={styles.sliderContainer}>
          <LogoGrid />
          <LogoGrid />
        </div>
      </div>
    </div>
  );
}

function LogoGrid() {
  return (
    <div className={styles.sliderGrid}>
      <img
        src="https://github.com/user-attachments/assets/5e08ab88-1cfd-4854-8e8d-c9dc0c75c0b7"
        width={200}
      />
      <img
        src="https://github.com/user-attachments/assets/c4e055e2-4a12-48e6-91a7-5b812a775881"
        width={200}
      />
      <img
        src="https://github.com/user-attachments/assets/5104fce0-b156-456f-83ac-480cedb42516"
        width={200}
      />
      <img
        src="https://github.com/user-attachments/assets/69532438-7ca7-4085-9fa2-9f20b1ea7a60"
        width={200}
      />
      <img
        src="https://github.com/user-attachments/assets/7e94c101-2b63-4432-ac80-a00ceeca8309"
        width={200}
      />
      <img
        src="https://github.com/user-attachments/assets/59a281a7-651b-43fd-93ea-6ad5a0661ccb"
        width={200}
      />
      <img
        src="https://github.com/user-attachments/assets/bfd56186-2538-41ab-b2a9-3d3fb64b878f"
        width={200}
      />
      <img
        src="https://github.com/user-attachments/assets/ad8628e4-b866-4d31-992c-3b12633b3538"
        width={200}
      />
      <img
        src="https://github.com/user-attachments/assets/a7648681-0145-4ee3-a94c-b0b596d81979"
        width={200}
      />
      <img
        src="https://github.com/user-attachments/assets/e3cf517a-add2-47cb-81fc-b7bd136f08dc"
        width={200}
      />
      <img
        src="https://github.com/user-attachments/assets/008137ed-ee3a-43b9-be8b-8c96aaefc170"
        width={200}
      />
      <img
        src="https://github.com/user-attachments/assets/4bc5298d-6b14-4d56-ba1b-c82c27711bdc"
        width={200}
      />
    </div>
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
      title={siteConfig.tagline}
      description="Featuring a GUI and a CLI. Glasskube packages are dependency aware, GitOps ready and get automatic updates via a central public package repository.">
      <HomepageHeader />
      <main>
        <LogoSlider />
        <HomepageFeatures />
        <HomepageProducts />
        <HomepageVideo />
        <HomepageBlogs
          homePageBlogMetadata={homePageBlogMetadata}
          recentPosts={recentPosts}
        />
        <Testimonials />
        <div className="container">
          <div className="row">
            <div className="col col--10 col--offset-1">
              <DefaultCTA />
            </div>
          </div>
        </div>
        <NewsletterSignup />
      </main>
    </Layout>
  );
}
