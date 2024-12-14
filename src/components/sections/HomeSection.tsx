interface HomeSectionProps {
  children: React.ReactNode;
}

export default function HomeSection({ children }: HomeSectionProps) {
  return (
    <section id="home" className="min-h-screen">
      {children}
    </section>
  );
}