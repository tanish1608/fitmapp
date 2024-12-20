import { useState } from 'react';
import { useSignUpForm } from '../../hooks/useSignUpForm';
import type { FormData } from '../../lib/types/form';
// Utility function for conditional class names
// const cn = (...classes: (string | boolean | undefined)[]) => {
//   return classes.filter(Boolean).join(' ');
// };


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
  // const [selected, setSelected] = useState<"user" | "creator">("user");
  const { submitForm, isLoading, error } = useSignUpForm();
  const [formData, setFormData] = useState(initialFormState);
  const [success, setSuccess] = useState(false);

  // const handleToggle = (option: "user" | "creator") => {
  //   setSelected(option);
  //   setFormData(prev => ({ ...prev, userType: option }));
  //   if (option === "creator") {
  //     window.open("http://localhost:5173/fitmapp/creator", "_blank");
  //   }
  // };

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
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 text-white">
        Sign Up to be our first
      </h2>

      {/* <div className="p-8 flex items-center justify-center bg-black">
        <div 
          className={cn(
            "relative flex rounded-full p-1 w-[400px]",
            "bg-zinc-800/50 backdrop-blur-sm"
          )}
        >
          <div
            className={cn(
              "absolute h-[calc(100%-8px)] w-[calc(50%-4px)] rounded-full transition-all duration-300",
              selected === "user" ? "left-1" : "left-[calc(50%+4px)]",
              selected === "user" ? "bg-[#7C3AED]" : "bg-red-500"
            )}
          />
          <button
            onClick={() => handleToggle("user")}
            className={cn(
              "relative z-10 w-1/2 py-3 text-center text-sm font-medium transition-colors",
              selected === "user" ? "text-white" : "text-zinc-400"
            )}
          >
            User
          </button>
          <button
            onClick={() => handleToggle("creator")}
            className={cn(
              "relative z-10 w-1/2 py-3 text-center text-sm font-medium transition-colors",
              selected === "creator" ? "text-white" : "text-zinc-400"
            )}
          >
            Creator
          </button>
        </div>
      </div> */}

      <p className="text-center mt-6 text-gray-300">
        We're excited to invite you to be part of Fitmapp's development and beta testing! Share your details  with us, and you'll get early access to our platform, allowing you to buy and track your fitness plans while giving valuable feedback. Let's grow together!
      </p>
      <br />
      <br />
      <br />

      
      {error && (
        <div className="mt-6 mb-4 p-3 bg-red-500/10 border border-red-500 rounded-lg text-red-500 text-sm">
          {error}
        </div>
      )}

      {success && (
        <div className="mt-6 mb-4 p-3 bg-green-500/10 border border-green-500 rounded-lg text-green-500 text-sm">
          Successfully signed up! We'll contact you soon.
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-8 space-y-4 sm:space-y-6">
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

        <div className="flex justify-center mt-6">
          <button
            type="submit"
            disabled={isLoading}
            className={`px-6 py-2 rounded-full ${type === 'creator' ? 'bg-red-500 hover:bg-red-700' : 'bg-purple-600 hover:bg-purple-700'} text-white font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg transform hover:-translate-y-0.5`}
          > 
            {isLoading ? 'Signing Up...' : 'Join Fitmapp'}
          </button>
        </div>

      </form>
      <p className="text-center text-gray-400 text-sm mt-6">
        By signing up, you agree to our Terms of Service and Privacy Policy
      </p>
    </div>
  );
}