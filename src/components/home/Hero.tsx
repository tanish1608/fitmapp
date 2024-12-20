
interface HeroProps {
  title: string;
  imagePath: string;
  textColor?: string;
  page: string;
}

export default function Hero({ title, imagePath, textColor = "purple-600", page }: HeroProps) {
  const titleParts = title.split(' ');
  let highlightedText;
  let regularText;
  if (page === "creator") {
    highlightedText = titleParts.slice(3).join(' ');
    regularText = titleParts.slice(0, 3).join(' ');
  }
  else {
    highlightedText = titleParts.slice(2).join(' ');
    regularText = titleParts.slice(0, 2).join(' ');
  }
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const buttonColorClass = page === 'creator' ? 'bg-red-600 hover:bg-red-700' : 'bg-purple-600 hover:bg-purple-700';

  console.log("Image Path:", imagePath); // Debugging step

  return (
    <div className="relative min-h-[100svh] flex flex-col lg:flex-row items-center sm-justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto  lg:w-1/2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-left lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-white font-khand">
          {regularText}{' '}
          <span className={`text-${textColor}`}>{highlightedText}</span>
        </h1>

        <button
          onClick={scrollToContact}
          className={`${buttonColorClass} text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-base text-left sm:text-lg font-semibold transition-colors`}
        >
          Get Started
        </button>
      </div>

      {/* Image */}
      <div className={`relative z-0 w-full ${page === 'creator' ? 'lg:w-2/3' : 'lg:w-1/2'} h-64 lg:h-full lg:order-2`}>
        <img
          src={imagePath}
          alt="Background"
          className="w-full h-full object-cover mix-blend-lighten rounded-t-lg lg:rounded-none lg:rounded-l-lg"
        />
        <div className="absolute inset-0  rounded-t-lg lg:rounded-none lg:rounded-l-lg" />
      </div>
    </div>
  );
}