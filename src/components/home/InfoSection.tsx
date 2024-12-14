interface InfoSectionProps {
  title: string;
  content: string;
  imageUrl: string;
  isReversed?: boolean;
}

export default function InfoSection({ title, content, imageUrl, isReversed = false }: InfoSectionProps) {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`}>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4 text-gray-100">{title}</h2>
            <p className="text-gray-300">{content}</p>
          </div>
          <div className="md:w-1/2">
            <img
              src={imageUrl}
              alt={title}
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}