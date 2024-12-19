import { useState } from 'react';
import { useSignUpForm } from '../../hooks/useSignUpForm';
import type { FormData } from '../../lib/types/form';

interface SignUpFormProps {
  type: 'user' | 'creator';
}

const initialFormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
};

export default function SignUpForm({ type }: SignUpFormProps) {
  const { submitForm, isLoading, error } = useSignUpForm();
  const [formData, setFormData] = useState(initialFormState);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const data: FormData = {
      ...formData,
      userType: type,
    };

    const result = await submitForm(data);
    
    if (result) {
      setFormData(initialFormState);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="max-w-md mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-white">
        Sign Up Now
      </h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-500/10 border border-red-500 rounded-lg text-red-500 text-sm">
          {error}
        </div>
      )}

      {success && (
        <div className="mb-4 p-3 bg-green-500/10 border border-green-500 rounded-lg text-green-500 text-sm">
          Successfully signed up! We'll contact you soon.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-800 focus:outline-none focus:border-purple-500"
            required
            disabled={isLoading}
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-800 focus:outline-none focus:border-purple-500"
            required
            disabled={isLoading}
          />
        </div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-800 focus:outline-none focus:border-purple-500"
          required
          disabled={isLoading}
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-800 focus:outline-none focus:border-purple-500"
          required
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Signing Up...' : 'Sign Up'}
        </button>
      </form>
      <p className="text-center text-gray-400 text-sm mt-6">
        By signing up, you agree to our Terms of Service and Privacy Policy
      </p>
    </div>
  );
}