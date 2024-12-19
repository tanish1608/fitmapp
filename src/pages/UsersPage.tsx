import BottomNav from '../components/navigation/BottomNav';
import HomeSection from '../components/sections/HomeSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import FAQSection from '../components/sections/FAQSection';
import ContactSection from '../components/sections/ContactSection';
import Hero from '../components/home/Hero';
import InfoSection from '../components/home/InfoSection';
import FAQ from '../components/home/FAQ';
import SignUpForm from '../components/home/SignUpForm';
import img1 from '/daniel-apodaca-WdoQio6HPVA-unsplash.jpg';
import img2 from '/cristian-baron-0-hB59n1m94-unsplash.jpg';
import img3 from '/edgar-chaparro-sHfo3WOgGTU-unsplash.jpg';
import img4 from '/cindy-koops-NBCuJtqgGX8-unsplash.jpg';
import img from '/SDFGHKHJHGFDFD.png';


export default function UsersPage() {
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
    <div className="bg-black min-h-screen text-white">
      <HomeSection>
        <Hero
          title="TRANSFORM WITH THE BEST AND YOUR FAVOURITE"
          imagePath={img}
          textColor="purple-600"
          page = "user"
        />
      </HomeSection>

      <FeaturesSection>
        <div className="space-y-12 px-4 py-16">
          <InfoSection
            title="What is FitMapp?"
            content="Your personal fitness GPS for tracking progress and finding expert guides. A one-stop shop for your fitness journey—track, plan, and achieve. Connect with the right fitness guides to achieve your goals. Keep your fitness path clear with simple tracking tools and expert advice. A fitness map that grows and evolves with you."
            imageUrl={img1}
          />
          <InfoSection
            title="What's in it for you?"
            content="Track your progress, celebrate wins, and keep moving forward. Access personalized fitness support from expert fitness guides. Stay motivated with challenges, rewards, and community support. Find the right fitness guidance to suit your personal goals. Achieve more with the right tools, expert guidance, and a community cheering you on."
            imageUrl={img2}
            isReversed
          />
            <InfoSection
            title="How do we help you stay motivated?"
            content="Track progress and celebrate every milestone along the way. Join fitness challenges that push you to achieve more. Stay motivated with support from a community of like-minded people. Connect with expert fitness guides to keep you on track. Keep your fitness journey exciting with rewards and recognition."
            imageUrl={img3}
          />
            <InfoSection
            title="Why choose FitMapp?"
            content="We guide your fitness journey with personalized, expert-driven advice.   Track your progress and celebrate every fitness win.   Easily find fitness guides who match your goals.   All your fitness needs in one simple, easy-to-use app.   Join a community of motivated people working toward their goals."
            imageUrl={img4}
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