import Link from '@docusaurus/Link';
import {FC} from 'react';

interface TalkToFoundersButtonProps {
  additionalClassNames: string;
}

const TalkToFoundersButton: FC<TalkToFoundersButtonProps> = ({
  additionalClassNames,
}) => (
  <Link
    className={`glasskube-telemetry-founders button button--outline ${additionalClassNames}`}
    to="https://cal.glasskube.com/team/founder/30min">
    Talk to founders
  </Link>
);

export default TalkToFoundersButton;
