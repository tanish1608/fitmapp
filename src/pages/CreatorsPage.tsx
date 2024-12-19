import BottomNav from '../components/navigation/BottomNav';
import HomeSection from '../components/sections/HomeSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import FAQSection from '../components/sections/FAQSection';
import ContactSection from '../components/sections/ContactSection';
import Hero from '../components/home/Hero';
import InfoSection from '../components/home/InfoSection';
import FAQ from '../components/home/FAQ';
import SignUpForm from '../components/home/SignUpForm';

export default function CreatorsPage() {
  const faqItems = [
    {
      question: 'Who is FitMapp for creators?',
      answer: 'FitMapp for creators is a platform for fitness professionals to monetize their expertise and reach a global audience.',
    },
    {
      question: 'How do I become a FitMapp Creator?',
      answer: 'Sign up through our creator portal, verify your credentials, and start creating content for your audience.',
    },
    {
      question: 'What are the creator benefits?',
      answer: 'Creators get access to analytics tools, payment processing, client management, and marketing support.',
    },
  ];

  return (
    <div className="relative">
      <HomeSection>
        <Hero
          title="Better ways to Monetize your Fitness Expertise"
          subtitle="Turn your passion into profit with our creator platform"
          imageUrl="https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb"
          textColor="red-500"
        />
      </HomeSection>

      <FeaturesSection>
        <div className="space-y-20">
          <InfoSection
            title="What is FitMapp for creators?"
            content="FitMapp for creators is a comprehensive platform that helps fitness professionals monetize their expertise, reach more clients, and grow their business globally."
            imageUrl="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61"
          />
          <InfoSection
            title="What is in it for you?"
            content="Get access to powerful tools for content creation, client management, analytics, and payment processing. Build your brand and grow your fitness business."
            imageUrl="https://images.unsplash.com/photo-1574680096145-d05b474e2155"
            isReversed
          />
        </div>
      </FeaturesSection>

      <FAQSection>
        <FAQ title="Frequently Asked Questions" items={faqItems} />
      </FAQSection>

      <ContactSection>
        <SignUpForm type="creator" />
      </ContactSection>

      <BottomNav type="creator" />
    </div>
  );
}