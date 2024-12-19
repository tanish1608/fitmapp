import { Link } from 'react-router-dom';
import logoo from '/Asset 18.png'; // Tell webpack this JS file uses this image


export default function Logo() {
  return (
    <Link to="/" className="flex items-center">
      <img src={logoo} alt="Logo" className="h-8 w-20" />;
    </Link>
  );
}