import CustomGitHubButton from '@site/src/components/buttons/CustomGitHubButton';
import DemoButton from '@site/src/components/buttons/DemoButton';
import SignupForWaitlistButton from '@site/src/components/buttons/SignupForWaitlistButton';
import styles from './styles.module.css';

function Index() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.center}>
          <CustomGitHubButton href="https://github.com/glasskube/distr" />
        </div>
      </div>
      <div className={styles.ctaWrapper}>
        <div className={styles.center}>
          <DemoButton additionalClassNames={''} />
          &nbsp;&nbsp;
          <SignupForWaitlistButton additionalClassNames={''} />
        </div>
      </div>
    </>
  );
}

export default Index;
