import Link from '@docusaurus/Link';
import DemoButton from '@site/src/components/buttons/DemoButton';
import SignupForWaitlistButton from '@site/src/components/buttons/SignupForWaitlistButton';
import clsx from 'clsx';
import styles from './styles.module.css';

export default function BlogSidebar(): JSX.Element {
  return (
    <div className={clsx('card__header', styles.sidebar)}>
      <h3>About Glasskube</h3>
      <p>
        Glasskube is specialized in secure software distribution. Our Open
        Source Software Distribution Platform (
        <Link
          href={'https://github.com/glasskube/distr/'}
          target={'_blank'}
          rel="noreferrer">
          Distr
        </Link>
        ) is built for software vendors distributing their application to
        customer controlled environments. We are also the authors of a
        Kubernetes Package Manager.
      </p>
      <div className={styles.buttons}>
        <DemoButton additionalClassNames="" />
        <SignupForWaitlistButton additionalClassNames="" />
      </div>
    </div>
  );
}
