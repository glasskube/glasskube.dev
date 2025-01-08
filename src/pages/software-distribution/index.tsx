import Layout from '@theme/Layout';
import React from 'react';
import Heading from '@theme/Heading';
import DemoButton from '@site/src/components/buttons/DemoButton';
import styles from './index.module.css';
import DefaultCTA from '@site/src/components/cta/DefaultCTA/defaultCTA';
import Testimonials from '@site/src/components/Testimonials';
import NewsletterSignup from '@site/src/components/NewsletterSignup';
import SoftwareDistributionFeatures from '@site/src/pages/software-distribution/_components/SoftwareDistributionFeatures';
import Link from '@docusaurus/Link';

function Header() {
  return (
    <section className="margin-top--lg margin-bottom--lg text--center">
      <Heading as="h1" className={styles.heroHeading}>
        Software Distribution
      </Heading>
      <p>
        Distributing software across diverse customer environments with
        different configurations can be tricky.
        <br />
        The following building blocks have been the most crucial in our
        experience.
      </p>
      <p>
        <strong>
          For a full list and details of building blocks, please refer to our
          <Link to="/white-paper/building-blocks/"> white paper</Link>.
        </strong>
      </p>
      <DemoButton additionalClassNames={'light button--lg margin-top--lg'} />
    </section>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Software Distribution"
      description="Building Blocks for Modern On-Prem Software Distribution">
      <main className="margin-vert--lg">
        <Header />
        <SoftwareDistributionFeatures />
        <div className="container">
          <div className="row">
            <div className="col col--10 col--offset-1">
              <DefaultCTA />
            </div>
          </div>
        </div>
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
