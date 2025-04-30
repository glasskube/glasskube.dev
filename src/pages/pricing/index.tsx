import {translate} from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Pricing from './_components/PricingComponent';
import PricingFaq from '@site/src/pages/pricing/_components/PricingFaqComponent';
import NewsletterSignup from '@site/src/components/NewsletterSignup';
import Head from '@docusaurus/Head';
import React from 'react';
import PricingComparisionTable from '@site/src/pages/pricing/_components/PricingComparisionTableComponent';

const TITLE = translate({message: 'Pricing'});
const DESCRIPTION = translate({
  message: 'Software Distribution Platform',
});

function PricingHeader() {
  return (
    <section className="margin-top--lg margin-bottom--lg text--center">
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
      <Head>
        <script async src="/js/koala.js"></script>
      </Head>
      <main className="margin-vert--lg">
        <PricingHeader />
        <Pricing />
        <div className="margin-vert--xl" />
        <PricingComparisionTable />
        <div className="margin-vert--xl" />
        <PricingFaq />
        <div className="margin-vert--xl" />
        <NewsletterSignup />
      </main>
    </Layout>
  );
}
