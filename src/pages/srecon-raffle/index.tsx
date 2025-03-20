import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGift, faCalendar, faEnvelope, faSmile, faHandHoldingHeart} from '@fortawesome/free-solid-svg-icons';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';

// Create a functional component for the themed image
function RaffleImage() {
  return (
    <ThemedImage
      sources={{
        light: useBaseUrl('/img/srecon-raffle/raffle-light.png'),
        dark: useBaseUrl('/img/srecon-raffle/raffle-dark.png'),
      }}
      alt="Raffle"
      className={styles.raffleImage}
    />
  );
}

interface RaffleEntry {
  name: string;
  email: string;
  role: string;
  company: string;
  onprem: string;
}

function loadHubSpotScript() {
  if (typeof window === 'undefined') {
    return null;
  }

  const elementId = 'hs-script';
  if (document.getElementById(elementId) === null) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://js-eu1.hs-scripts.com/144345473.js'; // Replace with your HubSpot ID
    script.id = elementId;
    document.head.appendChild(script);
  }
}

class RaffleForm extends React.Component<unknown, {data: RaffleEntry}> {
  constructor(props: unknown) {
    super(props);
    this.state = {data: {} as RaffleEntry};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    loadHubSpotScript();

    try {
      await fetch('https://api.hsforms.com/submissions/v3/integration/submit/YOUR_PORTAL_ID/YOUR_FORM_ID', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: [
            {name: 'name', value: this.state.data.name},
            {name: 'email', value: this.state.data.email},
            {name: 'role', value: this.state.data.role},
            {name: 'company', value: this.state.data.company},
            {name: 'onprem', value: this.state.data.onprem},
          ],
          context: {
            pageUri: window.location.href,
            pageName: 'SREcon Raffle',
          },
        }),
      });
      
      alert('Thank you! You have been entered into the raffle. Good luck!');
      window.location.href = '/'; // Redirect to homepage
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting your entry. Please try again.');
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <RaffleImage />
            <ul className={styles.featureList}>
              <li className={styles.featureItem}>
                <FontAwesomeIcon icon={faGift} size="2x" />
                <div>
                  <h4>To celebrate SREcon 2025, we're running a raffle!</h4>
                  <p>Be in for a chance to win three deadly prizes!</p>
                </div>
              </li>
              <li className={styles.featureItem}>
                <FontAwesomeIcon icon={faCalendar} size="2x" />
                <div>
                  <h4>Location and time to be announced</h4>
                  <p>Sign up and stay tuned for more details about the event.</p>
                </div>
              </li>
              <li className={styles.featureItem}>
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
                <div>
                  <h4>Sign up with your work email, that's it!</h4>
                  <p>We'll use your email to contact you if you win.</p>
                </div>
              </li>
              <li className={styles.featureItem}>
                <FontAwesomeIcon icon={faHandHoldingHeart} size="2x" />
                <div>
                  <h4>Swag is nice and all, but how many conference raffles have you won?</h4>
                  <p>Sign up now and get ready for some fun!</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="col col--6">
            <div className={styles.card}>
              <form onSubmit={this.handleSubmit} className={styles.form}>
                <Heading as="h3">SREcon 2025 Raffle</Heading>
                <p>Enter your details below for a chance to win!</p>
                
                <div>
                  <label htmlFor="name">Full Name*</label>
                  <input
                    type="text"
                    className={styles.input}
                    id="name"
                    required
                    value={this.state.data.name}
                    onChange={e =>
                      this.setState(state => ({
                        data: {...state.data, name: e.target.value},
                      }))
                    }
                  />
                </div>

                <div>
                  <label htmlFor="email">Work Email*</label>
                  <input
                    type="text"
                    className={styles.input}
                    id="email"
                    required
                    value={this.state.data.email}
                    onChange={e =>
                      this.setState(state => ({
                        data: {...state.data, email: e.target.value},
                      }))
                    }
                  />  
                </div>

                <div>
                  <label htmlFor="role">Role*</label>
                  <input
                    type="text"
                    className={styles.input}
                    id="role"
                    required
                    value={this.state.data.role}
                    onChange={e =>
                      this.setState(state => ({
                        data: {...state.data, role: e.target.value},
                      }))
                    }
                  />
                </div>

                <div>
                  <label htmlFor="company">Company*</label>
                  <input
                    type="text"
                    className={styles.input}
                    id="company"
                    required
                    value={this.state.data.company}
                    onChange={e =>
                      this.setState(state => ({
                        data: {...state.data, company: e.target.value},
                      }))
                    }
                  />
                </div>

                <div>
                  <label htmlFor="onprem">Does your company currently serve on-prem customers?*</label>
                  <select
                    className={styles.input}
                    id="onprem"
                    required
                    value={this.state.data.onprem}
                    onChange={e =>
                      this.setState(state => ({
                        data: {...state.data, onprem: e.target.value},
                      }))
                    }
                  >
                    <option value="">Select an option</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                    <option value="planned">Not yet, but plan to</option>
                  </select>
                </div>

                <button className="button button--secondary button--lg" type="submit">
                  Enter Raffle
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function RaffleHeader() {
  return (
    <section className="margin-top--lg text--center">
      <Heading as="h1">SREcon 2025 Raffle 🎟️</Heading>
      <p>
        <strong>Enter our raffle for a chance to win exciting prizes!</strong>
      </p>
    </section>
  );
}
export default function SREConRafflePage(): JSX.Element {
  return (
    <Layout
      title="SREcon 2025 Raffle - Glasskube"
      description="Enter our SREcon raffle for a chance to win exciting prizes!">
      <main className="margin-vert--lg">
        <RaffleHeader />
        <RaffleForm />
      </main>
    </Layout>
  );
}