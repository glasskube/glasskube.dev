import useBaseUrl from '@docusaurus/useBaseUrl';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import React, {useEffect, useRef, useState} from 'react';
import {allCaseStudies, CaseStudyData} from '../../../case-studies';
import styles from './styles.module.css';

const TITLE = 'Case Studies';
const DESCRIPTION = 'Customer success stories using Distr';

interface CaseStudyCardProps extends CaseStudyData {
  caseStudyRef?: React.RefObject<HTMLDivElement>;
}

function CaseStudyCard({
  title,
  company,
  industry,
  useCase,
  challenge,
  solution,
  result,
  ctoQuote,
  logo,
  ctoImage,
  ctoName,
  ctoTitle,
  caseStudyRef,
}: CaseStudyCardProps) {
  return (
    <div className={styles.caseStudyCard} ref={caseStudyRef}>
      <div className={styles.cardHeader}>
        <img
          src={useBaseUrl(logo)}
          alt={`${company} Logo`}
          className={styles.companyLogo}
        />
        <div className={styles.companyInfo}>
          <div className={styles.infoBox}>
            <div className={styles.infoLabel}>Industry:</div>
            <div className={styles.infoValue}>{industry}</div>
          </div>
          <div className={styles.infoBox}>
            <div className={styles.infoLabel}>Use Case:</div>
            <div className={styles.infoValue}>{useCase}</div>
          </div>
        </div>
      </div>

      <div className={styles.cardContent}>
        <div className={styles.mainContent}>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Challenge</h3>
            <p
              className={styles.sectionText}
              dangerouslySetInnerHTML={{__html: challenge}}
            />
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Solution</h3>
            <p
              className={styles.sectionText}
              dangerouslySetInnerHTML={{__html: solution}}
            />
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Result</h3>
            <p
              className={styles.sectionText}
              dangerouslySetInnerHTML={{__html: result}}
            />
          </div>
        </div>

        <div className={styles.sidebar}>
          <div className={styles.quoteSection}>
            <div className={styles.quoteBox}>
              <blockquote className={styles.quote}>"{ctoQuote}"</blockquote>
            </div>
            <div className={styles.ctoInfo}>
              <div className={styles.ctoPicContainer}>
                <img
                  src={useBaseUrl(ctoImage)}
                  alt={ctoName}
                  className={styles.ctoPic}
                />
              </div>
              <div className={styles.ctoDetails}>
                <div className={styles.ctoName}>{ctoName}</div>
                <div className={styles.ctoTitle}>{ctoTitle}</div>
                <div className={styles.company}>{company}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CaseStudyTracker({
  caseStudies,
  activeCase,
  onCaseClick,
}: {
  caseStudies: CaseStudyData[];
  activeCase: string | null;
  onCaseClick: (slug: string) => void;
}) {
  if (caseStudies.length <= 1) return null;

  return (
    <div className={styles.trackerSidebar}>
      <div className={styles.trackerContent}>
        <h4 className={styles.trackerTitle}>Case Studies</h4>
        <nav className={styles.trackerNav}>
          {caseStudies.map(caseStudy => (
            <button
              key={caseStudy.slug}
              className={clsx(
                styles.trackerItem,
                activeCase === caseStudy.slug && styles.trackerItemActive,
              )}
              onClick={() => onCaseClick(caseStudy.slug)}>
              {caseStudy.company}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}

function CaseStudiesHeader() {
  return (
    <section className="margin-top--lg text--center">
      <Heading as="h1">{TITLE}</Heading>
      <p>
        <strong>{DESCRIPTION}</strong>
      </p>
    </section>
  );
}

function CaseStudiesContent() {
  const [activeCase, setActiveCase] = useState<string | null>(
    allCaseStudies.length > 0 ? allCaseStudies[0].slug : null,
  );
  const caseStudyRefs = useRef<Record<string, React.RefObject<HTMLDivElement>>>(
    {},
  );

  // Create refs for each case study
  allCaseStudies.forEach(caseStudy => {
    if (!caseStudyRefs.current[caseStudy.slug]) {
      caseStudyRefs.current[caseStudy.slug] = React.createRef<HTMLDivElement>();
    }
  });

  // Handle clicking on tracker items
  const handleCaseClick = (slug: string) => {
    const ref = caseStudyRefs.current[slug];
    if (ref?.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // Track which case study is currently visible
  useEffect(() => {
    if (allCaseStudies.length <= 1) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const slug = entry.target.getAttribute('data-slug');
            if (slug) {
              setActiveCase(slug);
            }
          }
        });
      },
      {rootMargin: '-20% 0px -60% 0px'},
    );

    Object.entries(caseStudyRefs.current).forEach(([slug, ref]) => {
      if (ref.current) {
        ref.current.setAttribute('data-slug', slug);
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.caseStudiesSection}>
      <div className="container">
        <div className={styles.caseStudiesContainer}>
          <CaseStudyTracker
            caseStudies={allCaseStudies}
            activeCase={activeCase}
            onCaseClick={handleCaseClick}
          />
          <div className={styles.caseStudiesMain}>
            {allCaseStudies.map((caseStudy, index) => (
              <div
                key={caseStudy.slug}
                className={index > 0 ? styles.caseStudySpacing : ''}>
                <CaseStudyCard
                  {...caseStudy}
                  caseStudyRef={caseStudyRefs.current[caseStudy.slug]}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function CaseStudiesPage(): JSX.Element {
  return (
    <Layout title={TITLE} description={DESCRIPTION}>
      <main className="margin-vert--lg">
        <CaseStudiesHeader />
        <CaseStudiesContent />
      </main>
    </Layout>
  );
}
