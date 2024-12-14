import { Dumbbell } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="flex items-center">
      <Dumbbell className="h-8 w-8 text-purple-600" />
      <span className="ml-2 text-xl font-bold text-gray-800">FitMapp</span>
    </Link>
  );
}