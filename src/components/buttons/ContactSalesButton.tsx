import Link from '@docusaurus/Link';
import {FC} from 'react';

interface ContactSalesButtonProps {
  additionalClassNames: string;
}

const ContactSalesButton: FC<ContactSalesButtonProps> = ({
  additionalClassNames,
}) => (
  <Link
    className={`glasskube-telemetry-sales button button--info ${additionalClassNames}`}
    to="https://cal.glasskube.eu/team/founder/enterprise">
    Contact sales
  </Link>
);

export default ContactSalesButton;
