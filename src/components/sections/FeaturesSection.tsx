interface FeaturesSectionProps {
  children: React.ReactNode;
}

export default function FeaturesSection({ children }: FeaturesSectionProps) {
  return (
    <section id="features" className="min-h-screen">
      {children}
    </section>
  );
}