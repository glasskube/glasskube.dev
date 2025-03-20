import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';

export default function SREConRaffle(): JSX.Element {
  return (
    <Layout
      title="Glasskube SREcon Raffle"
      description="Join our SREcon raffle">
      <Head>
        {/* HubSpot Form Script */}
        <script charSet="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
      </Head>
      <main className="container margin-vert--lg">
        <h1>Glasskube SREcon Raffle</h1>
        <div id="hubspotForm">
          <script
            dangerouslySetInnerHTML={{
              __html: `
                hbspt.forms.create({
                  region: "YOUR_REGION",
                  portalId: "YOUR_PORTAL_ID",
                  formId: "YOUR_FORM_ID",
                  target: "#hubspotForm",
                  onFormSubmitted: function() {
                    window.location.href = '/';
                  }
                });
              `,
            }}
          />
        </div>
      </main>
    </Layout>
  );
}