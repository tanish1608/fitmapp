import BottomNav from '../components/navigation/BottomNav';
import HomeSection from '../components/sections/HomeSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import FAQSection from '../components/sections/FAQSection';
import ContactSection from '../components/sections/ContactSection';
import Hero from '../components/home/Hero';
import InfoSection from '../components/home/InfoSection';
import FAQ from '../components/home/FAQ';
import SignUpForm from '../components/home/SignUpForm';

export default function UsersPage() {
  const faqItems = [
    {
      question: 'What is FitMapp for?',
      answer: 'FitMapp is your ultimate fitness companion that connects you with expert trainers for personalized workouts.',
    },
    {
      question: 'How do I get started?',
      answer: 'Simply sign up using our registration form below and get instant access to our platform.',
    },
    {
      question: 'What are the premium features?',
      answer: 'Premium members get access to exclusive workout plans, nutrition guides, and 1-on-1 coaching sessions.',
    },
  ];

  return (
    <div className="bg-black min-h-screen text-white">
      <HomeSection>
        <Hero
          title="TRANSFORM WITH THE BEST AND YOUR FAVOURITE"
          subtitle="Join the elite fitness community today"
          imageUrl="https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb"
          textColor="purple-600"
        />
      </HomeSection>

      <FeaturesSection>
        <div className="space-y-12 px-4 py-16">
          <InfoSection
            title="What is FitMapp?"
            content="FitMapp is your premium fitness platform that connects you with elite trainers. Get personalized workout plans, track your progress, and achieve results faster than ever."
            imageUrl="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61"
          />
          <InfoSection
            title="What's in it for you?"
            content="Access premium workout plans, expert guidance, progress tracking, and join a community of dedicated fitness enthusiasts. Transform your body with professional support."
            imageUrl="https://images.unsplash.com/photo-1574680096145-d05b474e2155"
            isReversed
          />
        </div>
      </FeaturesSection>

      <FAQSection>
        <FAQ title="Frequently Asked Questions" items={faqItems} />
      </FAQSection>

      <ContactSection>
        <SignUpForm type="user" />
      </ContactSection>

      <BottomNav type="user" />
    </div>
  );
}