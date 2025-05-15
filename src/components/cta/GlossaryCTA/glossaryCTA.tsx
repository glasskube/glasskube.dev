import CustomCTA from '../CustomCTA/customCTA';

export default function GlossaryCTA({title}: {title?: string}): JSX.Element {
  const header = title
    ? `Explore Distr's ${title} functionalities and features`
    : 'Sign up and explore Distr';

  return (
    <CustomCTA
      header={header}
      text="Distr is a battle tested software distribution platform that helps you scale from your first self-managed customers to dozens and even thousands."
    />
  );
}
