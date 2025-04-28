import Link from '@docusaurus/Link';
import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import clsx from 'clsx';

function Pricing() {
  const [userCount, setUserCount] = useState(1);
  const [billingCycle, setBillingCycle] = useState('yearly'); // 'monthly' or 'yearly'
  
  // Base prices per user
  const proPriceMonthly = 58.8;
  const proPriceYearly = 49;
  const enterprisePriceMonthly = 249;
  
  // Calculate total prices based on user count and billing cycle
  const calculatePrice = (basePrice) => {
    return basePrice * userCount;
  };
  
  // Get yearly price with 2 months free discount
  const getYearlyPrice = (monthlyPrice) => {
    return monthlyPrice * 10; // 12 months - 2 months free = 10 months
  };
  
  const proMonthlyTotal = calculatePrice(proPriceMonthly);
  const enterpriseMonthlyTotal = calculatePrice(enterprisePriceMonthly);
  const proYearlyTotal = calculatePrice(proPriceYearly) * 12; // Yearly price is fixed at $49 per user per month
  const enterpriseYearlyTotal = getYearlyPrice(enterpriseMonthlyTotal);
  
  const decrementUserCount = () => {
    if (userCount > 1) {
      setUserCount(userCount - 1);
    }
  };
  
  const incrementUserCount = () => {
    setUserCount(userCount + 1);
  };
  
  const toggleBillingCycle = () => {
    setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly');
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
                disabled={userCount <= 1}
              >
                -
              </button>
              <span className={styles.countDisplay}>{userCount}</span>
              <button 
                className={styles.countButton}
                onClick={incrementUserCount}
              >
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
                className={clsx(styles.billingButton, billingCycle === 'monthly' && styles.billingButtonActive)}
                onClick={() => setBillingCycle('monthly')}
              >
                Monthly
              </button>
              <button 
                className={clsx(styles.billingButton, billingCycle === 'yearly' && styles.billingButtonActive)}
                onClick={() => setBillingCycle('yearly')}
              >
                Yearly
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
                <div className={styles.price}>$0<span className={styles.period}> /month</span></div>
                <p className={styles.description}>Up to 3 users</p>
              </div>
              <hr className={styles.hr} />
              <div className="card__body">
                <ul className={styles.featureList}>
                  <li>License Management (Basic)</li>
                  <li>Unlimited Deployments</li>
                  <li>Deployment Agents for Helm, Docker and Terraform (coming soon)</li>
                  <li>Registry (up to 100 GB)</li>
                  <li>2 Workflows (coming soon)</li>
                  <li>Self-hosting or Cloud</li>
                  <li>GitHub Integration for release automation</li>
                  <li>Status Log (incl. Historical)</li>
                  <li>Live Container Metrics (no retention) (OpenTelemetry compatible)</li>
                  <li>Live Container Logs (no retention) (OpenTelemetry compatible)</li>
                  <li>Distr API</li>
                  <li>Distr CLI</li>
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
                  styles.pricingCardHeaderMain
                )}>
                <h3>Pro</h3>
                <div className={styles.price}>
                  ${billingCycle === 'monthly' 
                    ? (proMonthlyTotal % 1 === 0 ? proMonthlyTotal : proMonthlyTotal.toFixed(1))
                    : ((proYearlyTotal / 12) % 1 === 0 ? (proYearlyTotal / 12) : (proYearlyTotal / 12).toFixed(1))}
                  <span className={styles.period}>/month</span>
                </div>
                <p className={styles.slider}>
                  {userCount} {userCount === 1 ? 'user' : 'users'} • 
                  {billingCycle === 'monthly' 
                    ? ' Billed monthly' 
                    : ` $${proYearlyTotal % 1 === 0 ? proYearlyTotal : proYearlyTotal.toFixed(1)} billed yearly (save 2 months)`}
                </p>
              </div>
              <hr className={styles.hr} />
              <div className="card__body">
                <p className={styles.includedFeatures}>All of Free plus</p>
                <ul className={styles.featureList}>
                  <li>Unlimited Users</li>
                  <li>Open Feature compatible Advanced License Management</li>
                  <li>Usage based pricing and metering</li>
                  <li>Registry (up to 1 TB)</li>
                  <li>Up to 20 Workflows with Slack Notifications</li>
                  <li></li>
            
                  <li>Role-based Access Controls</li>
                  <li>Single Sign-On (SSO)</li>
                  <li>Billing</li>
                  <li>Full White Label (Custom Domains)</li>
                  <li>10 days Historical Container Metric & Logss</li>
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
                <p className={styles.description}>Flexible pricing that scales with your organization.</p>
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
                  <li>Selfhosted support</li>
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
        
        {/* Feature Comparison Table */}
        <div className="row">
          <div className="col col--10 col--offset-1">
            <div className={styles.featureComparisonContainer}>
              <h2 className={styles.featureComparisonTitle}>Compare Features</h2>
              <div className={styles.comparisonTable}>
                <table>
                  <thead>
                    <tr>
                      <th></th>
                      <th className={styles.freeHeader}>Free</th>
                      <th className={styles.proHeader}>Pro</th>
                      <th className={styles.enterpriseHeader}>Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={styles.categoryRow}>
                      <td colSpan={4}>Limits</td>
                    </tr>
                    <tr>
                      <td>Users</td>
                      <td>Up to 3</td>
                      <td>Unlimited</td>
                      <td>Unlimited</td>
                    </tr>
                    <tr>
                      <td>Registry storage</td>
                      <td>Up to 100 GB</td>
                      <td>Up to 1 TB</td>
                      <td>Unlimited</td>
                    </tr>
                    <tr>
                      <td>Workflows</td>
                      <td>2 (coming soon)</td>
                      <td>Up to 20</td>
                      <td>Unlimited</td>
                    </tr>
                    
                    <tr className={styles.categoryRow}>
                      <td colSpan={4}>Core Features</td>
                    </tr>
                    <tr>
                      <td>Unlimited Deployments</td>
                      <td className={styles.checkmark}>✓</td>
                      <td className={styles.checkmark}>✓</td>
                      <td className={styles.checkmark}>✓</td>
                    </tr>
                    <tr>
                      <td>Self-hosting or Cloud</td>
                      <td className={styles.checkmark}>✓</td>
                      <td className={styles.checkmark}>✓</td>
                      <td className={styles.checkmark}>✓</td>
                    </tr>
                    <tr>
                      <td>Deployment Agents for Helm, Docker, Terraform (coming soon)</td>
                      <td className={styles.checkmark}>✓</td>
                      <td className={styles.checkmark}>✓</td>
                      <td className={styles.checkmark}>✓</td>
                    </tr>
                    <tr>
                      <td>Customer Portal</td>
                      <td className={styles.checkmark}>✓</td>
                      <td className={styles.checkmark}>✓</td>
                      <td className={styles.checkmark}>✓</td>
                    </tr>
                    <tr>
                      <td>License Management Basic</td>
                      <td className={styles.checkmark}>✓</td>
                      <td className={styles.checkmark}>✓</td>
                      <td className={styles.checkmark}>✓</td>
                    </tr>
                    <tr>
                      <td>Advanced License Management <br></br>(Open Feature compatible)</td>
                      <td>—</td>
                      <td className={styles.checkmark}>✓</td>
                      <td className={styles.checkmark}>✓</td>
                    </tr>
                    <tr>
                      <td>Usage based pricing and metering</td>
                      <td>—</td>
                      <td className={styles.checkmark}>✓</td>
                      <td className={styles.checkmark}>✓</td>
                    </tr>
                    <tr>
                      <td>GitHub Integration</td>
                      <td className={styles.checkmark}>✓</td>
                      <td className={styles.checkmark}>✓</td>
                      <td className={styles.checkmark}>✓</td>
                    </tr>
                    <tr>
                      <td>GitLab Integration</td>
                      <td>—</td>
                      <td>—</td>
                      <td className={styles.checkmark}>✓</td>
                    </tr>
                    <tr>
                      <td>Role-based Access Controls</td>
                      <td>—</td>
                      <td className={styles.checkmark}>✓</td>
                      <td className={styles.checkmark}>✓</td>
                    </tr>
                    <tr>
                      <td>Single Sign-On (SSO)</td>
                      <td>—</td>
                      <td className={styles.checkmark}>✓</td>
                      <td className={styles.checkmark}>✓</td>
                    </tr>
                    <tr>
                      <td>Billing</td>
                      <td>—</td>
                      <td className={styles.checkmark}>✓</td>
                      <td className={styles.checkmark}>✓</td>
                    </tr>
                    <tr>
                      <td>White Label</td>
                      <td>Only Customer Portal</td>
                      <td>Full (incl. Custom Domains)</td>
                      <td>Full (incl. Custom Domains)</td>
                    </tr>
                    <tr>
                      <td>Multitenancy Support</td>
                      <td>—</td>
                      <td>—</td>
                      <td className={styles.checkmark}>✓</td>
                    </tr>
                    <tr>
                      <td>AirGap Support</td>
                      <td>Basic</td>
                      <td>Basic</td>
                      <td>Extended (Image & Application sync)</td>
                    </tr>
                    <tr>
                      <td>HubSpot Integration</td>
                      <td>—</td>
                      <td>—</td>
                      <td className={styles.checkmark}>✓</td>
                    </tr>
                    
                    <tr className={styles.categoryRow}>
                      <td colSpan={4}>APIs and Tools</td>
                    </tr>
                    <tr>
                      <td>Distr API</td>
                      <td className={styles.checkmark}>✓</td>
                      <td className={styles.checkmark}>✓</td>
                      <td className={styles.checkmark}>✓</td>
                    </tr>
                    <tr>
                      <td>Distr CLI</td>
                      <td className={styles.checkmark}>✓</td>
                      <td className={styles.checkmark}>✓</td>
                      <td className={styles.checkmark}>✓</td>
                    </tr>
                    <tr>
                      <td>Slack Notifications</td>
                      <td>—</td>
                      <td className={styles.checkmark}>✓</td>
                      <td className={styles.checkmark}>✓</td>
                    </tr>
                    <tr>
                      <td>Integrated CVE Scanning</td>
                      <td>—</td>
                      <td className={styles.checkmark}>✓</td>
                      <td className={styles.checkmark}>✓</td>
                    </tr>
                    
                    <tr className={styles.categoryRow}>
                      <td colSpan={4}>Observability</td>
                    </tr>
                    <tr>
                      <td>Deployment Status Logs (incl. Historical)</td>
                      <td className={styles.checkmark}>✓</td>
                      <td className={styles.checkmark}>✓</td>
                      <td className={styles.checkmark}>✓</td>
                    </tr>
                    <tr>
                      <td>Container Metrics</td>
                      <td>Live (no retention)</td>
                      <td>10 days historical</td>
                      <td>Custom retention</td>
                    </tr>
                    <tr>
                      <td>Container Logs</td>
                      <td>Live (no retention)</td>
                      <td>10 days historical</td>
                      <td>Custom retention</td>
                    </tr>
                    <tr>
                      <td>OpenTelemetry compatibility</td>
                      <td className={styles.checkmark}>✓</td>
                      <td className={styles.checkmark}>✓</td>
                      <td className={styles.checkmark}>✓</td>
                    </tr>
                    
                    <tr className={styles.categoryRow}>
                      <td colSpan={4}>Support</td>
                    </tr>
                    <tr>
                      <td>Support Type</td>
                      <td>Community (Discord)</td>
                      <td>Priority Email</td>
                      <td>24/7 Support</td>
                    </tr>
                    <tr>
                      <td>Dedicated Slack Support</td>
                      <td>—</td>
                      <td>—</td>
                      <td className={styles.checkmark}>✓</td>
                    </tr>
                    <tr>
                      <td>Dedicated Support Engineer</td>
                      <td>—</td>
                      <td>—</td>
                      <td className={styles.checkmark}>✓</td>
                    </tr>
                    <tr>
                      <td>Onboarding Support</td>
                      <td>—</td>
                      <td className={styles.checkmark}>✓</td>
                      <td className={styles.checkmark}>✓</td>
                    </tr>
                    <tr>
                      <td>Selfhosted Support</td>
                      <td>—</td>
                      <td>—</td>
                      <td className={styles.checkmark}>✓</td>
                    </tr>
                    <tr>
                      <td>Service Level</td>
                      <td>—</td>
                      <td>—</td>
                      <td>Up to 99.99% uptime</td>
                    </tr>
                    <tr>
                      <td>Dedicated Infrastructure</td>
                      <td>—</td>
                      <td>—</td>
                      <td className={styles.checkmark}>✓</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default React.memo(Pricing);
