import Heading from '@theme/Heading';
import React from 'react';
import styles from './index.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faCalendar,
  faEnvelope,
  faGift,
  faHandHoldingHeart,
} from '@fortawesome/free-solid-svg-icons';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';

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

function loadScript() {
  if (typeof window === 'undefined') {
    return null;
  }

  const elementId = 'hs-script';
  if (document.getElementById(elementId) === null) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://js-eu1.hs-scripts.com/144345473.js';
    script.id = elementId;
    document.head.appendChild(script);
  }
}

interface RaffleRequest {
  firstName: string;
  lastName: string;
  email: string;
  jobTitle: string;
  companyName: string;
  onPremCustomers: string;
}

class Form extends React.Component<unknown, {data: RaffleRequest}> {
  hubSpotLoaded = false;

  constructor(props: unknown) {
    super(props);
    this.state = {data: {} as RaffleRequest};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  loadHubSpot() {
    if (!this.hubSpotLoaded) {
      loadScript();
      this.hubSpotLoaded = true;
    }
  }

  async handleSubmit(event) {
    event.preventDefault();
    loadScript();

    try {
      const response = await fetch(
        'https://forms.glasskube.com/api/v1/raffle',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.state.data),
        },
      );

      if (response.ok) {
        alert(
          'Thank you! You have been entered into the raffle. Best of luck!',
        );
        window.location.href = '/';
      } else {
        throw new Error('Error submitting form to HubSpot');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting your entry. Please try again.');
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.form}>
        <div>
          <label htmlFor="firstname">First Name*</label>
          <input
            type="text"
            className={styles.input}
            id="firstname"
            required
            placeholder="First Name"
            value={this.state.data.firstName}
            onChange={e =>
              this.setState(state => ({
                data: {...state.data, firstName: e.target.value},
              }))
            }
          />
        </div>
        <div>
          <label htmlFor="lastname">Last Name*</label>
          <input
            type="text"
            className={styles.input}
            id="lastname"
            required
            placeholder="Last Name"
            value={this.state.data.lastName}
            onChange={e =>
              this.setState(state => ({
                data: {...state.data, lastName: e.target.value},
              }))
            }
          />
        </div>

        <div>
          <label htmlFor="email">Work Email*</label>
          <input
            type="email"
            className={styles.input}
            id="email"
            required
            placeholder="Work Email"
            value={this.state.data.email}
            onChange={e => {
              this.setState(state => ({
                data: {...state.data, email: e.target.value},
              }));
              this.loadHubSpot();
            }}
          />
        </div>

        <div>
          <label htmlFor="jobtitle">Job Title*</label>
          <input
            type="text"
            className={styles.input}
            id="jobtitle"
            required
            placeholder="Job Title"
            value={this.state.data.jobTitle}
            onChange={e =>
              this.setState(state => ({
                data: {...state.data, jobTitle: e.target.value},
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
            placeholder="Company"
            value={this.state.data.companyName}
            onChange={e =>
              this.setState(state => ({
                data: {...state.data, companyName: e.target.value},
              }))
            }
          />
        </div>

        <div>
          <label htmlFor="onprem_customers">
            Does your company currently serve on-prem customers?*
          </label>
          <select
            className={styles.input}
            id="onprem_customers"
            required
            value={this.state.data.onPremCustomers}
            onChange={e =>
              this.setState(state => ({
                data: {...state.data, onPremCustomers: e.target.value},
              }))
            }>
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
    );
  }
}

function FeatureList() {
  return (
    <ul className={styles.featureList}>
      <li className={styles.featureItem}>
        <FontAwesomeIcon icon={faGift} size="2x" />
        <div>
          <h4>To celebrate SREcon 2025, we&#39;re running a raffle!</h4>
          <p>
            Be in for a chance to win{' '}
            <strong>Lego Star Wars Millennium Falcon</strong>
          </p>
        </div>
      </li>
      <li className={styles.featureItem}>
        <FontAwesomeIcon icon={faCalendar} size="2x" />
        <div>
          <h4>Thursday, March 27 at 1pm in front of the Ballroom CDEF</h4>
          <p>You need to be present to win.</p>
        </div>
      </li>
      <li className={styles.featureItem}>
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
        <div>
          <h4>Sign up with your work email, that&#39;s it!</h4>
          <p>We&#39;ll use your email to contact you if you win.</p>
        </div>
      </li>
      <li className={styles.featureItem}>
        <FontAwesomeIcon icon={faHandHoldingHeart} size="2x" />
        <div>
          <h4>
            Swag is nice and all, but how many conference raffles have you won?
          </h4>
          <p>Sign up now and get ready for some fun!</p>
        </div>
      </li>
    </ul>
  );
}

export default function RafflePage() {
  return (
    <Layout
      title="SREcon 2025 Raffle"
      description="Enter our SREcon raffle for a chance to win exciting prizes!">
      <main className="margin-vert--lg">
        <div className="container">
          <div className="row">
            <div className="col col--6">
              <RaffleImage />
              <FeatureList />
            </div>
            <div className="col col--6">
              <div className={styles.card}>
                <div className="text--center">
                  <Heading as="h2">SREcon 2025 Raffle</Heading>
                  <p>Enter your details below for a chance to win!</p>
                </div>
                <Form />
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
