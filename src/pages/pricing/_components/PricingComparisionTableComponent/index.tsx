import React from 'react';
import styles from './styles.module.css';

function PricingComparisonTable() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className={styles.featureComparisonContainer}>
              <h2 className={styles.featureComparisonTitle}>
                Compare Features
              </h2>
              <div className={styles.comparisonTable}>
                <table>
                  <thead>
                    <tr>
                      <th></th>
                      <th className={styles.freeHeader}>Starter</th>
                      <th className={styles.proHeader}>Pro</th>
                      <th className={styles.enterpriseHeader}>Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className={styles.categoryRow}>
                      <td colSpan={4}>Limits</td>
                    </tr>
                    <tr>
                      <td>Max Customers</td>
                      <td>3</td>
                      <td>50</td>
                      <td>Unlimited</td>
                    </tr>
                    <tr>
                      <td>Max Deployments per Customer</td>
                      <td>1</td>
                      <td>3</td>
                      <td>Unlimited</td>
                    </tr>
                    <tr>
                      <td>Max Users per Customer</td>
                      <td>1</td>
                      <td>10</td>
                      <td>Unlimited</td>
                    </tr>
                    <tr>
                      <td>Registry storage</td>
                      <td>Up to 100 GB</td>
                      <td>Up to 1 TB</td>
                      <td>Unlimited</td>
                    </tr>

                    <tr className={styles.categoryRow}>
                      <td colSpan={4}>LICENSING & DEPLOYMENT</td>
                    </tr>
                    <tr>
                      <td>Deployment Agents (Docker / K8s)</td>
                      <td className={styles.checkmark}>✓</td>
                      <td className={styles.checkmark}>✓</td>
                      <td className={styles.checkmark}>✓</td>
                    </tr>
                    <tr>
                      <td>GitHub Release Automation</td>
                      <td className={styles.checkmark}>✓</td>
                      <td className={styles.checkmark}>✓</td>
                      <td className={styles.checkmark}>✓</td>
                    </tr>
                    <tr>
                      <td>Pre/Post Install Scripts</td>
                      <td className={styles.checkmark}>✓</td>
                      <td className={styles.checkmark}>✓</td>
                      <td className={styles.checkmark}>✓</td>
                    </tr>
                    <tr>
                      <td>Customer Portal with installation instructions</td>
                      <td className={styles.checkmark}>✓</td>
                      <td className={styles.checkmark}>✓</td>
                      <td className={styles.checkmark}>✓</td>
                    </tr>
                    <tr>
                      <td>License Management</td>
                      <td>—</td>
                      <td className={styles.checkmark}>✓</td>
                      <td className={styles.checkmark}>✓</td>
                    </tr>
                    <tr>
                      <td>License SDK</td>
                      <td>—</td>
                      <td>—</td>
                      <td className={styles.checkmark}>✓</td>
                    </tr>
                    <tr>
                      <td>Dynamic License Management</td>
                      <td>—</td>
                      <td>—</td>
                      <td className={styles.checkmark}>✓</td>
                    </tr>
                    <tr>
                      <td>Customer Billing</td>
                      <td>—</td>
                      <td>—</td>
                      <td className={styles.checkmark}>✓</td>
                    </tr>
                    <tr className={styles.categoryRow}>
                      <td colSpan={4}>SECURITY & GOVERNANCE</td>
                    </tr>
                    <tr>
                      <td>Single Sign-On (SSO)</td>
                      <td>—</td>
                      <td className={styles.checkmark}>✓</td>
                      <td className={styles.checkmark}>✓</td>
                    </tr>
                    <tr>
                      <td>Role-based Access Controls</td>
                      <td>—</td>
                      <td className={styles.checkmark}>✓</td>
                      <td className={styles.checkmark}>✓</td>
                    </tr>
                    <tr>
                      <td>Custom Roles</td>
                      <td>—</td>
                      <td>—</td>
                      <td className={styles.checkmark}>✓</td>
                    </tr>

                    <tr className={styles.categoryRow}>
                      <td colSpan={4}>Observability</td>
                    </tr>
                    <tr>
                      <td>Live Container Metrics</td>
                      <td className={styles.checkmark}>✓</td>
                      <td className={styles.checkmark}>✓</td>
                      <td className={styles.checkmark}>✓</td>
                    </tr>
                    <tr>
                      <td>Deployment Status Metrics</td>
                      <td className={styles.checkmark}>✓</td>
                      <td className={styles.checkmark}>✓</td>
                      <td className={styles.checkmark}>✓</td>
                    </tr>
                    <tr>
                      <td>Container Logs</td>
                      <td>100 rows</td>
                      <td>10.000 rows</td>
                      <td>Unlimited</td>
                    </tr>

                    <tr className={styles.categoryRow}>
                      <td colSpan={4}>SUPPORT / OPERATIONS</td>
                    </tr>
                    <tr>
                      <td>Support Type</td>
                      <td>Email</td>
                      <td>Email + Slack</td>
                      <td>Email + Slack + Phone</td>
                    </tr>
                    <tr>
                      <td>Onboarding Support</td>
                      <td>Free Onboarding Call</td>
                      <td>White Glove Onboarding</td>
                      <td>White Glove Onboarding</td>
                    </tr>
                    <tr>
                      <td>Dedicated Support Engineer</td>
                      <td>—</td>
                      <td>—</td>
                      <td className={styles.checkmark}>✓</td>
                    </tr>
                    <tr>
                      <td>SLA</td>
                      <td>—</td>
                      <td>—</td>
                      <td className={styles.checkmark}>✓</td>
                    </tr>
                    <tr>
                      <td>Self-hosting or Cloud</td>
                      <td className={styles.checkmark}>✓</td>
                      <td className={styles.checkmark}>✓</td>
                      <td className={styles.checkmark}>✓</td>
                    </tr>
                    <tr>
                      <td>Dedicated Infrastructure</td>
                      <td>—</td>
                      <td>—</td>
                      <td className={styles.checkmark}>✓</td>
                    </tr>
                    <tr>
                      <td>White Label</td>
                      <td>—</td>
                      <td className={styles.checkmark}>✓</td>
                      <td className={styles.checkmark}>✓</td>
                    </tr>

                    <tr>
                      <td>Workflows / Automation</td>
                      <td>—</td>
                      <td>—</td>
                      <td className={styles.checkmark}>✓</td>
                    </tr>
                    <tr>
                      <td>Documentation Pages & Wiki</td>
                      <td>—</td>
                      <td>—</td>
                      <td className={styles.checkmark}>✓</td>
                    </tr>
                    <tr>
                      <td>Ticket System</td>
                      <td>—</td>
                      <td>—</td>
                      <td className={styles.checkmark}>✓</td>
                    </tr>
                    <tr>
                      <td>Public Registry</td>
                      <td>—</td>
                      <td>—</td>
                      <td className={styles.checkmark}>✓</td>
                    </tr>
                    <tr>
                      <td>CVE Scanning</td>
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

export default React.memo(PricingComparisonTable);
