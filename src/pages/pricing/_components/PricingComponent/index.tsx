import Link from '@docusaurus/Link';
import clsx from 'clsx';
import React, {useState} from 'react';
import styles from './styles.module.css';

function Pricing() {
  const [userCount, setUserCount] = useState(1);
  const [billingCycle, setBillingCycle] = useState('yearly'); // 'monthly' or 'yearly'
  const [currency, setCurrency] = useState('$'); // '$' or '€'

  // Base prices per user
  const eurProPriceMonthly = 59;
  const eurProPriceYearly = 49;
  const usdTopUp = 5;

  // Calculate total prices based on user count and billing cycle
  const calculatePrice = basePrice => {
    const currencyAwareBasePrice =
      currency === '€' ? basePrice : basePrice + usdTopUp;
    return currencyAwareBasePrice * userCount;
  };

  const proMonthlyTotal = calculatePrice(eurProPriceMonthly);
  const proYearlyTotal = calculatePrice(eurProPriceYearly) * 12; // Yearly price is fixed at $49 per user per month

  const decrementUserCount = () => {
    if (userCount > 1) {
      setUserCount(userCount - 1);
    }
  };

  const incrementUserCount = () => {
    setUserCount(userCount + 1);
  };

  return (
    <section>
      <div className="container">
        {/* User count and billing cycle selection */}
        <div className={styles.pricingSelectorContainer}>
          <div className={styles.userSelector}>
            <div>
              <h3>Users</h3>
              <p>Select how many users you want </p>
            </div>
            <div className={styles.countSelector}>
              <button
                className={styles.countButton}
                onClick={decrementUserCount}
                disabled={userCount <= 1}>
                -
              </button>
              <span className={styles.countDisplay}>{userCount}</span>
              <button
                className={styles.countButton}
                onClick={incrementUserCount}>
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
                Yearly
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
            <div className={clsx('card', 'shadow--md', styles.pricingCardSide)}>
              <div
                className={clsx(
                  'card__header',
                  'text--center',
                  styles.pricingCardHeader,
                  styles.pricingCardHeaderSide,
                )}>
                <h3>Free</h3>
                <div className={styles.price}>
                  {currency}0<span className={styles.period}> /month</span>
                </div>
                <p className={styles.description}>Up to 3 users</p>
              </div>
              <hr className={styles.hr} />
              <div className="card__body">
                <ul className={styles.featureList}>
                  <li>License Management (Basic)</li>
                  <li>Unlimited Deployments</li>
                  <li>
                    Deployment Agents for Helm, Docker and Terraform (coming
                    soon)
                  </li>
                  <li>Registry (up to 100 GB)</li>
                  <li>2 Workflows (coming soon)</li>
                  <li>Self-hosting or Cloud</li>
                  <li>GitHub Integration for release automation</li>
                  <li>Status Log (incl. Historical)</li>
                  <li>
                    Live Container Metrics (no retention) (OpenTelemetry
                    compatible)
                  </li>
                  <li>
                    Live Container Logs (no retention) (OpenTelemetry
                    compatible)
                  </li>
                  <li>Distr API</li>
                  <li>Distr CLI (coming soon)</li>
                  <li>Community Support (Discord)</li>
                </ul>
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
            <div className={clsx('card', 'shadow--md', styles.pricingCardMain)}>
              <div className={styles.comingSoonBanner}>Coming Soon</div>
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
                  {billingCycle === 'monthly'
                    ? proMonthlyTotal % 1 === 0
                      ? proMonthlyTotal
                      : proMonthlyTotal.toFixed(1)
                    : (proYearlyTotal / 12) % 1 === 0
                      ? proYearlyTotal / 12
                      : (proYearlyTotal / 12).toFixed(1)}
                  <span className={styles.period}>/month</span>
                </div>
                <p className={styles.slider}>
                  {userCount} {userCount === 1 ? 'user' : 'users'} •
                  {billingCycle === 'monthly'
                    ? ' Billed monthly'
                    : ` ${currency}${proYearlyTotal % 1 === 0 ? proYearlyTotal : proYearlyTotal.toFixed(1)} billed yearly (save 2 months)`}
                </p>
              </div>
              <hr className={styles.hr} />
              <div className="card__body">
                <p className={styles.includedFeatures}>All of Free plus</p>
                <ul className={styles.featureList}>
                  <li>Open Feature compatible Advanced License Management</li>
                  <li>Usage based pricing and metering</li>
                  <li>Registry (up to 1 TB)</li>
                  <li>Up to 20 Workflows with Slack Notifications</li>
                  <li></li>

                  <li>Role-based Access Controls</li>
                  <li>Single Sign-On (SSO)</li>
                  <li>Billing</li>
                  <li>Full White Label (Custom Domains)</li>
                  <li>10 days Historical Container Metric & Logs</li>
                  <li>Integrated CVE Scanning for the registry</li>
                  <li>Priority Email Support</li>
                  <li>Onboarding Support</li>
                </ul>
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
                <p className={styles.description}>
                  Flexible pricing that scales with your organization.
                </p>
              </div>
              <hr className={styles.hr} />
              <div className="card__body">
                <p className={styles.includedFeatures}>All of Pro plus</p>
                <ul className={styles.featureList}>
                  <li>Dedicated Infrastructure</li>
                  <li>Service Levels up to 99.99% uptime</li>
                  <li>24/7 Support</li>
                  <li>GitLab Integration</li>
                  <li>Multitenancy Support</li>
                  <li>Self-hosted support</li>
                  <li>Extended AirGap Support (Image & Application sync)</li>
                  <li>Dedicated Slack Support</li>
                  <li>Dedicated Support Engineer</li>
                  <li>Custom Historical Container Metrics & Logs</li>
                  <li>HubSpot Integration</li>
                </ul>
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
