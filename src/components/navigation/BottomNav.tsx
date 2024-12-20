import { useState, useEffect } from 'react';
import { Hash, HelpCircle, MessageCircle, Home } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: JSX.Element;
}

interface BottomNavProps {
  type: 'user' | 'creator';
}

export default function BottomNav({ type }: BottomNavProps) {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems: NavItem[] = [
    { id: 'home', label: 'Home', icon: <Home className="h-5 w-5" /> },
    { id: 'features', label: 'Features', icon: <Hash className="h-5 w-5" /> },
    { id: 'faq', label: 'FAQ', icon: <HelpCircle className="h-5 w-5" /> },
    { id: 'contact', label: 'Contact', icon: <MessageCircle className="h-5 w-5" /> },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      
      setLastScrollY(currentScrollY);

      // Update active section
      const sections = navItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id),
      }));

      const currentSection = sections.find(section => {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          return rect.top <= 300 && rect.bottom >= 300;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, navItems]);

  const getButtonStyles = (itemId: string) => {
    const baseStyles = "flex flex-col items-center px-3 sm:px-4 py-2 transition-all duration-200";
    const activeStyles = type === 'creator' 
      ? "text-red-400 scale-110" 
      : "text-purple-400 scale-110";
    const inactiveStyles = "text-gray-400 hover:text-gray-300";
    
    return `${baseStyles} ${activeSection === itemId ? activeStyles : inactiveStyles}`;
  };

  return (
    <div className={`fixed bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-50 transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="flex items-center gap-1 sm:gap-2 backdrop-blur-md bg-black/30 rounded-full shadow-lg px-2 sm:px-4 py-1 sm:py-2 border border-white/10">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={getButtonStyles(item.id)}
          >
            {item.icon}
            <span className="text-xs mt-1 hidden sm:block">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}