import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import ThemedImage from '@theme/ThemedImage';
import clsx from 'clsx';
import styles from './styles.module.css';

type ScreenshotItem = {
  title: string;
  description: JSX.Element;
  screenshotAltText: string;
  lightScreenshotUrl: string;
  darkScreenshotUrl: string;
};

const ScreenshotList: ScreenshotItem[] = [
  {
    title: 'Software Distributor Platform',
    description: (
      <>
        Onboard customers faster, distribute artifacts and update deployments
        easily and troubleshoot issues with confidence.
        <br />
        <Link
          className="button button--secondary margin-top--md"
          to="https://signup.distr.sh/">
          Get started for free
        </Link>
      </>
    ),
    screenshotAltText: 'Software distribution platform',
    lightScreenshotUrl: '/img/screenshots/distr/distr-dashboard-light.webp',
    darkScreenshotUrl: '/img/screenshots/distr/distr-dashboard-dark.webp',
  },
  {
    title: 'Customer Portal',
    description: (
      <>
        Give your customers a simple, but powerful portal to simplify their
        installations and artifact download and stay on top of their deployments
        and potential security vulnerability in used images.
        <br />
        <Link
          className="button button--secondary margin-top--md"
          to="https://signup.distr.sh/">
          Get started for free
        </Link>
      </>
    ),
    screenshotAltText: 'Glasskube overview page',
    lightScreenshotUrl:
      '/img/screenshots/distr/distr-customer-portal-light.webp',
    darkScreenshotUrl: '/img/screenshots/distr/distr-customer-portal-dark.webp',
  },
];

function Screenshot(item: ScreenshotItem) {
  return (
    <>
      <div className={clsx('col col--3')}>
        <div className={styles.sticky}>
          <Heading as="h3" className={styles.borderLeft}>
            {item.title}
          </Heading>
          <p>{item.description}</p>
        </div>
      </div>
      <div className={clsx('col col--9 padding--lg')}>
        <div
          className="app-frame mac dark borderless shadow--tl"
          data-url="app.distr.sh">
          <ThemedImage
            alt={item.screenshotAltText}
            sources={{
              light: item.lightScreenshotUrl,
              dark: item.darkScreenshotUrl,
            }}
          />
        </div>
      </div>
    </>
  );
}

export default function HomepageProducts(): JSX.Element {
  return (
    <section className={styles.screenshots}>
      <div className="container margin-top--lg">
        <div className="row">
          <div className="col text--center">
            <Heading as="h2">
              From onboarding to update distribution, and support—all in one
              platform.
            </Heading>
          </div>
        </div>
        {ScreenshotList.map((item, idx) => (
          <div className="row" key={idx}>
            <Screenshot {...item} />
          </div>
        ))}
      </div>
    </section>
  );
}
