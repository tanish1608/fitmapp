interface HeroProps {
  title: string;
  subtitle: string;
  imagePath: string;
  textColor?: string;
}

export default function Hero({ title, subtitle, imagePath, textColor = "purple-600" }: HeroProps) {
  const titleParts = title.split(' ');
  const highlightedText = titleParts.slice(-2).join(' ');
  const regularText = titleParts.slice(0, -2).join(' ');

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  console.log("Image Path:", imagePath); // Debugging step

  return (
    <div className="relative min-h-[100svh] flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${imagePath})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
          {regularText}{' '}
          <span className={`text-${textColor}`}>{highlightedText}</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <button 
          onClick={scrollToContact}
          className="bg-purple-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-base sm:text-lg font-semibold hover:bg-purple-700 transition-colors"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}