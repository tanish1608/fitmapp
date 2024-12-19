import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title: string;
  items: FAQItem[];
}

export default function FAQ({ title, items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-white">{title}</h2>
      <div className="space-y-3 sm:space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="border border-gray-800 rounded-lg overflow-hidden bg-gray-900"
          >
            <button
              className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex justify-between items-center text-white hover:bg-gray-800 transition-colors"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="font-medium text-sm sm:text-base">{item.question}</span>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 text-purple-500 flex-shrink-0 ml-4" />
              ) : (
                <ChevronDown className="h-5 w-5 text-purple-500 flex-shrink-0 ml-4" />
              )}
            </button>
            {openIndex === index && (
              <div className="px-4 sm:px-6 py-3 sm:py-4 bg-gray-800/50">
                <p className="text-gray-300 text-sm sm:text-base">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}