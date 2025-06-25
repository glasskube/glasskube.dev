// Case Studies Index
// Add new case studies here to have them appear on the main page

export interface CaseStudyData {
  title: string;
  company: string;
  industry: string;
  useCase: string;
  ctoName: string;
  ctoTitle: string;
  ctoQuote: string;
  logo: string;
  ctoImage: string;
  slug: string;
  challenge: string;
  solution: string;
  result: string;
}

// Import case study data here
export const sophrisCase: CaseStudyData = {
  title: 'Sophris.ai',
  company: 'Sophris.ai',
  industry: 'AI/Engineering Tools',
  useCase: 'Circuit Board Validation',
  ctoName: 'Ansh Gupta',
  ctoTitle: 'CTO',
  ctoQuote:
    'Distr eliminated nearly all deployment headaches. Updates that used to take days now take minutes.',
  logo: '/img/case-studies/sophris/sophris-ai-logo.png',
  ctoImage: '/img/case-studies/sophris/ansh-gupta.jpeg',
  slug: 'sophris-ai',
  challenge: `<a href="https://www.sophris.ai/" target="_blank" rel="noopener noreferrer">Sophris</a> uses AI to automate error detection in circuit board schematics. Their platform automates what traditionally is a highly manual and error-prone process of verifying hundreds of intricate components against complex data sheets.

Initially, Sophris deployed their software directly onto virtual machines within customer environments, which quickly proved challenging. Deployments relied heavily on customers’ internal IT teams, resulting in delays, misconfigurations, and slow iterations. Their engineering team often spent valuable hours troubleshooting simple file transfer and deployment issues. Sophris needed a smoother, more efficient deployment solution to maintain agility, guarantee customer success, and reduce reliance on slow-moving customer IT teams. 

"<strong>At the start, we would send zip files directly to the customer IT team,</strong>" says Ansh Gupta, CTO at Sophris. "<strong>Often, simple mistakes, like not extracting a file correctly, caused significant deployment delays, draining our resources and affecting our speed. We needed a better way.</strong>"`,

  solution: `After evaluating multiple deployment solutions, Sophris chose Glasskube's Distr platform. Distr provided a straightforward yet powerful alternative, simplifying on-premises software distribution through an intuitive Docker Compose-based approach.

"<strong>We initially considered other solutions but found them overly complex and cost-prohibitive for our stage,</strong>" Gupta explained. "<strong>Distr was simple, intuitive, and exactly what we needed.</strong>"

With Distr, Sophris quickly standarized their deployment workflow. Instead of manual file transfers and troubleshooting deployment scripts, their engineers could now deploy software updates with a few clicks. Updates became significantly faster, enabling Sophris to iterate at a speed previously hard to achieve.

"<strong>Distr eliminated nearly all deployment headaches. Updates that used to take days now take minutes,</strong>" Gupta added. "<strong>This was especially crucial when we have limited access to client infrastructure.</strong>"`,

  result: `Distr significantly reduced Sophris’s deployment time, enabling them to rapidly iterate and deliver continuous improvements to their clients. Sophris went from tedious, manual deployments dependent on external IT teams to seamless, self-managed updates.

By choosing Distr, Sophris improved their on-premises distribution experience, simplified updates, and freed up valuable engineering time, allowing them to focus on innovating and enhancing their core offering.`,
};

// Export all case studies in order (newest first)
export const allCaseStudies: CaseStudyData[] = [
  sophrisCase, // ← Original case study
  // Add new case studies here...
  // nextCase,
  // anotherCase,
];
