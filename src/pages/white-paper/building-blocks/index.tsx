import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import React from 'react';
import clsx from 'clsx';
import WhitePaperForm from '@site/src/pages/white-paper/building-blocks/WhitePaperForm';
import DefaultCTA from '@site/src/components/cta/DefaultCTA/defaultCTA';
import Testimonials from '@site/src/components/Testimonials';

const TITLE = 'Building Blocks for Modern Self-Managed Software Distribution';
const DESCRIPTION =
  'These building blocks lay the foundation of a successful self-managed software distribution offering that both ' +
  'software vendors and end-customers can depend on.';

function WhitePaperLayout() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={clsx('col', 'margin-top--lg')}>
            <div className={styles.iconBorder}>
              <img
                src="/img/white-paper/Glasskube%20Building%20Blocks%20White%20Paper%20Teaser.png"
                className={styles.image}
                alt=""
              />
            </div>
          </div>
          <div className={clsx('col col--6', 'margin-top--lg')}>
            <WhitePaperForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhitePaperHeader() {
  return (
    <section className="margin-top--lg text--center">
      <Heading as="h1">{TITLE}</Heading>
      <p>
        <strong>{DESCRIPTION}</strong>
      </p>
    </section>
  );
}

export default function PackagePage(): JSX.Element {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <main className="margin-vert--lg">
        <WhitePaperHeader />
        <WhitePaperLayout />
        <div className="margin-top--xl"></div>
        <Testimonials />
        <div className="container">
          <div className="row">
            <div className="col col--10 col--offset-1">
              <DefaultCTA />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
