import Link from '@docusaurus/Link';
import clsx from 'clsx';
import React, {useState} from 'react';
import styles from './styles.module.css';

function Pricing() {
  const [internalUsers, setInternalUsers] = useState(1);
  const [externalCustomers, setExternalCustomers] = useState(1);
  const [billingCycle, setBillingCycle] = useState('yearly'); // 'monthly' or 'yearly'
  const [currency, setCurrency] = useState('$'); // '$' or '€'

  // Base monthly pricing per internal user and external customer
  const starterInternalUserPriceMonthly = 19;
  const starterExternalCustomerPriceMonthly = 29;
  const proInternalUserPriceMonthly = 29;
  const proExternalCustomerPriceMonthly = 69;

  // Yearly pricing is 20% less expensive than monthly (save 20%)
  const yearlyDiscount = 0.8;

  // Get current prices based on billing cycle
  const getStarterInternalUserPrice = () => {
    return billingCycle === 'monthly'
      ? starterInternalUserPriceMonthly
      : starterInternalUserPriceMonthly * yearlyDiscount;
  };

  const getStarterExternalCustomerPrice = () => {
    return billingCycle === 'monthly'
      ? starterExternalCustomerPriceMonthly
      : starterExternalCustomerPriceMonthly * yearlyDiscount;
  };

  const getProInternalUserPrice = () => {
    return billingCycle === 'monthly'
      ? proInternalUserPriceMonthly
      : proInternalUserPriceMonthly * yearlyDiscount;
  };

  const getProExternalCustomerPrice = () => {
    return billingCycle === 'monthly'
      ? proExternalCustomerPriceMonthly
      : proExternalCustomerPriceMonthly * yearlyDiscount;
  };

  // Current prices based on billing cycle
  const starterInternalUserPrice = getStarterInternalUserPrice();
  const starterExternalCustomerPrice = getStarterExternalCustomerPrice();
  const proInternalUserPrice = getProInternalUserPrice();
  const proExternalCustomerPrice = getProExternalCustomerPrice();

  // Plan limits
  const starterMaxExternalCustomers = 3;
  const proMaxExternalCustomers = 50;

  // Check if plans are within limits
  const isStarterAvailable = externalCustomers <= starterMaxExternalCustomers;
  const isProAvailable = externalCustomers <= proMaxExternalCustomers;

  // Calculate total monthly prices (capped at plan limits)
  const calculateStarterMonthlyPrice = () => {
    const cappedCustomers = Math.min(
      externalCustomers,
      starterMaxExternalCustomers,
    );
    return (
      starterInternalUserPrice * internalUsers +
      starterExternalCustomerPrice * cappedCustomers
    );
  };

  const calculateProMonthlyPrice = () => {
    const cappedCustomers = Math.min(
      externalCustomers,
      proMaxExternalCustomers,
    );
    return (
      proInternalUserPrice * internalUsers +
      proExternalCustomerPrice * cappedCustomers
    );
  };

  const starterMonthlyPrice = calculateStarterMonthlyPrice();
  const proMonthlyPrice = calculateProMonthlyPrice();

  // Calculate yearly total (monthly price * 12)
  const starterYearlyTotal = starterMonthlyPrice * 12;
  const proYearlyTotal = proMonthlyPrice * 12;

  // Helper function to round up and format price without commas
  const formatPrice = price => {
    return Math.ceil(price);
  };

  const decrementInternalUsers = () => {
    if (internalUsers > 1) {
      setInternalUsers(internalUsers - 1);
    }
  };

  const incrementInternalUsers = () => {
    setInternalUsers(internalUsers + 1);
  };

  const handleInternalUsersChange = e => {
    const value = e.target.value;
    if (value === '') {
      return; // Allow empty input temporarily
    }
    const numValue = parseInt(value, 10);
    if (!isNaN(numValue) && numValue >= 1) {
      setInternalUsers(numValue);
    }
  };

  const handleInternalUsersBlur = e => {
    const value = parseInt(e.target.value, 10);
    if (isNaN(value) || value < 1) {
      setInternalUsers(1);
    }
  };

  const decrementExternalCustomers = () => {
    if (externalCustomers > 1) {
      setExternalCustomers(externalCustomers - 1);
    }
  };

  const incrementExternalCustomers = () => {
    setExternalCustomers(externalCustomers + 1);
  };

  const handleExternalCustomersChange = e => {
    const value = e.target.value;
    if (value === '') {
      return; // Allow empty input temporarily
    }
    const numValue = parseInt(value, 10);
    if (!isNaN(numValue) && numValue >= 1) {
      setExternalCustomers(numValue);
    }
  };

  const handleExternalCustomersBlur = e => {
    const value = parseInt(e.target.value, 10);
    if (isNaN(value) || value < 1) {
      setExternalCustomers(1);
    }
  };

  return (
    <section>
      <div className="container">
        {/* Internal users, external customers, billing cycle and currency selection */}
        <div className={styles.pricingSelectorContainer}>
          <div className={styles.userSelector}>
            <div>
              <h3>Internal Users</h3>
              <p>Select how many internal users you need</p>
            </div>
            <div className={styles.countSelector}>
              <button
                className={styles.countButton}
                onClick={decrementInternalUsers}
                disabled={internalUsers <= 1}>
                -
              </button>
              <input
                type="number"
                min="1"
                value={internalUsers}
                onChange={handleInternalUsersChange}
                onBlur={handleInternalUsersBlur}
                className={styles.countInput}
              />
              <button
                className={styles.countButton}
                onClick={incrementInternalUsers}>
                +
              </button>
            </div>
          </div>

          <div className={styles.userSelector}>
            <div>
              <h3>External Customers</h3>
              <p>Select how many external customers you have</p>
            </div>
            <div className={styles.countSelector}>
              <button
                className={styles.countButton}
                onClick={decrementExternalCustomers}
                disabled={externalCustomers <= 1}>
                -
              </button>
              <input
                type="number"
                min="1"
                value={externalCustomers}
                onChange={handleExternalCustomersChange}
                onBlur={handleExternalCustomersBlur}
                className={styles.countInput}
              />
              <button
                className={styles.countButton}
                onClick={incrementExternalCustomers}>
                +
              </button>
            </div>
          </div>

          <div className={styles.billingSelector}>
            <div>
              <h3>Billing</h3>
              <p>Select your preferred billing schedule</p>
            </div>
            <div className={styles.billingToggle}>
              <button
                className={clsx(
                  styles.billingButton,
                  billingCycle === 'monthly' && styles.billingButtonActive,
                )}
                onClick={() => setBillingCycle('monthly')}>
                Monthly
              </button>
              <button
                className={clsx(
                  styles.billingButton,
                  billingCycle === 'yearly' && styles.billingButtonActive,
                )}
                onClick={() => setBillingCycle('yearly')}>
                <span>Yearly</span>
                <span className={styles.discountBadge}>Save 20%</span>
              </button>
            </div>
          </div>
          <div className={styles.currencySelector}>
            <div>
              <h3>Currency</h3>
              <p>Select your preferred billing currency</p>
            </div>
            <div className={styles.billingToggle}>
              <button
                className={clsx(
                  styles.billingButton,
                  currency === '$' && styles.billingButtonActive,
                )}
                onClick={() => setCurrency('$')}>
                USD
              </button>
              <button
                className={clsx(
                  styles.billingButton,
                  currency === '€' && styles.billingButtonActive,
                )}
                onClick={() => setCurrency('€')}>
                EUR
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col col--4">
            <div
              className={clsx(
                'card',
                'shadow--md',
                styles.pricingCardSide,
                !isStarterAvailable && styles.pricingCardDisabled,
              )}>
              <div
                className={clsx(
                  'card__header',
                  'text--center',
                  styles.pricingCardHeader,
                  styles.pricingCardHeaderSide,
                )}>
                <h3>Starter</h3>
                <div className={styles.price}>
                  {currency}
                  {formatPrice(starterMonthlyPrice)}
                  <span className={styles.period}>/month</span>
                </div>
                <p className={styles.description}>
                  {currency}
                  {formatPrice(starterInternalUserPrice)}/internal user +{' '}
                  {currency}
                  {formatPrice(starterExternalCustomerPrice)}/external customer
                  <br />
                  <span className={styles.limitText}>
                    Up to {starterMaxExternalCustomers} external customers
                  </span>
                </p>
                <p className={styles.slider}>
                  {internalUsers}{' '}
                  {internalUsers === 1 ? 'internal user' : 'internal users'} •{' '}
                  {externalCustomers}{' '}
                  {externalCustomers === 1
                    ? 'external customer'
                    : 'external customers'}{' '}
                  •
                  {billingCycle === 'monthly'
                    ? ' Billed monthly'
                    : ` ${currency}${formatPrice(starterYearlyTotal)} billed yearly`}
                </p>
              </div>
              <hr className={styles.hr} />
              <div className="card__body">
                <h4 className={styles.cardSubtitle}>
                  First POCs + market validation
                </h4>
                <p className={styles.cardDescription}>
                  Docker + agent installs to ship fast, iterate fast, and get
                  customers updated instantly.
                </p>
                <ul className={styles.featureList}>
                  <li>Up to 3 customer installs</li>
                  <li>1 deployment per customer</li>
                  <li>1 user per customer</li>
                  <li>Pre & Post install scripts</li>
                  <li>Customer Portal with installtion instruction</li>
                  <li>Basic email support + onboarding</li>
                </ul>
                <div className={styles.valueHook}>
                  Fastest route to validate customer-install GTM
                </div>
              </div>
              <div className="card__footer">
                <Link
                  className="button button--secondary button--block button--lg"
                  to="https://signup.distr.sh/">
                  Get Started →
                </Link>
              </div>
            </div>
          </div>
          <div className="col col--4">
            <div
              className={clsx(
                'card',
                'shadow--md',
                styles.pricingCardMain,
                !isProAvailable && styles.pricingCardDisabled,
              )}>
              <div className={styles.comingSoonBanner}>Most popular</div>
              <div
                className={clsx(
                  'card__header',
                  'text--center',
                  styles.pricingCardHeader,
                  styles.pricingCardHeaderMain,
                )}>
                <h3>Pro</h3>
                <div className={styles.price}>
                  {currency}
                  {formatPrice(proMonthlyPrice)}
                  <span className={styles.period}>/month</span>
                </div>
                <p className={styles.description}>
                  {currency}
                  {formatPrice(proInternalUserPrice)}/internal user + {currency}
                  {formatPrice(proExternalCustomerPrice)}/external customer
                  <br />
                  <span className={styles.limitText}>
                    Up to {proMaxExternalCustomers} external customers
                  </span>
                </p>
                <p className={styles.slider}>
                  {internalUsers}{' '}
                  {internalUsers === 1 ? 'internal user' : 'internal users'} •{' '}
                  {externalCustomers}{' '}
                  {externalCustomers === 1
                    ? 'external customer'
                    : 'external customers'}{' '}
                  •
                  {billingCycle === 'monthly'
                    ? ' Billed monthly'
                    : ` ${currency}${formatPrice(proYearlyTotal)} billed yearly`}
                </p>
              </div>
              <hr className={styles.hr} />
              <div className="card__body">
                <h4 className={styles.cardSubtitle}>
                  Rollout + operational scaling
                </h4>
                <p className={styles.cardDescription}>
                  Platform teams deploy through Helm/Kubernetes. Version
                  visibility, governance, and license control.
                </p>
                <ul className={styles.featureList}>
                  <li>Up to 50 customer installs</li>
                  <li>3 deployments per customer</li>
                  <li>Up to 10 users per customer</li>
                  <li>SSO + RBAC</li>
                  <li>License Management</li>
                  <li>1TB container registry with FGAC</li>
                  <li>White Label</li>
                  <li>White glove onboarding + private Slack</li>
                </ul>
                <div className={styles.valueHook}>
                  Production-grade rollout engine — version control + identity
                  control at scale
                </div>
              </div>
              <div className="card__footer">
                <Link
                  className="button button--primary button--block button--lg"
                  to="https://cal.glasskube.com/team/gk/distr-pro-early-access">
                  Get early access →
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className={clsx('card', 'shadow--md', styles.pricingCardSide)}>
              <div
                className={clsx(
                  'card__header',
                  'text--center',
                  styles.pricingCardHeader,
                  styles.pricingCardHeaderSide,
                )}>
                <h3>Enterprise</h3>
                <div className={styles.price}>Get a Demo</div>
                <p className={styles.description}></p>
              </div>
              <hr className={styles.hr} />
              <div className="card__body">
                <h4 className={styles.cardSubtitle}>
                  Entire self-hosted lifecycle
                </h4>
                <p className={styles.cardDescription}>
                  Distribute software, docs, support, workflows, licensing &
                  billing — all in one platform.
                </p>
                <ul className={styles.featureList}>
                  <li>Unlimited customer installs</li>
                  <li>Unlimited deployments</li>
                  <li>Unlimited internal users</li>
                  <li>Dedicated infrastructure + Full White Label</li>
                  <li>Automated workflows + advanced governance</li>
                  <li>SLA + Dedicated Support Engineer</li>
                </ul>
                <div className={styles.valueHook}>
                  End-to-end commercial distribution suite — unified platform
                </div>
              </div>
              <div className="card__footer">
                <Link
                  className="button button--secondary button--block button--lg"
                  to="https://signup.distr.sh/">
                  Contact Us →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Pricing);
