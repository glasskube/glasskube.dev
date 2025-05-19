import Link from '@docusaurus/Link';
import {signupLink} from './SignupForWaitlistButton';

export default function SignupLink({text}) {
  return <Link to={signupLink()}>{text}</Link>;
}
