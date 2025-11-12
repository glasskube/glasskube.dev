import styles from './styles.module.css';
import TalkToFoundersButton from '@site/src/components/buttons/TalkToFoundersButton';

function Index() {
  return (
    <>
      <div className={styles.ctaWrapper}>
        <div className={styles.center}>
          <TalkToFoundersButton additionalClassNames={''} />
        </div>
      </div>
    </>
  );
}

export default Index;
