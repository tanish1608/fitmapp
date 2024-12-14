interface ContactSectionProps {
  children: React.ReactNode;
}

export default function ContactSection({ children }: ContactSectionProps) {
  return (
    <section id="contact" className="min-h-screen pb-24">
      {children}
    </section>
  );
}