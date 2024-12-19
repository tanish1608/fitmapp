interface InfoSectionProps {
  title: string;
  content: string;
  imageUrl: string;
  isReversed?: boolean;
}

export default function InfoSection({ title, content, imageUrl, isReversed = false }: InfoSectionProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 lg:gap-12`}>
        <div className="w-full lg:w-1/2 space-y-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">{title}</h2>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">{content}</p>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
            <div className="absolute inset-0 bg-purple-600/20" />
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}