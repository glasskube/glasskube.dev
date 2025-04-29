import React from 'react';
import styles from './styles.module.css';

function PricingComparisionTable() {
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
                      <td>
                        Deployment Agents for Helm, Docker, Terraform (coming
                        soon)
                      </td>
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
                      <td>
                        Advanced License Management <br></br>(Open Feature
                        compatible)
                      </td>
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
                      <td>Distr SDK</td>
                      <td className={styles.checkmark}>✓</td>
                      <td className={styles.checkmark}>✓</td>
                      <td className={styles.checkmark}>✓</td>
                    </tr>
                    <tr>
                      <td>Distr CLI (coming soon)</td>
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
                      <td>Self-hosted Support</td>
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

export default React.memo(PricingComparisionTable);
