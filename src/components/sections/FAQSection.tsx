interface FAQSectionProps {
  children: React.ReactNode;
}

export default function FAQSection({ children }: FAQSectionProps) {
  return (
    <section id="faq" className="min-h-screen">
      {children}
    </section>
  );
}