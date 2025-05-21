import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import Link from '@docusaurus/Link';
import {FC} from 'react';

interface SignupForWaitlistButtonProps {
  additionalClassNames: string;
}

function posthogId() {
  if (ExecutionEnvironment.canUseDOM && window['posthog']) {
    try {
      return '/signup.html?id=' + window.posthog.get_distinct_id();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      // no id
    }
  }
  return '';
}

export function signupLink() {
  return `https://signup.distr.sh${posthogId()}`;
}

const SignupForWaitlistButton: FC<SignupForWaitlistButtonProps> = ({
  additionalClassNames,
}) => (
  <Link
    className={`glasskube-telemetry-waitlist button button--outline ${additionalClassNames}`}
    to={signupLink()}>
    Get started for free
  </Link>
);

export default SignupForWaitlistButton;
