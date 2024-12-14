import Button from '../common/Button';

interface SignUpFormProps {
  type: 'user' | 'creator';
}

export default function SignUpForm({ type }: SignUpFormProps) {
  const isCreator = type === 'creator';
  const accentColor = isCreator ? 'red-500' : 'purple-600';

  return (
    <div className="py-12 bg-dark-800">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-100 text-center mb-8">
          Sign Up to be our first {isCreator ? 'Creator' : 'User'}
        </h2>
        <div className="flex justify-center space-x-4 mb-8">
          <Button
            variant={!isCreator ? 'primary' : 'secondary'}
            className={!isCreator ? `bg-purple-600` : 'text-gray-300'}
          >
            User
          </Button>
          <Button
            variant={isCreator ? 'primary' : 'secondary'}
            className={isCreator ? `bg-red-500` : 'text-gray-300'}
          >
            Creator
          </Button>
        </div>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 rounded-md bg-dark-700 text-gray-100 border border-dark-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 rounded-md bg-dark-700 text-gray-100 border border-dark-600 focus:outline-none focus:border-purple-500"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-2 rounded-md bg-dark-700 text-gray-100 border border-dark-600 focus:outline-none focus:border-purple-500"
          />
          <Button
            variant="primary"
            className={`w-full ${isCreator ? 'bg-red-500' : 'bg-purple-600'}`}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}