interface HeroProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  textColor?: string;
}

export default function Hero({ title, subtitle, imageUrl, textColor = "purple-600" }: HeroProps) {
  const titleParts = title.split(' ');
  const highlightedText = titleParts.slice(-2).join(' ');
  const regularText = titleParts.slice(0, -2).join(' ');

  return (
    <div
      className="min-h-[600px] bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${imageUrl})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {regularText}{' '}
            <span className={`text-${textColor}`}>{highlightedText}</span>
          </h1>
          <p className="text-xl mb-8 text-gray-200">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}