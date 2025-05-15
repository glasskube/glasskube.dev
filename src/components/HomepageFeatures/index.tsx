import {faDocker} from '@fortawesome/free-brands-svg-icons';
import {IconDefinition} from '@fortawesome/free-regular-svg-icons';
import {faKey, faLightbulb} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Heading from '@theme/Heading';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: IconDefinition;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Container Registry',
    icon: faDocker,
    description: (
      <>
        OCI compliant container registry with granular access control, security
        scanning and detailed analytics.
      </>
    ),
  },
  {
    title: 'License Management',
    icon: faKey,
    description: (
      <>
        Restrict access based on custom software licenses with expiration dates,
        custom entitlements and usage.
      </>
    ),
  },
  {
    title: 'Deployment Agents',
    icon: faLightbulb,
    description: (
      <>
        Optional Docker Compose and Helm agents manage deployments, collect logs
        and metrics and allow remote troubleshooting.
      </>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4', 'margin-top--lg')}>
      <div className={clsx('text--center', styles.iconBorder)}>
        <FontAwesomeIcon icon={icon} size="4x" className={styles.iconHeight} />
        <Heading as="h3" className="margin-top--md">
          {title}
        </Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col text--center margin-top--xl">
            <Heading as="h2">
              The Distr Software Distribution Platform is the central place to
              manage all your self-managed, vpc and air-gapped customers.
            </Heading>
          </div>
        </div>
        <div className="row">
          {FeatureList.map((item, idx) => (
            <Feature key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
