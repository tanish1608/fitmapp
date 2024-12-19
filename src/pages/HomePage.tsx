import Hero from '../components/home/Hero';
import InfoSection from '../components/home/InfoSection';
import FAQ from '../components/home/FAQ';
import SignUpForm from '../components/home/SignUpForm';

export default function HomePage() {
  const faqItems = [
    {
      question: 'Who is FitMapp for?',
      answer: 'FitMapp is designed for fitness enthusiasts looking to transform their journey with expert guidance.',
    },
    {
      question: 'Where can I download FitMapp?',
      answer: 'FitMapp is available on both iOS and Android platforms through their respective app stores.',
    },
    {
      question: 'What are the first user benefits?',
      answer: 'First users get exclusive access to premium features, personalized training plans, and special discounts.',
    },
  ];

  return (
    <div className="pt-16">
      <Hero
        title="TRANSFORM WITH THE BEST AND YOUR FAVOURITEEEEE"
        subtitle="Join the revolution in fitness transformation"
        imageUrl="https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
        textColor="purple-600"
      />
      <InfoSection
        title="What is FitMapp?"
        content="FitMapp is your ultimate fitness companion, connecting you with expert trainers and providing personalized workout plans to help you achieve your fitness goals."
        imageUrl="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b"
      />
      <InfoSection
        title="What is in it for you?"
        content="Get access to premium workout plans, expert guidance, progress tracking, and a supportive community to keep you motivated throughout your fitness journey."
        imageUrl="https://images.unsplash.com/photo-1574680096145-d05b474e2155"
        isReversed
      />
      <FAQ title="Frequently Asked Questions" items={faqItems} />
      <SignUpForm type="user" />
    </div>
  );
}