import BottomNav from '../components/navigation/BottomNav';
import HomeSection from '../components/sections/HomeSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import FAQSection from '../components/sections/FAQSection';
import ContactSection from '../components/sections/ContactSection';
import Hero from '../components/home/Hero';
import InfoSection from '../components/home/InfoSection';
import FAQ from '../components/home/FAQ';
import SignUpForm from '../components/home/SignUpForm';
import img from '/anastase-maragos-9dzWZQWZMdE-unsplash.jpg';
import img2 from '/nathan-dumlao-NXMZxygMw8o-unsplash.jpg';
import img1 from '/akram-huseyn-MTCpxU8b31I-unsplash.jpg';
import img3 from '/sven-mieke-Lx_GDv7VA9M-unsplash.jpg';
import img4 from '/alora-griffiths-BNrqnvtzXio-unsplash.jpg';

export default function CreatorsPage() {
  const faqItems = [
    {
      question: 'What is FitMapp',
      answer: 'Every great journey needs a map, so is your fitness journey—and that’s where we come in, FitMapp. FitMapp is for anyone ready to take their health and wellness seriously, whether youre a fitness newbie, a seasoned gym rat, or a coach eager to inspire others. If you’ve ever felt lost in a sea of Workouts, struggled to find the right coach, or wished for one simple way to track and crush your goals, FitMapp is your map to make it happen. So, if you’re ready to turn your fitness journey into an epic adventure, welcome aboard, we’re here to help you navigate every step of the way!',
    },
    {
      question: 'What is FitMapp for?',
      answer: 'For fitness enthusiasts, it`s a platform to track your workouts, measure progress, and discover custom plans. For fitness guides, it`s a place to streamline your 1-on-1 client management and create low-interaction fitness plans while earning money. Basically, if fitness is your thing, FitMapp is your thing',
    },
    {
      question: 'Why should I register now?',
      answer: "This is your chance to get in early. As a beta tester, youll be among the first to try FitMapp, help us perfect it, and shape the future of fitness tech. Plus, who doesn`t love being a part of something game-changing from the ground up?",
    },
    {
      question: 'When will the full app launch?',
      answer: 'We`re still laying out the building blocks on your fitness map! Good things take time, and we want to make sure FitMapp`s peak performance is ready before the big launch. Want to stay in the loop? Follow us on Insta and LinkedIn to stay on track and don`t forget to register-because missing out isn`t part of the plan. Let`s build this map together!',
    },
    {
      question: 'What makes FitMapp different?',
      answer: 'At FitMapp, we’re not just another app on your phone—we’re your fitness partner along your fitness journey. We’re about bridging the gap between you and the people who could guide you through your fitness journey: the fitness guides. Think of us as the ultimate connection point, where tracking progress and accessing expert help come together seamlessly. It’s not just about hitting goals; it’s about transforming how you navigate your fitness path, every step of the way.',
    },
  ];

  return (
    <div className="bg-black relative ">
      <HomeSection>
        <Hero
          title="Better ways to Monetize your Fitness Expertise"
          imagePath={img}
          textColor="red-500"
          page = "creator"
        />
      </HomeSection>

      <FeaturesSection>
        <div className="space-y-20 px-4 py-16">
          <InfoSection
            title="What is FitMapp?"
            content="Manage your clients, create plans, and earn—all in one platform.   Become the cartographer of your client’s fitness journey.   Connect with clients and grow your fitness business.   Track progress, stay engaged, and inspire your clients to reach their goals.   Create fitness plans and build your community of loyal clients."
            imageUrl={img1}
          />
          <InfoSection
            title="What is in it for you?"
            content="Earn money while helping clients crush their fitness goals.   Grow your client base and build your fitness empire.   Easily manage clients, create plans, and track progress.   Connect with new clients and build your fitness community.   Share your expertise and inspire others to achieve their best selves."
            imageUrl={img2}
            isReversed
          />
                    <InfoSection
            title="What is FitMapp for creators?"
            content="Join a growing network of fitness professionals for tips, support, and collaboration.   Connect with other guides to share insights and grow together.   Be part of a supportive space where clients and guides thrive.   Create a positive, motivating environment for your clients.   Share your success stories and inspire others in the fitness community."
            imageUrl={img3}
          />
          <InfoSection
            title="Why choose FitMapp?"
            content="Manage your clients and grow your fitness business effortlessly.   Easily create plans and track client progress in one platform.   Get paid for helping others reach their fitness dreams.   Build a growing community of loyal clients.   Access powerful tools to help your clients stay on track and succeed."
            imageUrl={img4}
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